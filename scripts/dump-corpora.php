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
			'(optional) Dump format. Defaults to JSON.',
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

		$this->resets = array();
		$this->tags = array();
	}

	public function execute() {
		$sourceLanguage = $this->getOption( 'source-language', false );
		$targetLanguage = $this->getOption( 'target-language', false );
		$format = $this->getOption( 'format', 'json' );
		$plain = $this->getOption( 'plaintext', false );
		$split = $this->getOption( 'split-at', false );
		$type = $plain ? 'text' : 'html';

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
			if ( $plain ) {
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
		}

		if ( !$split ) {
			$source = $sourceLanguage ?: '_';
			$target = $targetLanguage ?: '_';
			$filename = "cx-corpora.{$source}2{$target}.$type.$format";
			$this->export( $format, $filename, $translations );

			return;
		}

		$sorted = $this->sortTranslations( $translations );
		foreach ( $sorted as $targetLanguage => $sourceLanguages ) {
			foreach ( $sourceLanguages as $sourceLanguage => $targets ) {
				if ( count( $targets ) < $split ) {
					continue;
				}

				$filename = "cx-corpora.{$sourceLanguage}2{$targetLanguage}.$type.$format";
				$this->export( $format, $filename, $targets );
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
			$this->export( $format, $filename, $targets );
			unset( $sorted[$targetLanguage] );
		}

		if ( count( $sorted ) ) {
			$targets = call_user_func_array( 'array_merge', $sorted );
			$filename = "cx-corpora._2_.$type.$format";
			$this->export( $format, $filename, $targets );
		}
	}

	public function sortTranslations( $translations ) {
		$sorted = array();
		foreach ( $translations as $translation ) {
			$sourceLanguage = $translation['sourceLanguage'];
			$targetLanguage = $translation['targetLanguage'];

			if ( !isset( $sorted[$targetLanguage] ) ) {
				$sorted[$targetLanguage] = array();
			}

			if ( !isset( $sorted[$targetLanguage][$sourceLanguage] ) ) {
				$sorted[$targetLanguage][$sourceLanguage] = array();
			}

			$sorted[$targetLanguage][$sourceLanguage][] = $translation;
		}

		return $sorted;
	}

	public function export( $format, $filename, array $targets ) {
		if ( $format !== 'json' ) {
			$this->error( "Unknown output format\n", 1 );
		}

		$data = $this->formatJSON( $targets );
		if ( $data ) {
			file_put_contents( $filename, $data );
			$this->output( "$filename\n" );
		}
	}

	public function formatJSON( array $targets ) {
		$output = array();
		foreach ( $targets as $translation ) {
			foreach ( $translation['corpora'] as $id => $unit ) {
				if ( !isset( $unit['user'] ) ) {
					continue;
				}

				unset( $unit['source']['engine'], $unit['user']['engine'] );
				unset( $unit['source']['timestamp'], $unit['user']['timestamp'], $unit['mt']['timestamp'] );

				$globalId = "{$translation['translationId']}/$id";
				$output[] = array(
					'id' => $globalId,
					'sourceLanguage' => $translation['sourceLanguage'],
					'targetLanguage' => $translation['targetLanguage'],
					'source' => $unit['source'],
					'mt' => $unit['mt'],
					'target' => $unit['user'],
				);
			}
		}

		if ( $output ) {
			return FormatJson::encode( $output, true, FormatJson::ALL_OK );
		} else {
			return null;
		}
	}
}

$maintClass = 'CXCorporaDump';
require_once RUN_MAINTENANCE_IF_MAIN;
