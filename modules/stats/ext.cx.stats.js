/*!
 * ContentTranslation Stats
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
( function () {
	'use strict';

	/* global Chart:false */

	function CXStats( $container, options ) {
		this.$container = $container;
		this.sitemapper = options.siteMapper;
		this.sourceTargetModel = {};
		this.targetSourceModel = {};
		this.totalTranslationTrend = null;
		this.languageTranslationTrend = null;
		this.$highlights = null;
		this.$graph = null;
		this.chartOptions = {};
	}

	CXStats.prototype.init = function () {
		var self = this,
			$spinner;

		$spinner = mw.cx.widgets.spinner();
		this.$highlights = $( '<div>' ).addClass( 'cx-stats-highlights' );
		this.$container.append( $spinner, this.$highlights );

		$.when(
			this.getCXTrends(),
			this.getCXTrends( mw.config.get( 'wgContentLanguage' ) ),
			this.getCXStats()
		).done( function ( totalTrend, languageTrend, stats ) {
			// Remove spinner
			$spinner.remove();

			self.totalTranslationTrend = totalTrend.translations || [];
			self.totalDraftTrend = totalTrend.drafts || [];
			self.languageTranslationTrend = languageTrend.translations || [];
			self.languageDraftTrend = languageTrend.drafts || [];
			self.languageDeletionTrend = languageTrend.deletions || [];
			self.transformJsonToModel( stats[ 0 ].query.contenttranslationstats );
			// Now render them all
			self.renderHighlights();
			self.render();
		} );

		this.chartOptions = {
			scales: {
				xAxes: [
					{
						ticks: {
							callback: function ( value ) {
								return moment( value ).format( 'L' );
							}
						}
					}
				],
				yAxes: [
					{
						ticks: {
							callback: function ( value ) {
								return mw.language.convertNumber( Number( value ) );
							}
						}
					}
				]
			},
			tooltips: {
				callbacks: {
					label: function ( tooltipItem, data ) {
						var convertedValue = mw.language.convertNumber( Number( tooltipItem.yLabel ) );
						return data.datasets[ tooltipItem.datasetIndex ].label + ': ' + convertedValue;
					}
				}
			}
		};
	};

	/**
	 * Render the boxes at the top with the most interesting recent data.
	 */
	CXStats.prototype.renderHighlights = function () {
		var getTrend, info, infoLanguage, localLanguage,
			$total, $weeklyStats,
			weekLangTrendText, weekTrendText, weekTrendClass,
			$parenthesizedTrend, $trendInLanguage,
			fmt = mw.language.convertNumber; // Shortcut

		getTrend = function ( data ) {
			var thisWeek, total, trend,
				oneWeekAgoDelta, twoWeeksAgoDelta;

			if ( data.length < 3 ) {
				return;
			}

			thisWeek = data.length - 1;

			total = data[ thisWeek ].count;

			oneWeekAgoDelta = data[ thisWeek - 1 ].delta;
			twoWeeksAgoDelta = data[ thisWeek - 2 ].delta;

			if ( twoWeeksAgoDelta ) {
				trend = Math.round( ( oneWeekAgoDelta - twoWeeksAgoDelta ) / twoWeeksAgoDelta * 100 );
			} else {
				trend = oneWeekAgoDelta ? 100 : 0;
			}

			return {
				total: total,
				trend: trend,
				lastWeek: oneWeekAgoDelta
			};
		};

		localLanguage = $.uls.data.getAutonym( mw.config.get( 'wgContentLanguage' ) );
		info = getTrend( this.totalTranslationTrend );
		infoLanguage = getTrend( this.languageTranslationTrend );

		if ( !info || !infoLanguage ) {
			return;
		}

		$total = $( '<div>' )
			.addClass( 'cx-stats-box' )
			.append(
				$( '<div>' )
					.addClass( 'cx-stats-box__title' )
					.text( mw.msg( 'cx-stats-total-published' ) ),
				$( '<div>' )
					.addClass( 'cx-stats-box__total' )
					.text( fmt( info.total ) ),
				$( '<div>' )
					.addClass( 'cx-stats-box__localtotal' )
					.text( mw.msg(
						'cx-stats-local-published-number',
						fmt( infoLanguage.total ),
						fmt( localLanguage )
					) )
			);

		weekLangTrendText = mw.msg( 'percent', fmt( infoLanguage.trend ) );
		if ( infoLanguage.trend >= 0 ) {
			// Add the plus sign to make clear that it's an increase
			weekLangTrendText = '+' + weekLangTrendText;
		}

		weekTrendText = mw.msg( 'percent', fmt( info.trend ) );
		if ( info.trend >= 0 ) {
			// Add the plus sign to make clear that it's an increase
			weekTrendText = '+' + weekTrendText;
			weekTrendClass = 'increase';
		} else {
			weekTrendClass = 'decrease';
		}

		$parenthesizedTrend = $( '<span>' )
			// This is needed to show the plus or minus sign on the correct side
			.prop( 'dir', 'ltr' )
			.text( weekLangTrendText );
		$trendInLanguage = $( '<div>' )
			.addClass( 'cx-stats-box__localtotal' )
			.text( mw.msg(
				'cx-stats-local-published',
				fmt( infoLanguage.lastWeek ),
				localLanguage,
				'$3'
			) );
		$trendInLanguage.html( $trendInLanguage.html().replace(
			'$3',
			$parenthesizedTrend.get( 0 ).outerHTML
		) );

		$weeklyStats = $( '<div>' )
			.addClass( 'cx-stats-box' )
			.append(
				$( '<div>' )
					.addClass( 'cx-stats-box__title' )
					.text( mw.msg( 'cx-stats-weekly-published' ) ),
				$( '<div>' ).append(
					$( '<span>' )
						.addClass( 'cx-stats-box__total' )
						.text( fmt( info.lastWeek ) ),
					// nbsp is needed for separation between the numbers.
					// Without it the numbers appear in the wrong order in RTL environments.
					$( '<span>' )
						.html( '&#160;' ),
					// eslint-disable-next-line mediawiki/class-doc
					$( '<span>' )
						.prop( 'dir', 'ltr' )
						.addClass( 'cx-stats-box__trend ' + weekTrendClass )
						.text( weekTrendText )
				),
				$trendInLanguage
			);

		this.$highlights.append( $total, $weeklyStats );
	};

	CXStats.prototype.render = function () {
		var self = this;

		this.$cumulativeGraph = $( '<canvas>' ).attr( {
			id: 'cxcumulative',
			width: this.$container.width() - 200, // Leave a 200px margin buffer to avoid overflow
			height: 400
		} );

		this.$languageCumulativeGraph = $( '<canvas>' ).attr( {
			id: 'cxlangcumulative',
			width: this.$container.width() - 200, // Leave a 200px margin buffer to avoid overflow
			height: 400
		} );

		this.$translationTrendBarChart = $( '<canvas>' ).attr( {
			id: 'cxtrendchart',
			width: this.$container.width() - 200, // Leave a 200px margin buffer to avoid overflow
			height: 400
		} );

		this.$langTranslationTrendBarChart = $( '<canvas>' ).attr( {
			id: 'cxlangtrendchart',
			width: this.$container.width() - 200, // Leave a 200px margin buffer to avoid overflow
			height: 400
		} );

		this.$container.append( $( '<h2>' ).text( mw.msg( 'cx-stats-all-translations-title' ) ) );
		this.createTabs(
			'cx-graph-total', [
				{
					title: mw.msg( 'cx-stats-cumulative-tab-title' ),
					id: 'global-translations',
					content: $( '<div>' )
						.addClass( 'cx-stats-graph cx-stats-cumulative-total' )
						.append( this.$cumulativeGraph ),
					onVisible: function () {
						self.drawCumulativeGraph( 'count' );
					}
				},
				{
					title: mw.msg( 'cx-stats-weekly-trend-tab-title' ),
					id: 'global-translations-weekly',
					content: $( '<div>' )
						.addClass( 'cx-stats-graph cx-stats-trend-total' )
						.append( this.$translationTrendBarChart ),
					onVisible: function () {
						self.drawTranslationTrend();
					}
				}
			]
		);

		this.$container.append( $( '<h2>' ).text( mw.message(
			'cx-trend-translations-to',
			$.uls.data.getAutonym( mw.config.get( 'wgContentLanguage' ) )
		).escaped() ) );
		this.createTabs(
			'cx-graph-language', [
				{
					title: mw.msg( 'cx-stats-cumulative-tab-title' ),
					id: 'language-translations',
					content: $( '<div>' )
						.addClass( 'cx-stats-graph cx-stats-cumulative-lang' )
						.append( this.$languageCumulativeGraph ),
					onVisible: function () {
						self.drawLanguageCumulativeGraph( 'count' );
					}
				},
				{
					title: mw.msg( 'cx-stats-weekly-trend-tab-title' ),
					id: 'language-translations-weekly',
					content: $( '<div>' )
						.addClass( 'cx-stats-graph cx-stats-trend-lang' )
						.append( this.$langTranslationTrendBarChart ),
					onVisible: function () {
						self.drawLangTranslationTrend();
					}
				}
			]
		);

		this.$container.append( $( '<h2>' ).text( mw.msg( 'cx-stats-published-translations-title' ) ) );
		this.createTabs(
			'cx-stats-published', [
				{
					title: mw.msg( 'cx-stats-published-target-source' ),
					id: 'published-from',
					content: this.drawTranslationsChart( 'to', 'published', 'count' )
				},
				{
					title: mw.msg( 'cx-stats-published-source-target' ),
					id: 'published-to',
					content: this.drawTranslationsChart( 'from', 'published', 'count' )
				}
			],
			true
		);

		this.$container.append( $( '<h2>' ).text( mw.msg( 'cx-stats-draft-translations-title' ) ) );
		this.createTabs(
			'cx-stats-draft', [
				{
					title: mw.msg( 'cx-stats-draft-target-source' ),
					id: 'drafted-from',
					content: this.drawTranslationsChart( 'to', 'draft', 'count' )
				},
				{
					title: mw.msg( 'cx-stats-draft-source-target' ),
					id: 'drafted-to',
					content: this.drawTranslationsChart( 'from', 'draft', 'count' )
				}
			],
			true
		);

		this.$container.append( $( '<h2>' ).text( mw.msg( 'cx-stats-published-translators-title' ) ) );
		this.createTabs(
			'cx-stats-translators', [
				{
					title: mw.msg( 'cx-stats-published-target-source' ),
					id: 'translators-from',
					content: this.drawTranslationsChart( 'to', 'published', 'translators' )
				},
				{
					title: mw.msg( 'cx-stats-published-source-target' ),
					id: 'translators-to',
					content: this.drawTranslationsChart( 'from', 'published', 'translators' )
				}
			],
			true
		);
	};

	/**
	 * Create a tabbed container for holding related stats.
	 *
	 * @param {string} tabGroupId Tab group id
	 * @param {Object[]} items
	 * @param {boolean} expandable
	 */
	CXStats.prototype.createTabs = function ( tabGroupId, items, expandable ) {
		var $tabContainer, i, $tabs, $expand, tabToShow = 0;

		$tabContainer = $( '<div>' ).addClass( 'cx-stats-tabs-container' );
		$tabs = $( '<ul>' ).addClass( 'cx-stats-tabs' );
		$tabContainer.append( $tabs );
		this.$container.append( $tabContainer );
		for ( i = 0; i < items.length; i++ ) {
			items[ i ].$tab = $( '<li>' )
				.addClass( 'cx-stats-tabs-tabtitle' )
				.attr( 'about', tabGroupId + 'tab-' + i )
				.attr( 'data-itemid', i )
				.attr( 'id', items[ i ].id )
				.text( items[ i ].title );
			items[ i ].$content = items[ i ].content
				.attr( 'id', tabGroupId + 'tab-' + i )
				.addClass( 'cx-stats-tabs-tab-content cx-stats-tabs-collapsed' );

			$tabs.append( items[ i ].$tab );
			$tabContainer.append( items[ i ].$content );

			if ( location.hash === '#' + items[ i ].id ) {
				tabToShow = i;
				$( 'html, body' ).animate( {
					scrollTop: items[ i ].$tab.offset().top
				}, 500 );
			}
		}

		items[ tabToShow ].$tab.addClass( 'cx-stats-tabs-current' );
		items[ tabToShow ].$content.addClass( 'cx-stats-tabs-current' );
		if ( items[ tabToShow ].onVisible ) {
			items[ tabToShow ].onVisible.apply( this );
			items[ tabToShow ].onVisible = null;
		}

		// Click handler for tabs
		$tabs.find( 'li' ).on( 'click', function () {
			var onVisible,
				$this = $( this ),
				tabId = $( this ).attr( 'about' ),
				itemId = $this.data( 'itemid' );

			$tabs.find( 'li' ).removeClass( 'cx-stats-tabs-current' );
			$tabContainer.find( '.cx-stats-tabs-tab-content' )
				.removeClass( 'cx-stats-tabs-current' );
			$( this ).addClass( 'cx-stats-tabs-current' );
			$( '#' + tabId ).addClass( 'cx-stats-tabs-current' );

			onVisible = items[ itemId ].onVisible;
			if ( onVisible ) {
				onVisible.apply( this );
				items[ itemId ].onVisible = null;
			}
		} );
		if ( expandable ) {
			$expand = $( '<a>' )
				.addClass( 'cx-stats-tabs-toggle-all' )
				.text( mw.msg( 'cx-stats-tabs-expand' ) )
				.on( 'click', function () {
					$tabContainer
						.find( '.cx-stats-tabs-tab-content' )
						.removeClass( 'cx-stats-tabs-collapsed' );
					$( this ).remove();
				} );
			$tabContainer.append( $expand );
		}
	};

	/**
	 * Sorts in descending order
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @return {number}
	 */
	function sortByCount( a, b ) {
		return b.count - a.count;
	}

	/**
	 * Sorts in descending order
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @return {number}
	 */
	function sortByTranslators( a, b ) {
		return b.translators - a.translators;
	}

	CXStats.prototype.drawTranslationsChart = function ( direction, status, property ) {
		var $chart, $bar, translations, $translations, model, i, j, $rows = [],
			$callout,
			$row, width, max = 0,
			$tail, tailWidth = 0,
			tail, langCode,
			$langCode, $autonym, $total, $rowLabelContainer,
			fmt = mw.language.convertNumber;

		$chart = $( '<div>' ).addClass( 'cx-stats-chart' );

		model = direction === 'to' ?
			this.targetSourceModel[ status ].sort(
				property === 'count' ? sortByCount : sortByTranslators
			) :
			this.sourceTargetModel[ status ].sort(
				property === 'count' ? sortByCount : sortByTranslators
			);

		for ( i = 0; i < model.length; i++ ) {
			$row = $( '<div>' ).addClass( 'cx-stats-chart__row' );

			$translations = $( '<span>' ).addClass( 'cx-stats-chart__bars' );
			translations = model[ i ].translations.sort(
				property === 'count' ? sortByCount : sortByTranslators
			);

			tail = false;
			tailWidth = 0;
			max = max || model[ 0 ][ property ];

			if (
				max / ( Math.ceil( model[ i ][ property ] / 100 ) * 100 ) >= 10 &&
				max >= 1000
			) {
				max = Math.ceil( model[ i ][ property ] / 100 ) * 100;
				$rows.push( $( '<div>' )
					.addClass( 'cx-stats-chart__row separator' )
					.text( mw.msg( 'cx-stats-grouping-title', fmt( max ) ) ) );
			}

			$callout = $( '<table>' ).addClass( 'cx-stats-chart__callout' );
			for ( j = 0; j < translations.length; j++ ) {
				width = ( translations[ j ][ property ] / max ) * 100;
				langCode = translations[ j ][ ( direction === 'to' ? 'sourceLanguage' : 'targetLanguage' ) ];

				if ( width > 2 || j === 0 ) {
					// languages with more than 2% are represented in chart.
					$bar = $( '<span>' )
						.addClass( 'cx-stats-chart__bar' )
						.prop( {
							lang: 'en',
							dir: 'ltr'
						} )
						.css( 'width', width + '%' )
						.text( langCode );

					$translations.append( $bar );
				} else {
					tail = true;
					tailWidth += width;
				}

				$callout.append( $( '<tr>' ).append(
					$( '<td>' )
						.addClass( 'cx-stats-chart__callout-count' )
						.text( fmt( translations[ j ][ property ] ) ),
					$( '<td>' )
						.addClass( 'cx-stats-chart__callout-lang' )
						.prop( {
							lang: langCode,
							dir: $.uls.data.getDir( langCode )
						} )
						.text( $.uls.data.getAutonym( langCode ) )
				) );
			}

			if ( tail ) {
				$tail = $( '<span>' )
					.addClass( 'cx-stats-chart__bar tail' )
					.text( '…' )
					.css( 'width', tailWidth + '%' );
				$translations.append( $tail );
			}

			$translations.find( '.cx-stats-chart__bar' ).last().callout( {
				trigger: 'hover',
				classes: 'cx-stats-chart__callout-container',
				direction: $.fn.callout.autoDirection( '0' ),
				content: $callout
			} );

			$langCode = $( '<span>' )
				.addClass( 'cx-stats-chart__langcode' )
				// Always Latin (like English).
				// Make sure it's aligned correctly on all screen sizes.
				.prop( {
					lang: 'en',
					dir: 'ltr'
				} )
				.text( model[ i ].language );

			$autonym = $( '<span>' )
				.addClass( 'cx-stats-chart__autonym' )
				.prop( {
					lang: model[ i ].language,
					dir: $.uls.data.getDir( model[ i ].language )
				} )
				.text( $.uls.data.getAutonym( model[ i ].language ) );

			$total = $( '<span>' )
				.addClass( 'cx-stats-chart__total' )
				.text( fmt( model[ i ][ property ] ) );

			if ( direction === 'to' ) {
				$total = $( '<a>' )
					.addClass( 'cx-stats-chart__total' )
					.prop( 'href', mw.cx.siteMapper.getPageUrl(
						model[ i ].language, 'Special:NewPages', {
							tagfilter: 'contenttranslation'
						}
					) )
					.text( fmt( model[ i ][ property ] ) );
			} else {
				$total = $( '<span>' )
					.addClass( 'cx-stats-chart__total' )
					.text( fmt( model[ i ][ property ] ) );
			}

			$rowLabelContainer = $( '<span>' )
				.addClass( 'cx-stats-chart__row-label-container' )
				.append( $langCode, $autonym, $total );

			$row.append( $rowLabelContainer, $translations );

			$rows.push( $row );
		}

		$chart.append( $rows );

		return $chart;
	};

	/**
	 * Get the Content Translation stats.
	 *
	 * @return {jQuery.Promise}
	 */
	CXStats.prototype.getCXStats = function () {
		var api = new mw.Api();

		return api.get( {
			action: 'query',
			list: 'contenttranslationstats'
		} );
	};

	/**
	 * Get the Content Translation trend for the given target language.
	 * Fetch the number of translations to the given language.
	 *
	 * @param {string} targetLanguage Target language code
	 * @return {jQuery.Promise}
	 */
	CXStats.prototype.getCXTrends = function ( targetLanguage ) {
		return ( new mw.Api() ).get( {
			action: 'query',
			list: 'contenttranslationlangtrend',
			target: targetLanguage
		} ).then( function ( response ) {
			return response.query.contenttranslationlangtrend;
		} );
	};

	CXStats.prototype.drawCumulativeGraph = function ( type ) {
		var data, ctx;

		ctx = this.$cumulativeGraph[ 0 ].getContext( '2d' );

		data = {
			labels: this.totalTranslationTrend.map( function ( data ) {
				return data.date;
			} ),
			datasets: [
				{
					label: mw.msg( 'cx-stats-published-translations-label' ),
					fill: false,
					borderColor: '#36c',
					pointBorderColor: '#36c',
					pointBackgroundColor: '#36c',
					pointHoverBackgroundColor: '#FFFFFF',
					pointHoverBorderColor: '#36c',
					data: this.totalTranslationTrend.map( function ( data ) {
						return data[ type ];
					} )
				},
				{
					label: mw.msg( 'cx-stats-draft-translations-label' ),
					fill: false,
					borderColor: '#72777d',
					pointBorderColor: '#72777d',
					pointBackgroundColor: '#72777d',
					pointHoverBackgroundColor: '#FFFFFF',
					pointHoverBorderColor: '#72777d',
					data: this.totalDraftTrend.map( function ( data ) {
						return data[ type ];
					} )
				}
			]
		};

		// eslint-disable-next-line no-new
		new Chart( ctx, {
			type: 'line',
			data: data,
			options: this.chartOptions
		} );
	};

	CXStats.prototype.drawLanguageCumulativeGraph = function ( type ) {
		var data, ctx;

		ctx = this.$languageCumulativeGraph[ 0 ].getContext( '2d' );

		data = {
			labels: this.languageTranslationTrend.map( function ( data ) {
				return data.date;
			} ),
			datasets: [
				{
					label: mw.msg( 'cx-stats-published-translations-label' ),
					fill: false,
					borderColor: '#36c',
					pointBorderColor: '#36c',
					pointBackgroundColor: '#36c',
					pointHoverBackgroundColor: '#FFFFFF',
					pointHoverBorderColor: '#36c',
					data: this.languageTranslationTrend.map( function ( data ) {
						return data[ type ];
					} )
				},
				{
					label: mw.msg( 'cx-stats-draft-translations-label' ),
					fill: false,
					borderColor: '#72777d',
					pointBorderColor: '#72777d',
					pointBackgroundColor: '#72777d',
					pointHoverBackgroundColor: '#FFFFFF',
					pointHoverBorderColor: '#72777d',
					data: this.languageDraftTrend.map( function ( data ) {
						return data[ type ];
					} )
				},
				{
					label: mw.msg( 'cx-trend-deletions' ),
					fill: false,
					borderColor: '#FF0000',
					pointBorderColor: '#FF0000',
					pointBackgroundColor: '#FF0000',
					pointHoverBackgroundColor: '#FFFFFF',
					pointHoverBorderColor: '#FF0000',
					data: this.languageDeletionTrend.map( function ( data ) {
						return data[ type ];
					} )
				}
			]
		};

		// eslint-disable-next-line no-new
		new Chart( ctx, {
			type: 'line',
			data: data,
			options: this.chartOptions
		} );
	};

	CXStats.prototype.drawTranslationTrend = function () {
		var data, ctx, type = 'delta';

		ctx = this.$translationTrendBarChart[ 0 ].getContext( '2d' );
		data = {
			labels: this.totalTranslationTrend.map( function ( data ) {
				return data.date;
			} ),
			datasets: [
				{
					label: mw.msg( 'cx-stats-published-translations-label' ),
					borderColor: '#36c',
					backgroundColor: '#36c',
					borderWidth: 1,
					data: this.totalTranslationTrend.map( function ( data ) {
						return data[ type ];
					} )
				},
				{
					label: mw.msg( 'cx-stats-new-draft-translations-label' ),
					borderColor: '#72777d',
					backgroundColor: '#72777d',
					borderWidth: 1,
					data: this.totalDraftTrend.map( function ( data ) {
						return data[ type ];
					} )
				}
			]
		};

		// eslint-disable-next-line no-new
		new Chart( ctx, {
			type: 'bar',
			data: data,
			options: this.chartOptions
		} );
	};

	CXStats.prototype.drawLangTranslationTrend = function () {
		var ctx, data,
			type = 'delta';

		ctx = this.$langTranslationTrendBarChart[ 0 ].getContext( '2d' );
		data = {
			labels: this.languageTranslationTrend.map( function ( data ) {
				return data.date;
			} ),
			datasets: [
				{
					label: mw.msg( 'cx-stats-published-translations-label' ),
					borderColor: '#36c',
					backgroundColor: '#36c',
					borderWidth: 1,
					data: this.languageTranslationTrend.map( function ( data ) {
						return data[ type ];
					} )
				},
				{
					label: mw.msg( 'cx-stats-new-draft-translations-label' ),
					borderColor: '#72777d',
					backgroundColor: '#72777d',
					borderWidth: 1,
					data: this.languageDraftTrend.map( function ( data ) {
						return data[ type ];
					} )
				},
				{
					label: mw.msg( 'cx-trend-deletions' ),
					borderColor: '#FF0000',
					backgroundColor: '#FF0000',
					borderWidth: 1,
					data: this.languageDeletionTrend.map( function ( data ) {
						return data[ type ];
					} )
				}
			]
		};

		// eslint-disable-next-line no-new
		new Chart( ctx, {
			type: 'bar',
			data: data,
			options: this.chartOptions
		} );
	};

	CXStats.prototype.transformJsonToModel = function ( records ) {
		var i, record, language, status, count, translators,
			sourceLanguage, targetLanguage,
			tempModel,
			hasOwn = Object.prototype.hasOwnProperty;

		this.sourceTargetModel.draft = {};
		this.targetSourceModel.draft = {};
		this.sourceTargetModel.published = {};
		this.targetSourceModel.published = {};

		for ( i = 0; i < records.pages.length; i++ ) {
			record = records.pages[ i ];
			status = record.status;
			sourceLanguage = record.sourceLanguage;
			targetLanguage = record.targetLanguage;
			this.sourceTargetModel[ status ][ sourceLanguage ] = this.sourceTargetModel[ status ][ sourceLanguage ] || [];
			this.targetSourceModel[ status ][ targetLanguage ] = this.targetSourceModel[ status ][ targetLanguage ] || [];
			this.sourceTargetModel[ status ][ sourceLanguage ].push( record );
			this.targetSourceModel[ status ][ targetLanguage ].push( record );
		}

		for ( status in this.sourceTargetModel ) {
			tempModel = this.sourceTargetModel[ status ];
			this.sourceTargetModel[ status ] = [];
			for ( language in tempModel ) {
				if ( hasOwn.call( tempModel, language ) ) {
					for ( count = 0, translators = 0, i = 0; i < tempModel[ language ].length; i++ ) {
						count += +tempModel[ language ][ i ].count;
						translators += +tempModel[ language ][ i ].translators;
					}
					this.sourceTargetModel[ status ].push( {
						language: language,
						translations: tempModel[ language ],
						count: count,
						translators: translators
					} );
				}
			}

			tempModel = this.targetSourceModel[ status ];
			this.targetSourceModel[ status ] = [];
			for ( language in tempModel ) {
				if ( hasOwn.call( tempModel, language ) ) {
					for ( count = 0, translators = 0, i = 0; i < tempModel[ language ].length; i++ ) {
						count += +tempModel[ language ][ i ].count;
						translators += +tempModel[ language ][ i ].translators;
					}
					this.targetSourceModel[ status ].push( {
						language: language,
						translations: tempModel[ language ],
						count: count,
						translators: translators
					} );
				}
			}
		}
	};

	$( function () {
		var cxLink, cxstats, $container;

		$container = $( '<div>' ).addClass( 'cx-stats-container' );

		// Set the global siteMapper for code which we cannot inject it
		mw.cx.siteMapper = new mw.cx.SiteMapper();
		$( '.mw-body-content' ).append(
			$( '<div>' ).addClass( 'cx-widget' ).append(
				$container
			)
		);

		cxstats = new CXStats( $container, {
			siteMapper: new mw.cx.SiteMapper()
		} );
		cxstats.init();

		if ( !mw.user.isAnon() &&
			mw.config.get( 'wgContentTranslationCampaigns' ).cxstats &&
			mw.user.options.get( 'cx' ) !== '1'
		) {
			cxLink = mw.util.getUrl( 'Special:ContentTranslation', {
				campaign: 'cxstats',
				to: mw.config.get( 'wgContentLanguage' )
			} );

			mw.hook( 'mw.cx.error' ).fire( mw.message( 'cx-stats-try-contenttranslation', cxLink ) );
		}
	} );
}() );
