/*!
 * ContentTranslation extension - Translator Widget.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
( function () {
	'use strict';
	let statsRequest;

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
		const api = new mw.Api(),
			self = this;

		const $header = $( '<div>' ).addClass( 'cx-translator__header' );
		this.$lastMonthButton = $( '<div>' )
			.addClass( 'cx-translator__month-stats-button' )
			.append(
				$( '<div>' )
					.addClass( 'cx-translator__month-stats-count' ),
				$( '<div>' )
					.addClass( 'cx-translator__month-stats-label' )
					.text( mw.msg( 'cx-translator-month-stats-label' ) )
			);
		const $monthStats = $( '<div>' )
			.addClass( 'cx-translator__month-stats' )
			.append( this.$lastMonthButton );
		const $total = $( '<div>' ).addClass( 'cx-translator__total-translations' ).append(
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
			const publishTrend = stats.cxtranslatorstats.publishTrend,
				// Sorted months for ordered display on bar chart
				monthKeys = Object.keys( publishTrend ).sort(),
				thisMonthKey = new Date().toISOString().slice( 0, 7 ) + '-01';

			const total = publishTrend[ thisMonthKey ].count || 0;
			const thisMonthStats = publishTrend[ thisMonthKey ].delta || 0;

			// Don't display statistics if there are no translations yet
			if ( total === 0 ) {
				self.$widget.remove();
				return;
			}

			$header.text( mw.msg( 'cx-translator-header' ) );
			$total.find( '.cx-translator__total-translations-count' )
				.text( mw.language.convertNumber( total ) );
			$monthStats.find( '.cx-translator__month-stats-count' )
				.text( mw.language.convertNumber( thisMonthStats ) );

			monthKeys.forEach( function ( month ) {
				self.max = Math.max( self.max, publishTrend[ month ].delta );
				self.data.push( publishTrend[ month ].delta );
			} );

			self.$canvas.prop( 'width', self.$widget.width() );
			self.draw();

			// Make statistics visible in dashboard sidebar,
			// after all data is fetched and drawn on canvas
			self.$widget.addClass( 'cx-translator--visible' );
		} ).fail( function () {
			self.$widget.remove();
		} );
	};

	mw.cx.widgets.CXTranslator.prototype.draw = function () {
		const context = this.$canvas[ 0 ].getContext( '2d' ),
			barWidth = 6,
			height = 50,
			// Spacing between bars in bar chart
			spacing = 4,
			// One height unit relative to maximum number of contributions
			segment = ( height - spacing ) / this.max,
			canvasWidth = this.$canvas.parent().width();

		let offsetX = spacing;
		let data = this.data;

		// Limit the number of bars displayed
		const numOfBars = Math.floor( ( canvasWidth - spacing ) / ( barWidth + spacing ) );
		data = this.data.slice( Math.max( this.data.length - numOfBars, 0 ) );

		const dataLength = data.length;
		context.fillStyle = '#a2a9b1';
		for ( let i = 0; i < dataLength; i++ ) {
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

}() );
