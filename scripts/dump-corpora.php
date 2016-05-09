<?php
/**
 *
 * @file
 * @author Niklas Laxström
 * @license GPL-2.0+
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
use ContentTranslation\Translation;

class CXCorporaDump extends Maintenance {
	public function __construct() {
		parent::__construct();
		$this->mDescription = 'Script to produce parallel corpora dumps from CX translations.';

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
			'split-at',
			'(optional) If there are more than this published articles, also create split dumps.',
			false, /*required*/
			true /*has arg*/
		);

		$this->addOption(
			'plaintext',
			'(optional) Strip away html.'
		);

		$this->resets = [];
		$this->tags = [];
	}

	public function execute() {
		$sourceLanguage = $this->getOption( 'source-language', false );
		$targetLanguage = $this->getOption( 'target-language', false );
		$format = $this->getOption( 'format', 'json' );
		$plain = $this->getOption( 'plaintext', false );
		$split = $this->getOption( 'split-at', false );
		$type = $plain ? 'text' : 'html';

		$formatSpec = [ $format, $type ];

		$limit = 999999999;
		$offset = 0;
		$translations = Translation::getAllPublishedTranslations(
			$sourceLanguage,
			$targetLanguage,
			$limit,
			$offset
		);

		// Fetch the actual interesting data
		$db = Database::getConnection( DB_SLAVE );
		$lookup = new CorporaLookup( $db );
		foreach ( $translations as &$translation ) {
			$translation['corpora'] = $lookup->getByTranslationId( $translation['translationId'] );

			// Some general cleanup
			foreach ( $translation['corpora'] as $id => $unit ) {
				if ( !isset( $unit['user'] ) ) {
					unset( $translation['corpora'][$id] );
					continue;
				}

				unset( $translation['corpora'][$id]['source']['engine'] );
				unset( $translation['corpora'][$id]['user']['engine'] );
			}

			if ( !$plain ) {
				continue;
			}

			foreach ( $translation['corpora'] as $id => $unit ) {
				foreach ( $unit as $field => $value ) {
					if ( !isset( $value['content'] ) ) {
						continue;
					}

					$translation['corpora'][$id][$field]['content'] =
						Sanitizer::stripAllTags( $value['content'] );
				}
			}
		}

		if ( !$split ) {
			$source = $sourceLanguage ?: '_';
			$target = $targetLanguage ?: '_';
			$filename = "cx-corpora.{$source}2{$target}.$type.$format";
			$this->export( $formatSpec, $filename, $translations, $source );

			return;
		}

		$sorted = $this->sortTranslations( $translations );
		foreach ( $sorted as $targetLanguage => $sourceLanguages ) {
			foreach ( $sourceLanguages as $sourceLanguage => $targets ) {
				if ( count( $targets ) < $split ) {
					continue;
				}

				$filename = "cx-corpora.{$sourceLanguage}2{$targetLanguage}.$type.$format";
				$this->export( $formatSpec, $filename, $targets, $sourceLanguage );
				unset( $sorted[$targetLanguage][$sourceLanguage] );
			}

			// Check whether we exported everything
			if ( count( $sorted[$targetLanguage] ) === 0 ) {
				unset( $sorted[$targetLanguage] );
				continue;
			}

			// Flatten the rest
			$sorted[$targetLanguage] = call_user_func_array( 'array_merge', $sorted[$targetLanguage] );
			// Export now if threshold is met, otherwise leave it to the end any2any.
			if ( count( $targets ) < $split ) {
				continue;
			}

			$filename = "cx-corpora._2{$targetLanguage}.$type.$format";
			$this->export( $formatSpec, $filename, $targets, '_' );
			unset( $sorted[$targetLanguage] );
		}

		if ( count( $sorted ) ) {
			$targets = call_user_func_array( 'array_merge', $sorted );
			$filename = "cx-corpora._2_.$type.$format";
			$this->export( $formatSpec, $filename, $targets, '_' );
		}
	}

	public function sortTranslations( $translations ) {
		$sorted = [];
		foreach ( $translations as $translation ) {
			$sourceLanguage = $translation['sourceLanguage'];
			$targetLanguage = $translation['targetLanguage'];

			if ( !isset( $sorted[$targetLanguage] ) ) {
				$sorted[$targetLanguage] = [];
			}

			if ( !isset( $sorted[$targetLanguage][$sourceLanguage] ) ) {
				$sorted[$targetLanguage][$sourceLanguage] = [];
			}

			$sorted[$targetLanguage][$sourceLanguage][] = $translation;
		}

		return $sorted;
	}

	public function export( $formatSpec, $filename, array $targets, $sourceLanguage ) {
		$data = null;

		list( $format, $type ) = $formatSpec;

		if ( $format === 'json' ) {
			$data = $this->formatJSON( $targets );
		} elseif ( $format === 'tmx' ) {
			$data = $this->formatTMX( $targets, $sourceLanguage, $type );
		} else {
			$this->error( "Unknown output format\n", 1 );
		}

		if ( $data ) {
			file_put_contents( $filename, $data );
			$this->output( "$filename\n" );
		}
	}

	/**
	 * @param array $targets
	 * @return string|null
	 */
	public function formatJSON( array $targets ) {
		$output = [];
		foreach ( $targets as $translation ) {
			foreach ( $translation['corpora'] as $id => $unit ) {
				unset( $unit['source']['timestamp'], $unit['user']['timestamp'], $unit['mt']['timestamp'] );

				$globalId = "{$translation['translationId']}/$id";
				$output[] = [
					'id' => $globalId,
					'sourceLanguage' => $translation['sourceLanguage'],
					'targetLanguage' => $translation['targetLanguage'],
					'source' => $unit['source'],
					'mt' => $unit['mt'],
					'target' => $unit['user'],
				];
			}
		}

		if ( $output ) {
			return FormatJson::encode( $output, true, FormatJson::ALL_OK );
		} else {
			return null;
		}
	}

	/**
	 * @param array $targets
	 * @param string $sourceLanguage Language code.
	 * @param string $type Either html or plain.
	 * @return string|null
	 */
	public function formatTMX( array $targets, $sourceLanguage, $type ) {
		if ( $type === 'html' ) {
			$this->error( "TMX output format is only supported with plaintext\n", 1 );
		}

		$xml = new DOMDocument( '1.0', 'UTF-8' );
		$spawn = function ( $tag, array $attributes = [] ) use ( $xml ) {
			$element = $xml->createElement( $tag );
			foreach ( $attributes as $key => $value ) {
				$element->setAttribute( $key, $value );
			}

			return $element;
		};

		$tmx = $spawn( 'tmx', [ 'version' => '1.4' ] );
		$xml->appendChild( $tmx );

		$header = $spawn( 'header', [
			'creationtool' => 'dump-corpora.php / DOMDocument',
			'creationtoolversion' => '1.0.0',
			// Could be paragraph, but not guaranteed...
			'segtype' => 'block',
			'o-tmf' => 'sql',
			'adminlang' => 'en',
			'sourcelang' => $sourceLanguage === '_' ? '*all*' : $sourceLanguage,
			'datatype' => 'plaintext',
		] );
		$tmx->appendChild( $header );

		$body = $spawn( 'body' );
		$tmx->appendChild( $body );

		foreach ( $targets as $translation ) {
			foreach ( $translation['corpora'] as $id => $units ) {
				$tu = $spawn( 'tu', [ 'srclang' => $translation['sourceLanguage'] ] );
				$body->appendChild( $tu );
				foreach ( $units as $origin => $unit ) {
					if ( $unit['content'] === null ) {
						continue;
					}
					if ( $origin === 'source' ) {
						$tuv = $spawn( 'tuv', [ 'xml:lang' => $translation['sourceLanguage'] ] );
					} else {
						$tuv = $spawn( 'tuv', [ 'xml:lang' => $translation['targetLanguage'] ] );
					}
					$tu->appendChild( $tuv );
					$tuvProp = $spawn( 'prop', [ 'type' => 'origin' ] );
					$tuvProp->appendChild( $xml->createTextNode( $origin ) );
					$tuv->appendChild( $tuvProp );
					$tuvSeg = $spawn( 'seg' );
					$tuv->appendChild( $tuvSeg );
					$tuvContent = $xml->createTextNode( $unit['content'] );
					$tuvSeg->appendChild( $tuvContent );
				}
			}
		}
		// Format the output with indentation for readability
		$xml->formatOutput = true;
		return $xml->saveXML();
	}
}

$maintClass = 'CXCorporaDump';
require_once RUN_MAINTENANCE_IF_MAIN;
