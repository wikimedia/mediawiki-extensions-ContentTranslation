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

use ContentTranslation\CorporaLookup;
use ContentTranslation\Database;
use ContentTranslation\JsonDumpFormatter;
use ContentTranslation\TmxDumpFormatter;
use ContentTranslation\Translation;
use Wikimedia\Rdbms\IDatabase;
use Wikimedia\Rdbms\IResultWrapper;

class CXCorporaDump extends Maintenance {
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
			$this->error( "Unknown output format\n", 1 );
		}

		$type = $plain ? 'text' : 'html';
		if ( $format === 'tmx' && $type === 'html' ) {
			$this->error( "TMX output format is only supported with plaintext\n", 1 );
		}

		$sinkType = $this->getOption( 'compression', 'file' );
		if ( !isset( self::$sinkTypes[ $sinkType ] ) ) {
			$this->error( "Unknown compression format\n", 1 );
		}
		list( $sinkClass, $sinkExtension ) = self::$sinkTypes[ $sinkType ];

		// Figure out groups (which translation pairs go to which file)
		$db = Database::getConnection( DB_REPLICA );

		if ( !$splitAt ) {
			$name = self::makePairName( $sourceLanguage, $targetLanguage );
			$groups = [ $name => [ [ $sourceLanguage, $targetLanguage ] ] ];
		} else {
			$pairsWithCounts = self::getLanguagePairs( $db, $sourceLanguage, $targetLanguage );
			$groups = self::groupLanguagePairs( $pairsWithCounts, $splitAt );
		}

		// Fetch data from corpora table and stream it to the sinks using an exporter
		$lookup = new CorporaLookup( $db );
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
				$sections = $lookup->getByTranslationId( $translation['id'] )[ 'sections' ];
				$translation['corpora'] = $sections;

				// Massage the data for export
				foreach ( $translation['corpora'] as $id => $unit ) {
					// Skip units which don't have user provided input
					if ( !isset( $unit['user'] ) ) {
						unset( $translation['corpora'][$id] );
						continue;
					}

					// Irrelevant data for the dumps
					unset( $translation['corpora'][$id]['source']['engine'] );
					unset( $translation['corpora'][$id]['user']['engine'] );

					// Strip HTML if requested from the sources that are present
					if ( $plain ) {
						foreach ( $unit as $field => $value ) {
						if ( !isset( $value['content'] ) ) {
							continue;
						}

						$translation['corpora'][$id][$field]['content'] =
							Sanitizer::stripAllTags( $value['content'] );
						}
					}
				}

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
		$tables = 'cx_translations';

		$fields = [
			'sourceLanguage' => 'translation_source_language',
			'targetLanguage' => 'translation_target_language',
			'count' => 'count(*)',
		];

		$publishedCondition = Translation::getPublishedCondition( $db );
		$pairs = [ [ $sourceLanguage, $targetLanguage ] ];
		$languageCondition = self::makeLanguageConditions( $db, $pairs );
		$conditions = $db->makeList(
			[ $publishedCondition, $languageCondition ],
			LIST_AND
		);

		$options = [
			'GROUP BY' => 'translation_source_language, translation_target_language',
			'ORDER BY' => 'translation_target_language ASC, count DESC'
		];

		$res = $db->select( $tables, $fields, $conditions, __METHOD__, $options );

		return $res;
	}

	private static function makeLanguageConditions( IDatabase $db, array $pairs ) {
		$conds = [];
		foreach ( $pairs as list( $sourceLanguage, $targetLanguage ) ) {
			$languageCondition = [];
			if ( $sourceLanguage ) {
				$languageCondition['translation_source_language'] = $sourceLanguage;
			}

			if ( $targetLanguage ) {
				$languageCondition['translation_target_language'] = $targetLanguage;
			}

			if ( $languageCondition !== [] ) {
				$conds[] = $db->makeList( $languageCondition, LIST_AND );
			}
		}

		// Use dummy condition to keep rest of the code simpler
		if ( $conds === [] ) {
			return '1 = 1';
		}

		return $db->makeList( $conds, LIST_OR );
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

	private static function getTranslations( $db, $pairs ) {
		$tables = 'cx_translations';

		$fields = [
			'id' => 'translation_id',
			'sourceLanguage' => 'translation_source_language',
			'targetLanguage' => 'translation_target_language',
		];

		$publishedCondition = Translation::getPublishedCondition( $db );
		$languageCondition = self::makeLanguageConditions( $db, $pairs );
		$conditions = $db->makeList(
			[ $publishedCondition, $languageCondition ],
			LIST_AND
		);

		$res = $db->select( $tables, $fields, $conditions, __METHOD__ );

		return $res;
	}

	private static function getFormatter( $format, $pairName ) {
		if ( $format === 'json' ) {
			return new JsonDumpFormatter();
		} else {
			list( $sourceLanguage, $targetLanguage ) = explode( '2', $pairName );
			return new TmxDumpFormatter( $sourceLanguage === '_' ? '*all*' : $sourceLanguage );
		}
	}
}

$maintClass = CXCorporaDump::class;
require_once RUN_MAINTENANCE_IF_MAIN;
