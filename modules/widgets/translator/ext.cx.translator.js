/*!
 * ContentTranslation extension - Translator Widget.
 *
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';
	var statsRequest;

	mw.cx.widgets = mw.cx.widgets || {};

	function drawChart( ctx, stats ) {
		var cxTrendChart, data;
		data = {
			labels: Object.keys( stats.cxtranslatorstats.publishTrend ),
			datasets: [
				{
					strokeColor: '#347BFF',
					fillColor: '#347BFF',
					data: $.map( stats.cxtranslatorstats.publishTrend, function ( data ) {
						return data.delta;
					} )
				}
			]
		};
		/*global Chart:false */
		cxTrendChart = new Chart( ctx ).Bar( data, {
			responsive: true,
			barDatasetSpacing: 1,
			showScale: false,
			showTooltips: false
		} );
	}

	mw.cx.widgets.CXTranslator = function ( translatorName ) {
		var $widget, $header, $monthStats, $total, $trend,
			api = new mw.Api();

		$header = $( '<div>' ).addClass( 'cx-translator__header' );
		$monthStats = $( '<div>' ).addClass( 'cx-translator__month-stats' ).append(
			$( '<div>' ).addClass( 'cx-translator__month-stats-count' ),
			$( '<div>' )
			.addClass( 'cx-translator__month-stats-label' )
			.text( mw.msg( 'cx-translator-month-stats-label' ) )
		);
		$total = $( '<div>' ).addClass( 'cx-translator__total-translations' ).append(
			$( '<div>' ).addClass( 'cx-translator__total-translations-count' ),
			$( '<div>' )
			.addClass( 'cx-translator__total-translations-label' )
			.text( mw.msg( 'cx-translator-total-translations-label' ) )
		);
		$trend = $( '<canvas>' ).attr( {
			id: 'cxtranslatorstats',
			width: '1000%', // Tricks Chart.js to scale down the graph 10 times
			height: '100px'
		} );
		statsRequest = statsRequest || api.get( {
			action: 'query',
			list: 'cxtranslatorstats',
			translator: translatorName
		} );
		$widget = $( '<div>' )
			.addClass( 'cx-translator' )
			.append( $header, $monthStats, $total, $trend );
		statsRequest.then( function ( stats ) {
			var total, monthCount, ctx,
				thisMonthKey = new Date().toISOString().slice( 0, 7 );

			if ( !Object.keys( stats.cxtranslatorstats.publishTrend ).length ) {
				$widget.remove();
				return;
			}
			total = stats.cxtranslatorstats.publishTrend[ thisMonthKey ].count;
			monthCount = stats.cxtranslatorstats.publishTrend[ thisMonthKey ].delta;

			$header.text( stats.cxtranslatorstats.translator );
			$total.find( '.cx-translator__total-translations-count' ).text( total );
			$monthStats.find( '.cx-translator__month-stats-count' )
				.text( stats.cxtranslatorstats.publishTrend[ thisMonthKey ].delta );

			ctx = $trend[ 0 ].getContext( '2d' );
			drawChart( ctx, stats );
		} ).fail( function () {
			$widget.remove();
		} );

		return $widget;
	};
}( jQuery, mediaWiki ) );
