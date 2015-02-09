/**
 * ContentTranslation Stats
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	var max = 0;

	function getCXStats() {
		var api = new mw.Api();
		return api.get( {
			action: 'query',
			list: 'contenttranslationstats'
		} );
	}

	function findLanguagePair( records, source, target, status ) {
		return $.grep( records, function ( record ) {
			return record.sourceLanguage === source &&
				record.targetLanguage === target &&
				record.status === status;
		} );
	}

	function jsonToTable( records, status, property ) {
		var i, j, record,
			table = [],
			languages = [];

		max = 0;
		for ( i = 0; i < records.length; i++ ) {
			languages.push( records[ i ].sourceLanguage );
			languages.push( records[ i ].targetLanguage );
		}
		// remove duplicates
		languages = $.grep( languages, function ( v, k ) {
			return $.inArray( v, languages ) === k;
		} );
		languages.sort();
		for ( i = 0; i <= languages.length; i++ ) {
			for ( j = 0; j <= languages.length; j++ ) {
				table[ i ] = table[ i ] || [];
				if ( i === 0 && j === 0 ) {
					table[ 0 ][ 0 ] = mw.msg(
						'cx-stats-table-source-target' );
					continue;
				}
				if ( i === 0 ) {
					table[ 0 ][ j ] = languages[ j - 1 ];
					continue;
				}
				if ( j === 0 ) {
					table[ i ][ 0 ] = languages[ i - 1 ];
					continue;
				}
				record = findLanguagePair( records, languages[ i - 1 ],
					languages[ j - 1 ], status );
				table[ i ][ j ] = record[ 0 ] && record[ 0 ][ property ] || 0;
				table[ i ][ j ] = parseInt( table[ i ][ j ] );
				// Keep track of max value of translation in any language pair.
				// Required for coloring
				max = table[ i ][ j ] > max ? table[ i ][ j ] : max;
				// Total(to)
				table[ i ][ languages.length + 1 ] = table[ i ][ languages.length + 1 ] || 0;
				table[ i ][ languages.length + 1 ] += table[ i ][ j ];
				// Total(from)
				table[ languages.length + 1 ] = table[ languages.length + 1 ] || [];
				table[ languages.length + 1 ][ j ] = table[ languages.length + 1 ][ j ] || 0;
				table[ languages.length + 1 ][ j ] += table[ i ][ j ];
			}
			// Total translations
			table[ languages.length + 1 ] = table[ languages.length + 1 ] || [];
			table[ languages.length + 1 ][ languages.length + 1 ] =
				table[ languages.length + 1 ][ languages.length + 1 ] || 0;
			table[ languages.length + 1 ][ languages.length + 1 ] +=
				table[ i ][ languages.length + 1 ];
		}
		table[ 0 ][ languages.length + 1 ] = mw.msg( 'cx-stats-table-source-total' );
		table[ languages.length + 1 ][ 0 ] = mw.msg( 'cx-stats-table-target-total' );

		return table;
	}

	function createStatsTable( table ) {
		var i, j, $table, $thead, $tbody, $headerRow,
			$row, division, value, $td;
		// Categorize the translations to 5 sets for coloring
		division = Math.ceil( max / 5 );
		$table = $( '<table>' )
			.addClass( 'cx-stats' );

		$thead = $( '<thead>' );
		$tbody = $( '<tbody>' );
		$thead.append( $headerRow );

		for ( i = 0; i < table.length; i++ ) {
			$row = $( '<tr>' );
			for ( j = 0; j < table.length; j++ ) {
				value = table[ i ][ j ];
				$td = $( '<td>' ).text( value === 0 ? '' : mw.language.convertNumber( value ) );
				if ( i > 0 && j > 0 && i < table.length - 1 && j <
					table.length - 1 && value > 0 ) {
					$td.addClass( 'cx-stat-color-' + parseInt( value / division ) );
				}
				$row.append( $td );
			}
			if ( i === 0 ) {
				$thead.append( $row );
			} else {
				$tbody.append( $row );
			}
		}
		$table.append( $thead, $tbody );
		return $table;
	}

	function prepareTranslationsTable( records, status ) {
		var table;

		table = jsonToTable( records, status, 'count' );
		return createStatsTable( table );
	}

	function prepareTranslatorsTable( records, status ) {
		var table;

		table = jsonToTable( records, status, 'translators' );
		return createStatsTable( table );
	}

	$( function () {
		getCXStats().then( function ( data ) {
			var $container = $( '#bodyContent' );
			$container.append(
				$( '<h2>' ).text( mw.msg( 'cx-stats-published-translations-title' ) ),
				prepareTranslationsTable( data.query.contenttranslationstats, 'published' ),
				$( '<h2>' ).text( mw.msg( 'cx-stats-draft-translations-title' ) ),
				prepareTranslationsTable( data.query.contenttranslationstats, 'draft' ),
				$( '<h2>' ).text( mw.msg( 'cx-stats-published-translators-title' ) ),
				prepareTranslatorsTable( data.query.contenttranslationstats, 'published' )
			);
		} );
	} );
}( jQuery, mediaWiki ) );
