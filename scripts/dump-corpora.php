<?php
/**
 * @author Niklas Laxström
 * @license GPL-2.0-or-later
 */

// Standard boilerplate to define $IP
if ( getenv( 'MW_INSTALL_PATH' ) !== false ) {
	$IP = getenv( 'MW_INSTALL_PATH' );
} else {
	$dir = __DIR__;
	$IP = "$dir/../../..";
}
require_once "$IP/maintenance/Maintenance.php";

use ContentTranslation\JsonDumpFormatter;
use ContentTranslation\LoadBalancer;
use ContentTranslation\Manager\TranslationCorporaManager;
use ContentTranslation\TmxDumpFormatter;
use ContentTranslation\Translation;
use MediaWiki\Maintenance\Maintenance;
use MediaWiki\MediaWikiServices;
use Wikimedia\Rdbms\IDatabase;
use Wikimedia\Rdbms\IExpression;
use Wikimedia\Rdbms\IResultWrapper;
use Wikimedia\Rdbms\SelectQueryBuilder;

class CXCorporaDump extends Maintenance {
	/** @var string[][] */
	private static $sinkTypes = [
		'file' => [ 'DumpFileOutput', '' ],
		'gzip' => [ 'DumpGZipOutput', '.gz' ],
		'bzip2' => [ 'DumpBZip2Output', '.bz2' ],
		'dbzip2' => [ 'DumpDBZip2Output', '.bz2' ],
		'7zip' => [ 'Dump7ZipOutput', '.7z' ],
	];

	public function __construct() {
		parent::__construct();

		$this->requireExtension( 'ContentTranslation' );
		$this->addDescription( 'Script to produce parallel corpora dumps from CX translations.' );

		$this->addOption(
			'source-language',
			'(optional) Source language',
			false, /*required*/
			true /*has arg*/
		);

		$this->addOption(
			'target-language',
			'(optional) Target language',
			false, /*required*/
			true /*has arg*/
		);

		$this->addOption(
			'format',
			'(optional) Dump format. Available formats json (default) and tmx.',
			false, /*required*/
			true /*has arg*/
		);

		$this->addOption(
			'compression',
			'(optional) Compression. Available formats gzip, bzip2, dbzip2, 7zip.',
			false, /*required*/
			true /*has arg*/
		);

		$this->addOption(
			'outputdir',
			'(optional) Location to place the file(s). Defaults to current working directory.',
			false, /*required*/
			true /*has arg*/
		);

		$this->addOption(
			'split-at',
			'(optional) If there are more than this published articles, also create split dumps.',
			false, /*required*/
			true /*has arg*/
		);

		$this->addOption(
			'plaintext',
			'(optional) Strip away HTML tags.'
		);
	}

	public function execute() {
		// Setup and validate configuration
		$sourceLanguage = $this->getOption( 'source-language', false );
		$targetLanguage = $this->getOption( 'target-language', false );
		$plain = $this->getOption( 'plaintext', false );
		$splitAt = $this->getOption( 'split-at', false );
		$dir = $this->getOption( 'outputdir', '.' );

		$format = $this->getOption( 'format', 'json' );
		if ( !in_array( $format, [ 'json', 'tmx' ] ) ) {
			$this->fatalError( "Unknown output format\n" );
		}

		$type = $plain ? 'text' : 'html';
		if ( $format === 'tmx' && $type === 'html' ) {
			$this->fatalError( "TMX output format is only supported with plaintext\n" );
		}

		$sinkType = $this->getOption( 'compression', 'file' );
		if ( !isset( self::$sinkTypes[ $sinkType ] ) ) {
			$this->fatalError( "Unknown compression format\n" );
		}
		[ $sinkClass, $sinkExtension ] = self::$sinkTypes[ $sinkType ];

		// Figure out groups (which translation pairs go to which file)
		/** @var LoadBalancer $lb */
		$lb = MediaWikiServices::getInstance()->getService( 'ContentTranslation.LoadBalancer' );
		$db = $lb->getConnection( DB_REPLICA, 'vslow' );

		if ( !$splitAt ) {
			$name = self::makePairName( $sourceLanguage, $targetLanguage );
			$groups = [ $name => [ [ $sourceLanguage, $targetLanguage ] ] ];
		} else {
			$pairsWithCounts = self::getLanguagePairs( $db, $sourceLanguage, $targetLanguage );
			$groups = self::groupLanguagePairs( $pairsWithCounts, $splitAt );
		}

		// Fetch data from corpora table and stream it to the sinks using an exporter
		/** @var TranslationCorporaManager $corporaManager */
		$corporaManager = MediaWikiServices::getInstance()->getService(
			'ContentTranslation.TranslationCorporaManager'
		);
		foreach ( $groups as $name => $pairs ) {
			$translations = self::getTranslations( $db, $pairs );
			if ( !$translations->numRows() ) {
				$this->output( "No translations found for group $name\n" );
				continue;
			}

			$path = "$dir/cx-corpora.$name.$type.$format$sinkExtension";
			$sink = new $sinkClass( $path );
			$formatter = self::getFormatter( $format, $name );

			$this->output( "Started exporting $path\n" );

			foreach ( $translations as $translation ) {
				$translation = (array)$translation;
				$sections = $corporaManager->getCorporaDumpArraysByTranslationId( (int)$translation['id'], $plain );
				$translation['corpora'] = $sections;

				// Skip units with no data at all
				if ( $translation['corpora'] === [] ) {
					continue;
				}

				// Stream it to the sink
				$output = $formatter->format( $translation );
				$sink->write( $output );
			}

			$output = $formatter->close();
			$sink->writeCloseStream( $output );
			$this->output( "Finished exporting $path\n" );
		}
	}

	/**
	 * @param string|false $source
	 * @param string|false $target
	 * @return string
	 */
	private static function makePairName( $source, $target ) {
		$source = $source ?: '_';
		$target = $target ?: '_';
		return "{$source}2{$target}";
	}

	/**
	 * Get all the actually existing language pairs with the number of published translations for
	 * each pair.
	 * @param IDatabase $db
	 * @param string $sourceLanguage
	 * @param string $targetLanguage
	 * @return IResultWrapper
	 */
	private static function getLanguagePairs( IDatabase $db, $sourceLanguage, $targetLanguage ) {
		$publishedCondition = Translation::getPublishedCondition( $db );
		$pairs = [ [ $sourceLanguage, $targetLanguage ] ];
		$languageCondition = self::makeLanguageConditions( $db, $pairs );

		return $db->newSelectQueryBuilder()
			->select( [
				'sourceLanguage' => 'translation_source_language',
				'targetLanguage' => 'translation_target_language',
				'count' => 'COUNT(*)',
			] )
			->from( 'cx_translations' )
			->where( $publishedCondition )
			->andWhere( $languageCondition )
			->groupBy( [ 'translation_source_language', 'translation_target_language' ] )
			->orderBy( 'translation_target_language', SelectQueryBuilder::SORT_ASC )
			->orderBy( 'count', SelectQueryBuilder::SORT_DESC )
			->caller( __METHOD__ )
			->fetchResultSet();
	}

	/**
	 * @param IDatabase $db
	 * @param array $pairs
	 * @return array|IExpression
	 */
	private static function makeLanguageConditions( IDatabase $db, array $pairs ) {
		$conds = [];
		foreach ( $pairs as [ $sourceLanguage, $targetLanguage ] ) {
			$languageCondition = [];
			if ( $sourceLanguage ) {
				$languageCondition['translation_source_language'] = $sourceLanguage;
			}

			if ( $targetLanguage ) {
				$languageCondition['translation_target_language'] = $targetLanguage;
			}

			if ( $languageCondition !== [] ) {
				$conds[] = $db->andExpr( $languageCondition );
			}
		}

		if ( $conds === [] ) {
			return [];
		}

		return $db->orExpr( $conds );
	}

	/**
	 * When the split option is used, we need to figure which language pairs go to which
	 * files. This function does that based on the data returned by ::getLanguagePairs.
	 * @param IResultWrapper $pairsWithCounts
	 * @param int $splitAt
	 * @return array
	 */
	private static function groupLanguagePairs( $pairsWithCounts, $splitAt ) {
		$pairMap = [];
		// First format the tabular format into target => source => count for easier processing
		foreach ( $pairsWithCounts as $row ) {
			$pairMap[ $row->targetLanguage ][ $row->sourceLanguage ] = $row->count;
		}

		$groups = [];
		foreach ( $pairMap as $targetLanguage => $sourceLanguageCounts ) {
			// First check for language pairs that have more translation than $splitAt pages
			foreach ( $sourceLanguageCounts as $sourceLanguage => $count ) {
				if ( $count < $splitAt ) {
					continue;
				}

				$name = self::makePairName( $sourceLanguage, $targetLanguage );
				$groups[ $name ][] = [ $sourceLanguage, $targetLanguage ];
				unset( $pairMap[ $targetLanguage ][ $sourceLanguage ] );
				unset( $sourceLanguageCounts[ $sourceLanguage ] );
			}

			// Then check if the target language has more than $split pages from the
			// remaining source languages.
			if ( array_sum( $sourceLanguageCounts ) < $splitAt ) {
				continue;
			}

			$name = self::makePairName( false, $targetLanguage );
			foreach ( array_keys( $sourceLanguageCounts ) as $sourceLanguage ) {
				$groups[ $name ][] = [ $sourceLanguage, $targetLanguage ];
			}
			unset( $pairMap[ $targetLanguage ] );
		}

		// Finally, lump all the rest together in catch-all group
		$name = self::makePairName( false, false );
		foreach ( $pairMap as $targetLanguage => $sourceLanguageCounts ) {
			foreach ( array_keys( $sourceLanguageCounts ) as $sourceLanguage ) {
				$groups[ $name ][] = [ $sourceLanguage, $targetLanguage ];
			}
		}

		return $groups;
	}

	/**
	 * @param IDatabase $db
	 * @param array $pairs
	 * @return IResultWrapper
	 */
	private static function getTranslations( $db, $pairs ) {
		$publishedCondition = Translation::getPublishedCondition( $db );
		$languageCondition = self::makeLanguageConditions( $db, $pairs );

		return $db->newSelectQueryBuilder()
			->select( [
				'id' => 'translation_id',
				'sourceLanguage' => 'translation_source_language',
				'targetLanguage' => 'translation_target_language',
			] )
			->from( 'cx_translations' )
			->where( $publishedCondition )
			->andWhere( $languageCondition )
			->caller( __METHOD__ )
			->fetchResultSet();
	}

	/**
	 * @param string $format
	 * @param string $pairName
	 * @return JsonDumpFormatter|TmxDumpFormatter
	 */
	private static function getFormatter( $format, $pairName ) {
		if ( $format === 'json' ) {
			return new JsonDumpFormatter();
		} else {
			[ $sourceLanguage, $targetLanguage ] = explode( '2', $pairName );
			return new TmxDumpFormatter( $sourceLanguage === '_' ? '*all*' : $sourceLanguage );
		}
	}
}

$maintClass = CXCorporaDump::class;
require_once RUN_MAINTENANCE_IF_MAIN;
