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

	/**
	 * Draws statistics chart with provided data and colors
	 *
	 * @param {Object} ctx 2d context of the canvas where we want to draw the chart
	 * @param {Array} stats Statistics to be drawn inside the chart
	 * @param {Array} colors Array of colors for every bar inside the chart
	 */
	function drawChart( ctx, stats, colors ) {
		var data;

		data = {
			labels: Object.keys( stats.cxtranslatorstats.publishTrend ),
			datasets: [
				{
					// Array is passed for every bar in the chart
					// When single color is passed, all bars have same color
					borderColor: colors || '#36c',
					backgroundColor: colors || '#36c',
					borderWidth: 1,
					data: $.map( stats.cxtranslatorstats.publishTrend, function ( data ) {
						return data.delta;
					} )
				}
			]
		};
		/* global Chart:false */
		/* eslint no-new:off */
		new Chart( ctx, {
			type: 'bar',
			data: data,
			options: {
				scales: {
					xAxes: [ {
						scaleLabel: {
							display: false
						},
						gridLines: {
							display: false
						},
						ticks: {
							display: false
						}
					} ],
					yAxes: [ {
						scaleLabel: {
							display: false
						},
						gridLines: {
							display: false
						},
						ticks: {
							display: false
						}
					} ]
				},
				title: {
					display: false
				},
				tooltips: {
					enabled: false
				},
				legend: {
					display: false
				}
			}
		} );
	}

	mw.cx.widgets.CXTranslator = function ( translatorName ) {
		var $widget, $header, $monthStats, $lastMonthButton, $total, $trend,
			api = new mw.Api();

		$header = $( '<div>' ).addClass( 'cx-translator__header' );
		$lastMonthButton = $( '<div>' )
			.addClass( 'cx-translator__month-stats-button' )
			.append(
				$( '<div>' )
					.addClass( 'cx-translator__month-stats-count' ),
				$( '<div>' )
					.addClass( 'cx-translator__month-stats-label' )
					.text( mw.msg( 'cx-translator-month-stats-label' ) )
			);
		$monthStats = $( '<div>' ).addClass( 'cx-translator__month-stats' ).append( $lastMonthButton );
		$total = $( '<div>' ).addClass( 'cx-translator__total-translations' ).append(
			$( '<div>' ).addClass( 'cx-translator__total-translations-count' ),
			$( '<div>' )
				.addClass( 'cx-translator__total-translations-label' )
				.text( mw.msg( 'cx-translator-total-translations-label' ) )
		);
		$trend = $( '<canvas>' ).addClass( 'cx-translatorstats' );
		statsRequest = statsRequest || api.get( {
			action: 'query',
			list: 'cxtranslatorstats',
			translator: translatorName
		} );
		$widget = $( '<div>' )
			.addClass( 'cx-translator' )
			.append( $header, $monthStats, $total, $trend );
		statsRequest.then( function ( stats ) {
			var total, monthCount, ctx, i,
				thisMonthKey = new Date().toISOString().slice( 0, 7 ),
				lastMonthKey = Object.keys( stats.cxtranslatorstats.publishTrend ).slice( -1 ).pop(),
				numOfColors = Object.keys( stats.cxtranslatorstats.publishTrend ).length,
				colors = [];

			// lastMonthKey is for the month with non-zero contributions. It may be equal to
			// thisMonthKey, but not guaranteed.
			if ( !lastMonthKey ) {
				// There is no month with non-zero contributions.
				$widget.remove();
				return;
			}
			total = stats.cxtranslatorstats.publishTrend[ lastMonthKey ].count || 0;
			monthCount = stats.cxtranslatorstats.publishTrend[ thisMonthKey ] &&
				stats.cxtranslatorstats.publishTrend[ thisMonthKey ].delta || 0;

			$header.text( mw.msg( 'cx-translator-header' ) );
			$total.find( '.cx-translator__total-translations-count' ).text( total );
			$monthStats.find( '.cx-translator__month-stats-count' )
				.text( monthCount );

			for ( i = 0; i < numOfColors - 1; i++ ) {
				colors.push( '#a2a9b1' );
			}
			colors.push( '#36c' );

			ctx = $trend[ 0 ].getContext( '2d' );
			drawChart( ctx, stats, colors );
		} ).fail( function () {
			$widget.remove();
		} );

		return {
			$element: $widget,
			$button: $lastMonthButton
		};
	};
}( jQuery, mediaWiki ) );
