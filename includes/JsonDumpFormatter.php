<?php

namespace ContentTranslation;

use MediaWiki\Json\FormatJson;

class JsonDumpFormatter {
	/** @var bool */
	private $isStarted = false;

	public function format( array $entry ): string {
		$output = '';

		if ( !$this->isStarted ) {
			$this->isStarted = true;
			$output .= $this->getHeader();
			$output .= $this->formatEntry( $entry );
		} else {
			$output .= ",\n";
			$output .= $this->formatEntry( $entry );
		}

		return $output;
	}

	public function close(): string {
		if ( !$this->isStarted ) {
			return '[]';
		}

		$output = "\n";
		$output .= $this->getFooter();

		return $output;
	}

	private function getHeader(): string {
		return "[\n";
	}

	private function getFooter(): string {
		return "]\n";
	}

	/**
	 * @param array $entry
	 * @return string
	 */
	private function formatEntry( array $entry ): string {
		$output = '';
		$indent = '    ';

		foreach ( $entry['corpora'] as $id => $unit ) {
			unset( $unit['source']['timestamp'], $unit['user']['timestamp'], $unit['mt']['timestamp'] );

			$globalId = "{$entry['id']}/$id";
			$section = [
				'id' => $globalId,
				'sourceLanguage' => $entry['sourceLanguage'],
				'targetLanguage' => $entry['targetLanguage'],
				'source' => $unit['source'],
				'mt' => $unit['mt'],
				'target' => $unit['user'],
			];

			$json = FormatJson::encode( $section, $indent, FormatJson::ALL_OK );
			$output .= self::indent( $indent, $json ) . ",\n";
		}

		$output = rtrim( $output, "\n," );
		return $output;
	}

	private static function indent( string $indent, string $text ): string {
		// Assuming literal newlines do not occur within strings
		$text = $indent . str_replace( "\n", "\n$indent", $text );
		return $text;
	}
}
