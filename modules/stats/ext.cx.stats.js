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

	function CXStats( $container, options ) {
		this.$container = $container;
		this.sitemapper = options.siteMapper;
		this.sourceTargetModel = {};
		this.targetSourceModel = {};
		this.totalTranslationTrend = null;
		this.languageTranslationTrend = null;
		this.$highlights = null;
		this.$graph = null;
	}

	CXStats.prototype.init = function () {
		var self = this,
			$spinner;

		$spinner = $( '<div>' )
			.addClass( 'cx-spinner cx-spinner--tools' )
			.append(
				$( '<div>' ).addClass( 'bounce1' ),
				$( '<div>' ).addClass( 'bounce2' ),
				$( '<div>' ).addClass( 'bounce3' )
			);
		this.$highlights = $( '<div>' ).addClass( 'cx-stats-highlights' );
		this.$graph = $( '<canvas>' ).attr( {
			id: 'cxtrend',
			width: this.$container.width() - 200, // Leave a 200px margin buffer to avoid overflow
			height: 400
		} );

		this.$container.append(
			$spinner,
			this.$highlights,
			$( '<h2>' ).text( mw.msg( 'cx-stats-published-translations-title' ) ),
			$( '<div>' ).addClass( 'cx-stats-trend' ).append( this.$graph )
		);

		$.when(
			this.getCXTrends(),
			this.getCXTrends( mw.config.get( 'wgContentLanguage' ) )
		).done( function ( totalTrend, languageTrend ) {
			self.totalTranslationTrend = totalTrend;
			self.languageTranslationTrend = languageTrend;
			self.languageTranslationTrend = mergeAndFill( totalTrend, languageTrend );
			self.renderHighlights();
			self.drawGraph( 'count' );
		} );
		this.getCXStats().then( function ( data ) {
			if ( !data || !data.query ) {
				return;
			}
			$spinner.remove();
			self.drawCharts( data.query.contenttranslationstats );
		} );
	};

	/**
	 * Render the boxes at the top with the most interesting recent data.
	 */
	CXStats.prototype.renderHighlights = function () {
		var weekTrend, weekLangTrend, totalTrendLength, langTrendLength, localLanguage, total,
			lastWeekTotal, prevWeekTotal, lastWeekTranslations, prevWeekTranslations,
			langTotal, lastWeekLangTotal, prevWeekLangTotal,
			lastWeekLangTranslations, prevWeekLangTranslations,
			$total, $weeklyStats,
			weekLangTrendText, weekTrendText, weekTrendClass,
			$parenthesizedTrend, $trendInLanguage,
			fmt = mw.language.convertNumber; // Shortcut

		if ( this.totalTranslationTrend.length < 4 ) {
			// Trend calculation works only if we have enough data
			return;
		}

		weekTrend = 0;
		weekLangTrend = 0;
		totalTrendLength = this.totalTranslationTrend.length;
		langTrendLength = this.languageTranslationTrend.length;
		localLanguage = $.uls.data.getAutonym( mw.config.get( 'wgContentLanguage' ) );
		total = this.totalTranslationTrend[ totalTrendLength - 1 ].count;

		lastWeekTotal = this.totalTranslationTrend[ totalTrendLength - 2 ].count;
		prevWeekTotal = this.totalTranslationTrend[ totalTrendLength - 3 ].count;
		lastWeekTranslations = lastWeekTotal - prevWeekTotal;
		prevWeekTranslations = prevWeekTotal -
			this.totalTranslationTrend[ totalTrendLength - 4 ].count;
		if ( prevWeekTranslations ) {
			weekTrend = ( lastWeekTranslations - prevWeekTranslations ) /
				prevWeekTranslations * 100;
		}
		weekTrend = parseInt( weekTrend );

		langTotal = this.languageTranslationTrend[ langTrendLength - 1 ].count;
		lastWeekLangTotal = this.languageTranslationTrend[ langTrendLength - 2 ].count;
		prevWeekLangTotal = this.languageTranslationTrend[ langTrendLength - 3 ].count;
		lastWeekLangTranslations = lastWeekLangTotal - prevWeekLangTotal;
		prevWeekLangTranslations = prevWeekLangTotal -
			this.languageTranslationTrend[ langTrendLength - 4 ].count;
		if ( prevWeekLangTranslations ) {
			weekLangTrend = ( lastWeekLangTranslations - prevWeekLangTranslations ) /
				prevWeekLangTranslations * 100;
		}
		weekLangTrend = parseInt( weekLangTrend );

		$total = $( '<div>' )
			.addClass( 'cx-stats-box' )
			.append(
				$( '<div>' )
					.addClass( 'cx-stats-box__title' )
					.text( mw.msg( 'cx-stats-total-published' ) ),
				$( '<div>' )
					.addClass( 'cx-stats-box__total' )
					.text( fmt( total ) ),
				$( '<div>' )
					.addClass( 'cx-stats-box__localtotal' )
					.text( mw.msg(
						'cx-stats-local-published-number',
						fmt( langTotal ),
						fmt( localLanguage )
					)
				)
			);

		weekLangTrendText = mw.msg( 'percent', fmt( weekLangTrend ) );
		if ( weekLangTrend >= 0 ) {
			// Add the plus sign to make clear that it's an increase
			weekLangTrendText = '+' + weekLangTrendText;
		}

		weekTrendText = mw.msg( 'percent', fmt( weekTrend ) );
		if ( weekTrend >= 0 ) {
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
				fmt( lastWeekLangTranslations ),
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
						.text( fmt( lastWeekTranslations ) ),
					// nbsp is needed for separation between the numbers.
					// Without it the numbers appear in the wrong order in RTL environments.
					$( '<span>' )
						.html( '&#160;' ),
					$( '<span>' )
						.prop( 'dir', 'ltr' )
						.addClass( 'cx-stats-box__trend ' + weekTrendClass )
						.text( weekTrendText )
				),
				$trendInLanguage
			);

		this.$highlights.append( $total, $weeklyStats );
	};

	CXStats.prototype.drawCharts = function ( stats ) {
		this.transformJsonToModel( stats );
		this.$container.append(
			$( '<h2>' ).text( mw.msg( 'cx-stats-published-translations-title' ) ),
			createTabs( 'cx-stats-published', [
				{
					title: mw.msg( 'cx-stats-published-target-source' ),
					content: this.drawTranslationsChart( 'to', 'published', 'count' )
				},
				{
					title: mw.msg( 'cx-stats-published-source-target' ),
					content: this.drawTranslationsChart( 'from', 'published', 'count' )
				}
			] ),
			$( '<h2>' ).text( mw.msg( 'cx-stats-draft-translations-title' ) ),
			createTabs( 'cx-stats-draft', [
				{
					title: mw.msg( 'cx-stats-draft-target-source' ),
					content: this.drawTranslationsChart( 'to', 'draft', 'count' )
				},
				{
					title: mw.msg( 'cx-stats-draft-source-target' ),
					content: this.drawTranslationsChart( 'from', 'draft', 'count' )
				}
			] ),
			$( '<h2>' ).text( mw.msg( 'cx-stats-published-translators-title' ) ),
			createTabs( 'cx-stats-translators', [
				{
					title: mw.msg( 'cx-stats-published-target-source' ),
					content: this.drawTranslationsChart( 'to', 'published', 'translators' )
				},
				{
					title: mw.msg( 'cx-stats-published-source-target' ),
					content: this.drawTranslationsChart( 'from', 'published', 'translators' )
				}
			] )
		);
	};

	function createTabs( id, items ) {
		var $container, $content, i, $tabs, $tab, $expand;

		$container = $( '<div>' ).addClass( 'cx-stats-tabs-container' );
		$tabs = $( '<ul>' ).addClass( 'cx-stats-tabs' );
		$container.append( $tabs );
		for ( i = 0; i < items.length; i++ ) {
			$tab = $( '<li>' )
				.addClass( 'cx-stats-tabs-tabtitle' )
				.data( 'tab', id + 'tab-' + i )
				.text( items[ i ].title );
			$content = items[ i ].content
				.attr( 'id', id + 'tab-' + i )
				.addClass( 'cx-stats-tabs-tab-content cx-stats-tabs-collapsed' );

			if ( i === 0 ) {
				$tab.addClass( 'cx-stats-tabs-current' );
				$content.addClass( 'cx-stats-tabs-current' );
			}

			$tabs.append( $tab );
			$container.append( $content );
		}

		// Click handler for tabs
		$tabs.find( 'li' ).click( function () {
			var tabId = $( this ).data( 'tab' );

			$tabs.find( 'li' ).removeClass( 'cx-stats-tabs-current' );
			$container.find( '.cx-stats-tabs-tab-content' )
				.removeClass( 'cx-stats-tabs-current' );
			$( this ).addClass( 'cx-stats-tabs-current' );
			$( '#' + tabId ).addClass( 'cx-stats-tabs-current' );
		} );

		$expand = $( '<a>' )
			.addClass( 'cx-stats-tabs-toggle-all' )
			.text( mw.msg( 'cx-stats-tabs-expand' ) )
			.click( function () {
				$container.find( '.cx-stats-tabs-tab-content' )
					.removeClass( 'cx-stats-tabs-collapsed' );
				$( this ).remove();
			} );
		$container.append( $expand );

		return $container;
	}

	CXStats.prototype.drawTranslationsChart = function ( direction, status, property ) {
		var $chart, $bar, translations, $translations, model, i, j, $rows = [],
			$callout,
			$total,
			$row, width, max = 0,
			$tail, tailWidth = 0,
			tail,
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

				if ( width > 2 || j === 0 ) {
					// languages with more than 2% are represented in chart.
					$bar = $( '<span>' )
						.addClass( 'cx-stats-chart__bar' )
						.css( 'width', parseInt( width ) + '%' )
						.text( translations[ j ][ (
								direction === 'to' ? 'sourceLanguage' : 'targetLanguage' )
							] );

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
						.text( $.uls.data.getAutonym( translations[ j ][
							direction === 'to' ? 'sourceLanguage' : 'targetLanguage' ] ) )
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
				direction: $.fn.callout.autoDirection( '0' ),
				content: $callout
			} );

			$total = $( '<span>' )
				.addClass( 'cx-stats-chart__total' )
				.text( fmt( model[ i ][ property ] ) );

			if ( direction === 'to' ) {
				$total = $( '<a>' )
					.addClass( 'cx-stats-chart__total' )
					.prop( 'href', mw.cx.siteMapper.getPageUrl(
						model[ i ].language, 'Special:NewPages', { tagfilter: 'contenttranslation' }
					) )
					.text( fmt( model[ i ][ property ] ) );
			} else {
				$total = $( '<span>' )
					.addClass( 'cx-stats-chart__total' )
					.text( fmt( model[ i ][ property ] ) );
			}
			$row.append(
				$( '<span>' )
					.addClass( 'cx-stats-chart__langcode' )
					.text( model[ i ].language ),
				$( '<span>' )
					.addClass( 'cx-stats-chart__autonym' )
					.prop( {
						dir: $.uls.data.getDir( model[ i ].language ),
						lang: model[ i ].language
					} )
					.text( $.uls.data.getAutonym( model[ i ].language ) ),
				$total,
				$translations
			);

			$rows.push( $row );
		}
		$chart.append( $rows );

		return $chart;
	};

	/**
	 * Get the Content Translation stats.
	 */
	CXStats.prototype.getCXStats = function () {
		return ( new mw.Api() ).get( {
			action: 'query',
			list: 'contenttranslationstats'
		} );
	};

	/**
	 * Get the Content Translation trend for the given target language.
	 * Fetch the number of translations to the given language.
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

	CXStats.prototype.drawGraph = function ( type ) {
		var data, cxTrendGraph, ctx;

		ctx = this.$graph[ 0 ].getContext( '2d' );

		data = {
			labels: $.map( this.totalTranslationTrend, function ( data ) {
				return data.date;
			} ),
			datasets: [
				{
					label: mw.message( 'cx-trend-all-translations' ).escaped(),
					strokeColor: '#FD6E8A',
					pointColor: '#FD6E8A',
					data: $.map( this.totalTranslationTrend, function ( data ) {
						return data[type];
					} )
				},
				{
					label: mw.message(
						'cx-trend-translations-to',
						$.uls.data.getAutonym( mw.config.get( 'wgContentLanguage' ) )
					).escaped(),
					strokeColor: '#80B3FF',
					pointColor: '#80B3FF',
					data: $.map( this.languageTranslationTrend, function ( data ) {
						return data[type];
					} )
				}
			]
		};

		/*global Chart:false */
		cxTrendGraph = new Chart( ctx ).Line( data, {
			datasetFill: false,
			legendTemplate: '<ul><% for (var i=0; i<datasets.length; i++){%><li style=\"color:<%=datasets[i].strokeColor%>\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
		} );

		this.$container.find( '.cx-stats-trend' ).append( cxTrendGraph.generateLegend() );
	};

	CXStats.prototype.transformJsonToModel = function ( records ) {
		var i, record, language, status, count, translators,
			sourceLanguage, targetLanguage,
			tempModel;

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
				if ( tempModel.hasOwnProperty( language ) ) {
					for ( count = 0, translators = 0, i = 0; i < tempModel[ language ].length; i++ ) {
						count += parseInt( tempModel[ language ][ i ].count );
						translators += parseInt( tempModel[ language ][ i ].translators );
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
				if ( tempModel.hasOwnProperty( language ) ) {
					for ( count = 0, translators = 0, i = 0; i < tempModel[ language ].length; i++ ) {
						count += parseInt( tempModel[ language ][ i ].count );
						translators += parseInt( tempModel[ language ][ i ].translators );
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

	/**
	 * Sorts in descending order
	 */
	function sortByTranslators( a, b ) {
		if ( parseInt( a.translators ) > parseInt( b.translators ) ) {
			return -1;
		}
		if ( parseInt( a.translators ) < parseInt( b.translators ) ) {
			return 1;
		}
		// a must be equal to b
		return 0;
	}

	/**
	 * Sorts in descending order
	 */
	function sortByCount( a, b ) {
		if ( parseInt( a.count ) > parseInt( b.count ) ) {
			return -1;
		}
		if ( parseInt( a.count ) < parseInt( b.count ) ) {
			return 1;
		}
		// a must be equal to b
		return 0;
	}

	/**
	 * Fill the data in languageData to match with totalData length.
	 * @param {[Object]} totalData Array of total translation trend data
	 * @param {[Object]} totalData Array of translations to a particular language
	 * @return {[Object]} Array of translations to a particular language, after padding
	 */
	function mergeAndFill( totalData, languageData ) {
		var i,
			padding = [];

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
		var cxLink, cxstats,
			$header = $( '<div>' ).addClass( 'cx-widget__header' ),
			$container = $( '<div>' ).addClass( 'cx-stats-container' );

		// Set the global siteMapper for code which we cannot inject it
		mw.cx.siteMapper = new mw.cx.SiteMapper( mw.config.get( 'wgContentTranslationSiteTemplates' ) );
		$( 'body' ).append(
			$( '<div>' ).addClass( 'cx-widget' )
			.append( $header, $container )
		);
		$header.cxHeader( mw.cx.siteMapper );
		cxstats = new CXStats( $container, {
			siteMapper: new mw.cx.SiteMapper( mw.config.get( 'wgContentTranslationSiteTemplates' ) )
		} );
		cxstats.init();

		if ( mw.user.isAnon() ) {
			$( '.cx-header__bar' ).hide();
		}

		if ( !mw.user.isAnon() &&
			mw.config.get( 'wgContentTranslationCampaigns' ).cxstats &&
			mw.user.options.get( 'cx' ) !== '1'
		) {
			cxLink = mw.util.getUrl( 'Special:ContentTranslation', {
				campaign: 'cxstats',
				to: mw.config.get( 'wgContentLanguage' )
			} );

			$( '.cx-header__bar' ).hide();
			mw.hook( 'mw.cx.error' ).fire( mw.message( 'cx-stats-try-contenttranslation', cxLink ) );
		} else {
			$header.find( '.cx-header__translation-center a' ).text( mw.msg( 'cx-header-new-translation' ) );
		}
	} );
}( jQuery, mediaWiki ) );
