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

	/**
	 * Get the Content Translation stats
	 */
	function getCXStats() {
		var api = new mw.Api();
		return api.get( {
			action: 'query',
			list: 'contenttranslationstats'
		} );
	}

	/**
	 * Get the Content Translation trend for the given target language.
	 * Fetch the number of translations to the given language.
	 * @param {string} targetLanguage Target language code
	 * @return {jQuery.Promise}
	 */
	function getCXTrends( targetLanguage ) {
		var api = new mw.Api();
		return api.get( {
			action: 'query',
			list: 'contenttranslationlangtrend',
			target: targetLanguage
		} ).then( function ( response ) {
			return response.query.contenttranslationlangtrend;
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
		var i, j, record, srcLen, trgLen,
			table = [],
			sourceLanguages = [],
			targetLanguages = [];

		max = 0;
		for ( i = 0; i < records.length; i++ ) {
			sourceLanguages.push( records[ i ].sourceLanguage );
			targetLanguages.push( records[ i ].targetLanguage );
		}

		// remove duplicates
		sourceLanguages = mw.cx.unique( sourceLanguages ).sort();
		targetLanguages = mw.cx.unique( targetLanguages ).sort();
		srcLen = sourceLanguages.length;
		trgLen = targetLanguages.length;

		for ( i = 0; i <= srcLen; i++ ) {
			for ( j = 0; j <= trgLen; j++ ) {
				table[ i ] = table[ i ] || [];
				if ( i === 0 && j === 0 ) {
					table[ 0 ][ 0 ] = mw.msg(
						'cx-stats-table-source-target' );
					continue;
				}
				if ( i === 0 ) {
					table[ 0 ][ j ] = $( '<a>' )
						.attr( {
							target: '_blank',
							href: mw.cx.siteMapper.getPageUrl(
								targetLanguages[ j - 1 ],
								'Special:RecentChanges', {
									tagfilter: 'contenttranslation'
								}
							)
						} )
						.text( targetLanguages[ j - 1 ] );
					continue;
				}
				if ( j === 0 ) {
					table[ i ][ 0 ] = sourceLanguages[ i - 1 ];
					continue;
				}

				record = findLanguagePair(
					records,
					sourceLanguages[ i - 1 ],
					targetLanguages[ j - 1 ],
					status
				);

				table[ i ][ j ] = record[ 0 ] && record[ 0 ][ property ] || 0;
				table[ i ][ j ] = parseInt( table[ i ][ j ], 10 );
				// Keep track of max value of translation in any language pair.
				// Required for coloring
				max = table[ i ][ j ] > max ? table[ i ][ j ] : max;
				// Total(to)
				table[ i ][ trgLen + 1 ] = table[ i ][ trgLen + 1 ] || 0;
				table[ i ][ trgLen + 1 ] += table[ i ][ j ];
				// Total(from)
				table[ srcLen + 1 ] = table[ srcLen + 1 ] || [];
				table[ srcLen + 1 ][ j ] = table[ srcLen + 1 ][ j ] || 0;
				table[ srcLen + 1 ][ j ] += table[ i ][ j ];
			}

			// Total translations
			table[ srcLen + 1 ] = table[ srcLen + 1 ] || [];
			table[ srcLen + 1 ][ trgLen + 1 ] = table[ srcLen + 1 ][ trgLen + 1 ] || 0;
			table[ srcLen + 1 ][ trgLen + 1 ] += table[ i ][ trgLen + 1 ];
		}

		table[ 0 ][ trgLen + 1 ] = mw.msg( 'cx-stats-table-source-total' );
		table[ srcLen + 1 ][ 0 ] = mw.msg( 'cx-stats-table-target-total' );

		return table;
	}

	function createStatsTable( table ) {
		var i, j, $table, $thead, $tbody, $headerRow,
			$row, division, value, $td;
		// Categorize the translations to 4 sets for coloring
		division = max / 4;
		$table = $( '<table>' )
			.addClass( 'cx-stats' );

		$thead = $( '<thead>' );
		$tbody = $( '<tbody>' );
		$thead.append( $headerRow );

		for ( i = 0; i < table.length; i++ ) {
			$row = $( '<tr>' );
			for ( j = 0; j < table[ i ].length; j++ ) {
				value = table[ i ][ j ];
				if ( value instanceof jQuery ) {
					$td = $( '<td>' ).append( value );
				} else {
					$td = $( '<td>' ).text( value === 0 ? '' : mw.language.convertNumber( value ) );
				}
				if ( i > 0 && j > 0 && i < table.length - 1 && j <
					table[ i ].length - 1 && value > 0 ) {
					$td.addClass( 'cx-stat-color-' + parseInt( value / division, 10 ) );
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
		var table = jsonToTable( records, status, 'count' );

		return createStatsTable( table );
	}

	function prepareTranslatorsTable( records, status ) {
		var table = jsonToTable( records, status, 'translators' );

		return createStatsTable( table );
	}

	/**
	 * Fill the data in languageData to match with totalData length
	 * @param {[Object]} totalData Array of total translation trend data
	 * @param {[Object]} totalData Array of translations to a particular language
	 * @return {[Object]} Array of translations to a particular language, after padding
	 */
	function mergeAndFill( totalData, languageData ) {
		var i, padding = [];

		if ( totalData.length === languageData.length ) {
			return languageData;
		}

		// Fill at the beginning if languageData is not starting
		// when totalData starts
		for ( i = 0; i < totalData.length; i++ ) {
			if ( !languageData || languageData.length === 0 ) {
				break;
			}
			if ( totalData[ i ].date === languageData[ 0 ].date ) {
				languageData = padding.concat( languageData );
			} else {
				padding.push( {
					date: totalData[ i ].date,
					count: 0
				} );
			}
		}

		// Fill at the end if languageData is shorter than totalData
		for ( i = languageData.length; i < totalData.length; i++ ) {
			languageData.push( {
				date: totalData[ i ].date,
				count: languageData.length ? languageData[ i - 1 ].count : 0
			} );
		}

		return languageData;
	}

	$( function () {
		var $canvas, ctx, cxTrendGraph,
			$container = $( '#bodyContent' );

		mw.cx.siteMapper = new mw.cx.SiteMapper( mw.config.get( 'wgContentTranslationSiteTemplates' ) );

		getCXStats().then( function ( data ) {
			$container.append(
				$( '<h2>' ).text( mw.msg( 'cx-stats-published-translations-title' ) ),
				prepareTranslationsTable( data.query.contenttranslationstats, 'published' ),
				$( '<h2>' ).text( mw.msg( 'cx-stats-draft-translations-title' ) ),
				prepareTranslationsTable( data.query.contenttranslationstats, 'draft' ),
				$( '<h2>' ).text( mw.msg( 'cx-stats-published-translators-title' ) ),
				prepareTranslatorsTable( data.query.contenttranslationstats, 'published' )
			);
		} );

		$canvas = $( '<canvas>' ).attr( {
			id: 'cxtrend',
			width: $container.width(),
			height: 400
		} );

		$container.append( $( '<div>' ).addClass( 'cx-stats-trend' ).append( $canvas ) );
		ctx = $canvas[ 0 ].getContext( '2d' );

		// TODO: Add a language selector to choose any language
		$.when(
			getCXTrends(),
			getCXTrends( mw.config.get( 'wgContentLanguage' ) )
		).done( function ( totalTrend, languageTrend ) {
			var data;

			languageTrend = mergeAndFill( totalTrend, languageTrend );
			data = {
				labels: $.map( totalTrend, function ( data ) {
					return data.date;
				} ),
				datasets: [
					{
						label: mw.message( 'cx-trend-all-translations' ).escaped(),
						strokeColor: '#FD6E8A',
						pointColor: '#FD6E8A',
						data: $.map( totalTrend, function ( data ) {
							return data.count;
						} )
					},
					{
						label: mw.message( 'cx-trend-translations-to',
							$.uls.data.getAutonym( mw.config.get( 'wgContentLanguage' ) ) ).escaped(),
						strokeColor: '#80B3FF',
						pointColor: '#80B3FF',
						data: $.map( languageTrend, function ( data ) {
							return data.count;
						} )
					}
				]
			};
			/*global Chart:false */
			cxTrendGraph = new Chart( ctx ).Line( data, {
				datasetFill: false,
				legendTemplate: '<ul><% for (var i=0; i<datasets.length; i++){%><li style=\"color:<%=datasets[i].strokeColor%>\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
			} );
			$container.find( '.cx-stats-trend' ).append( cxTrendGraph.generateLegend() );
		} );
	} );
}( jQuery, mediaWiki ) );
