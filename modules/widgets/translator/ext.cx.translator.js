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
	 * CXTranslator constructor
	 *
	 * @param {string} translatorName Username of the translator for which statistics are loaded
	 */
	mw.cx.widgets.CXTranslator = function ( translatorName ) {
		this.translatorName = translatorName;
		this.data = [];
		this.max = -1;

		this.$lastMonthButton = null;
		this.$widget = null;
		this.$canvas = null;

		this.render();
	};

	mw.cx.widgets.CXTranslator.prototype.render = function () {
		var $header, $monthStats, $total,
			api = new mw.Api(),
			self = this;

		$header = $( '<div>' ).addClass( 'cx-translator__header' );
		this.$lastMonthButton = $( '<div>' )
			.addClass( 'cx-translator__month-stats-button' )
			.append(
				$( '<div>' )
					.addClass( 'cx-translator__month-stats-count' ),
				$( '<div>' )
					.addClass( 'cx-translator__month-stats-label' )
					.text( mw.msg( 'cx-translator-month-stats-label' ) )
			);
		$monthStats = $( '<div>' )
			.addClass( 'cx-translator__month-stats' )
			.append( this.$lastMonthButton );
		$total = $( '<div>' ).addClass( 'cx-translator__total-translations' ).append(
			$( '<div>' )
				.addClass( 'cx-translator__total-translations-count' ),
			$( '<div>' )
				.addClass( 'cx-translator__total-translations-label' )
				.text( mw.msg( 'cx-translator-total-translations-label' ) )
		);
		this.$canvas = $( '<canvas>' )
			.addClass( 'cx-translatorstats' )
			.prop( 'height', '50' );
		statsRequest = statsRequest || api.get( {
			action: 'query',
			list: 'cxtranslatorstats',
			translator: this.translatorName
		} );
		this.$widget = $( '<div>' )
			.addClass( 'cx-translator' )
			.append( $header, $monthStats, $total, this.$canvas );
		statsRequest.then( function ( stats ) {
			var total, monthCount,
				publishTrend = stats.cxtranslatorstats.publishTrend,
				// Sorted months for ordered display on bar chart
				monthKeys = Object.keys( publishTrend ).sort(),
				thisMonthKey = new Date().toISOString().slice( 0, 7 ) + '-01',
				lastMonthKey = Object.keys( publishTrend ).slice( -1 ).pop();

			// lastMonthKey is for the month with non-zero contributions. It may be equal to
			// thisMonthKey, but not guaranteed.
			if ( !lastMonthKey ) {
				// There is no month with non-zero contributions.
				self.$widget.remove();
				return;
			}
			total = publishTrend[ lastMonthKey ].count || 0;
			monthCount = publishTrend[ thisMonthKey ] &&
				publishTrend[ thisMonthKey ].delta || 0;

			$header.text( mw.msg( 'cx-translator-header' ) );
			$total.find( '.cx-translator__total-translations-count' ).text( total );
			$monthStats.find( '.cx-translator__month-stats-count' )
				.text( monthCount );

			$.each( monthKeys, function ( i, month ) {
				self.max = Math.max( self.max, publishTrend[ month ].delta );
				self.data.push( publishTrend[ month ].delta );
			} );

			self.$canvas.prop( 'width', self.$widget.width() );
			self.draw();
		} ).fail( function () {
			self.$widget.remove();
		} );
	};

	// Math.trunc polyfill
	Math.trunc = Math.trunc || function ( x ) {
		return x - x % 1;
	};

	mw.cx.widgets.CXTranslator.prototype.draw = function () {
		var i, numOfBars, dataLength,
			context = this.$canvas[ 0 ].getContext( '2d' ),
			barWidth = 6,
			height = 50,
			// Spacing between bars in bar chart
			spacing = 4,
			offsetX = spacing,
			// One height unit relative to maximum number of contributions
			segment = ( height - spacing ) / this.max,
			data = this.data,
			canvasWidth = this.$canvas.parent().width();

		// Limit the number of bars displayed
		numOfBars = Math.trunc( ( canvasWidth - spacing ) / ( barWidth + spacing ) );
		data = this.data.slice( Math.max( this.data.length - numOfBars, 0 ) );

		dataLength = data.length;
		context.fillStyle = '#a2a9b1';
		for ( i = 0; i < dataLength; i++ ) {
			// Last bar in chart is displayed using progressive color (Accent50) from WikimediaUI color palette
			if ( i === dataLength - 1 ) {
				context.fillStyle = '#36c';
			}
			context.fillRect( offsetX, height - data[ i ] * segment, barWidth, data[ i ] * segment );
			offsetX += barWidth + spacing;
		}
	};

	mw.cx.widgets.CXTranslator.prototype.resize = function () {
		this.$canvas.prop( 'width', this.$canvas.parent().width() );

		// When resized, canvas needs to be redrawn
		this.draw();
	};

}( jQuery, mediaWiki ) );
