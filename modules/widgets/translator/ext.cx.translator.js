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
		var data;

		data = {
			labels: Object.keys( stats.cxtranslatorstats.publishTrend ),
			datasets: [
				{
					borderColor: '#36c',
					backgroundColor: '#36c',
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
			var total, monthCount, ctx,
				thisMonthKey = new Date().toISOString().slice( 0, 7 ),
				lastMonthKey = Object.keys( stats.cxtranslatorstats.publishTrend ).slice( -1 ).pop();

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

			$header.text( stats.cxtranslatorstats.translator );
			$total.find( '.cx-translator__total-translations-count' ).text( total );
			$monthStats.find( '.cx-translator__month-stats-count' )
				.text( monthCount );

			ctx = $trend[ 0 ].getContext( '2d' );
			drawChart( ctx, stats );
		} ).fail( function () {
			$widget.remove();
		} );

		return $widget;
	};
}( jQuery, mediaWiki ) );
