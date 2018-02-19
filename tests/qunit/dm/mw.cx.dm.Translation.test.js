/*!
 * @author Santhosh Thottingal
 * @license GPL-2.0-or-later
 */

( function ( $, mw ) {
	'use strict';

	var restoreTestData,
		testDataPath = mw.config.get( 'wgExtensionAssetsPath' ) +
		'/ContentTranslation/tests/qunit/data/dm-translation-source-article.html';

	QUnit.module( 'mw.cx.dm.Translation', QUnit.newMwEnvironment() );

	QUnit.test( 'Source and target dom build test', function ( assert ) {
		var $fixture = $( '#qunit-fixture' ),
			done = assert.async();

		$fixture.load( testDataPath, function () {
			var sourceHTML = $fixture.find( '#source-page-content' ).html(),
				sourceDom, targetDom;

			sourceDom = mw.cx.dm.Translation.static.getSourceDom( sourceHTML, false );
			assert.strictEqual( $( sourceDom ).find( 'article' ).length, 1,
				'Source DOM is wrapped in article tag' );
			assert.strictEqual( $( sourceDom ).find( 'section' ).length, 2,
				'There are 3 sections in source' );
			assert.strictEqual( $( sourceDom ).find( '[rel="cx:Section"]' ).length, 2,
				'Two sections are constructed in source dom' );
			targetDom = mw.cx.dm.Translation.static.getSourceDom( sourceHTML, true );
			assert.strictEqual( $( targetDom ).find( '[rel="cx:Placeholder"]' ).length, 2,
				'Two sections are constructed in target dom' );
			done();
		} );
	} );

	restoreTestData = {
		savedTranslationUnits: {
			12: {
				source: {
					content: '<section id="cxSourceSection12"><p id="mwAz">Content</p></section>'
				},
				user: {
					content: '<section id="cxTargetSection12"><p id="mwAz">Translated content</p></section>'
				}
			},
			mwAz: {
				source: {
					content: '<p id="mwAz">Content</p>'
				},
				user: {
					content: '<p id="mwAz">Translated content</p>'
				}
			},
			16: {
				source: {
					content: '<section id="cxSourceSection16"><p id="mwAp">Content mwAp</p></section>'
				},
				user: {
					content: '<section id="cxTargetSection16"><p id="mwAp">Translated content mwAp</p></section>'
				}
			},
			17: {
				source: {
					content: '<p id="mwAr">Content mwAr</p>'
				},
				user: {
					content: '<p id="mwAr">Translated content mwAr</p>'
				}
			}
		},
		sourceSections: {
			12: {
				source: '<section id="cxSourceSection12"><p id="mwAz">Content new</p></section>',
				description: 'Ideal case: A CX2 saved translation with same section numbers',
				expectedSavedUnit: 12
			},
			13: {
				source: '<section id="cxSourceSection13"><p id="mwAz">Content new</p></section>',
				description: 'CX1 saved translation restoring against a CX2 translation.',
				expectedSavedUnit: 'mwAz'
			},
			18: {
				source: '<section id="cxSourceSection18"><p id="mwAp">Content mwAp</p></section>',
				description: 'CX2 translation, section number mismatch, but parsoid id matched.',
				expectedSavedUnit: 16
			},
			19: {
				source: '<section id="cxSourceSection19"><p id="mwAr">Content mwAp</p></section>',
				description: 'CX1 translation, section number mismatch, but parsoid id matched.',
				expectedSavedUnit: 17
			},
			20: {
				source: '<section id="cxSourceSection20"><p id="mwAq">Content mwAq</p></section>',
				description: 'No translation found.',
				expectedSavedUnit: null
			}
		}
	};

	QUnit.test( 'Saved translation restore test', function ( assert ) {
		var sectionNumber, sourceSectionDom, sourceSection, savedUnit;

		for ( sectionNumber in restoreTestData.sourceSections ) {
			sourceSection = restoreTestData.sourceSections[ sectionNumber ];
			sourceSectionDom = $( sourceSection.source )[ 0 ];

			savedUnit = mw.cx.dm.Translation.static.getSavedSection( restoreTestData.savedTranslationUnits, sourceSectionDom, sectionNumber );
			assert.strictEqual(
				savedUnit,
				restoreTestData.savedTranslationUnits[ sourceSection.expectedSavedUnit ],
				sourceSection.description
			);
		}
	} );

}( jQuery, mediaWiki ) );
