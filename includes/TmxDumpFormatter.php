<?php

namespace ContentTranslation;

use XMLWriter;

class TmxDumpFormatter {
	/** @var bool */
	private $isStarted = false;

	/** @var XMLWriter */
	private $xml;

	/** @var string */
	private $sourceLanguage;

	public function __construct( $sourceLanguage ) {
		$this->sourceLanguage = $sourceLanguage;

		$this->xml = new XMLWriter();
		$this->xml->openMemory();
		$this->xml->setIndent( true );
		$this->xml->setIndentString( '  ' );
		$this->xml->startDocument( '1.0', 'UTF-8' );
	}

	public function format( array $entry ) {
		if ( !$this->isStarted ) {
			$this->isStarted = true;
			$this->begin();
		}

		$this->formatEntry( $entry );

		return $this->xml->flush();
	}

	private function begin() {
		$this->xml->startElement( 'tmx' );
		$this->xml->writeAttribute( 'version', '1.4' );
		$this->xml->startElement( 'header' );
		$this->xml->writeAttribute( 'creationtool', 'dump-corpora.php / XMLWriter' );
		$this->xml->writeAttribute( 'creationtoolversion', '2.0.0' );
		$this->xml->writeAttribute( 'segtype', 'block' );
		$this->xml->writeAttribute( 'o-tmf', 'sql' );
		$this->xml->writeAttribute( 'adminlang', 'en' );
		$this->xml->writeAttribute( 'sourcelang', $this->sourceLanguage );
		$this->xml->writeAttribute( 'datatype', 'plaintext' );
		$this->xml->endElement(); // header
		$this->xml->startElement( 'body' );
	}

	public function close() {
		$this->xml->endElement(); // body
		// @phan-suppress-next-line PhanPluginDuplicateAdjacentStatement
		$this->xml->endElement(); // tmx

		return $this->xml->flush();
	}

	private function formatEntry( array $entry ) {
		foreach ( $entry['corpora'] as $id => $units ) {
			$this->xml->startElement( 'tu' );
			$this->xml->writeAttribute( 'srclang', $entry['sourceLanguage'] );
			foreach ( $units as $origin => $unit ) {
				if ( $unit['content'] === null ) {
					continue;
				}

				$this->xml->startElement( 'tuv' );
				if ( $origin === 'source' ) {
					$this->xml->writeAttribute( 'xml:lang', $entry['sourceLanguage'] );
				} else {
					$this->xml->writeAttribute( 'xml:lang', $entry['targetLanguage'] );
				}

				$this->xml->startElement( 'prop' );
				$this->xml->writeAttribute( 'type', 'origin' );
				$this->xml->text( $origin );
				$this->xml->endElement(); // prop

				$this->xml->writeElement( 'seg', $unit['content'] );

				$this->xml->endElement(); // tuv
			}

			$this->xml->endElement(); // tu
		}
	}
}
