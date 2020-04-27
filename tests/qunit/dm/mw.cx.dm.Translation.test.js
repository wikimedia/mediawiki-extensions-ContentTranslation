/*!
 * @author Santhosh Thottingal
 * @license GPL-2.0-or-later
 */

( function () {
	'use strict';

	var restoreTestData,
		testDataPath = mw.config.get( 'wgExtensionAssetsPath' ) +
		'/ContentTranslation/tests/qunit/data/dm-translation-source-article.html';

	QUnit.module( 'mw.cx.dm.Translation', QUnit.newMwEnvironment() );

	QUnit.skip( 'Source and target dom build test', function ( assert ) {
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
					content: '<section id="cxSourceSection12"><p id="mwAz">Content new</p></section>'
				},
				user: {
					content: '<section id="cxTargetSection12"><p id="mwAz">Translated content</p></section>'
				}
			},
			mwAx: {
				source: {
					content: '<p id="mwAx">Content for mwAx</p>'
				},
				user: {
					content: '<p id="mwAx">Translated content</p>'
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
			},
			21: {
				source: {
					content: '<section id="cxSourceSection201"><p id="mwBA"><b>Phantosmia</b> (phantom smell), also called an olfactory hallucination, is smelling an odor that is not actually there</p></section>'
				},
				user: {
					content: '<section id="cxSourceSection201"><p id="mwBA">Translated content mwAr</p></section>'
				}
			},
			22: {
				source: {
					content: '<section id="cxSourceSection201"><p id="mwBB"><b>A</b> B C D E F</p></section>'
				},
				user: {
					content: '<section id="cxSourceSection201"><p id="mwBB"><b>A</b> B C D E F</p></section>'
				}
			},
			23: {
				source: {
					content: '<section id="cxSourceSection201"><h2 id="mwBC"><b>A</b> B C D E F</h2></section>'
				},
				user: {
					content: '<section id="cxSourceSection201"><h2 id="mwBC"><b>A</b> B C D E F</h2></section>'
				}
			},
			24: {
				source: {
					content: '<section id="cxSourceSection20"><p id="mwBD"><b>A</b> B C G H I</p></section>'
				},
				user: {
					content: '<section id="cxSourceSection20"><p id="mwBD"><b>A</b> B C G H I</p></section>'
				}
			},
			25: {
				source: {
					content: '<section id="cxSourceSection20"><p id="mwBD"><b>Sed</b> congue augue a eros tristique, nec interdum ipsum consequat. Maecenas id magna id nisi dapibus tristique</p></section>'
				},
				user: {
					content: '<section id="cxSourceSection20"><p id="mwBD">Seds conguee auguee aa eross tristiquee, necc interduum ipsuum conssequat. Maeceenas id magna id niisi dapibus tristique.</p></section>'
				}
			},
			26: {
				source: {
					content: '<section id="cxSourceSection20"><p id="mwBD">Praesent auctor tincidunt risus, vitae sollicitudin tellus sodales id. Aenean a augue vitae neque lacinia euismod. Proin tincidunt dolor tincidunt, sagittis dui in, eleifend justo. <b>Sed</b> congue augue a eros tristique, nec interdum ipsum consequat!. Maecenas id "magna" id nisi dapibus Tristique.</p></section>'
				},
				user: {
					content: '<section id="cxSourceSection20"><p id="mwBD">Seds conguee auguee aa eross tristiquee, necc interduum ipsuum conssequat. Maeceenas id magna id niisi dapibus tristique.</p></section>'
				}
			},
			27: {
				source: {
					content: '<section rel="cx:Section" id="cxSourceSection3" data-mw-cx-source="undefined"><p id="mwEA"><span data-segmentid="14" class="cx-segment"><a href="./Barbados" rel="mw:WikiLink" data-linkid="15" class="cx-link" id="mwEQ" title="Barbados">Barbados</a> is a moderate <a href="./Political" rel="mw:WikiLink" data-linkid="16" class="mw-redirect cx-link" id="mwEg" title="Political">political</a> and <a href="./Economic" rel="mw:WikiLink" data-linkid="17" class="mw-redirect cx-link" id="mwEw" title="Economic">economic</a> power in the Caribbean region.</span></p>\n\n</section>'
				},
				user: {
					content: '<section rel="cx:Section" id="cxTargetSection3" data-mw-cx-source="Apertium"><p id="mwEA"><span data-segmentid="14" class="cx-segment">Barbados es un poder político y económico moderado en la región de Caribes.</span></p></section>'
				}
			}
		},
		sourceSections: {
			12: {
				source: '<section id="cxSourceSection12"><p id="mwAz">Content new</p></section>',
				description: 'Ideal case: A CX2 saved translation with same source section content',
				sourceLanguage: 'en',
				expectedSavedUnit: 12
			},
			13: {
				source: '<section id="cxSourceSection13"><p id="mwAx">Content new</p></section>',
				description: 'CX1 saved translation restoring against a CX2 translation.',
				sourceLanguage: 'en',
				expectedSavedUnit: 'mwAx'
			},
			18: {
				source: '<section id="cxSourceSection18"><p id="mwAp">Content mwAp</p></section>',
				description: 'CX2 translation, section number mismatch, but content matched.',
				sourceLanguage: 'en',
				expectedSavedUnit: 16
			},
			19: {
				source: '<section id="cxSourceSection19"><p id="mwAr">Content mwAp</p></section>',
				description: 'CX1 translation, section number mismatch, but parsoid id matched.',
				sourceLanguage: 'en',
				expectedSavedUnit: 17
			},
			20: {
				source: '<section id="cxSourceSection20"><p id="mwAq">Content mwAq</p></section>',
				description: 'No translation found.',
				sourceLanguage: 'en',
				expectedSavedUnit: null
			},
			21: {
				source: '<section id="cxSourceSection20"><p id="mwBa"><b>Phantosmia</b> (phantom smell), also called an olfactory hallucination or a phantom odor[1] is smelling an odor that is not actually there</p></section>',
				description: 'CX2 translation, Recover using content matching',
				sourceLanguage: 'en',
				expectedSavedUnit: 21
			},
			22: {
				source: '<section id="cxSourceSection20"><p id="mwBb"><b>A</b> B C D E F</p></section>',
				description: 'CX2 translation, Recover using content matching',
				sourceLanguage: 'en',
				expectedSavedUnit: 22
			},
			23: {
				source: '<section id="cxSourceSection20"><h1 id="mwBc"><b>A</b> B C D E F</h1></section>',
				description: 'CX2 translation, Recover using content matching failed due to tag mismatch',
				sourceLanguage: 'en',
				expectedSavedUnit: null
			},
			24: {
				source: '<section id="cxSourceSection20"><p id="mwBd"><b>A</b> B C D E F</p></section>',
				description: 'CX2 translation, Recover using content matching failed due to insufficient common token',
				sourceLanguage: 'en',
				expectedSavedUnit: null
			},
			25: {
				source: '<section id="cxSourceSection24"><p id="24">quick fox jumps over the lazy brown dog</section>',
				description: 'CX2 translation, Try to recover using content matching, but never attempt for a parsoid id match',
				sourceLanguage: 'en',
				expectedSavedUnit: null
			},
			26: {
				source: '<section id="cxSourceSection20"><p id="mwBD"><b>Sed</b> congue augue a eros tristique, nec interdum ipsum consequat. Maecenas id magna id nisi dapibus tristique. Praesent auctor tincidunt risus, vitae sollicitudin tellus sodales id. Aenean a augue vitae neque lacinia euismod. Proin tincidunt dolor tincidunt, sagittis dui in, eleifend justo.</p></section>',
				description: 'CX2 translation, Test whether big content has small content',
				sourceLanguage: 'en',
				expectedSavedUnit: 25
			},
			27: {
				source: '<section id="cxSourceSection20"><p id="mwBD"><b>Sed</b> congue augue a eros tristique, nec interdum ipsum consequat. Maecenas id magna id nisi dapibus tristique</p></section>',
				description: 'CX2 translation, Test whether big content has small content, ignore punctuations, case changes',
				sourceLanguage: 'en',
				expectedSavedUnit: 26
			},
			28: {
				source: '<section id="cxSourceSection0" rel="cx:Section"><p id="mwAg"></p>\n\n</section>',
				description: 'CX2 translation, test whether big content has small content when small content consists of newline characters',
				sourceLanguage: 'en',
				expectedSavedUnit: null
			}
		}
	};

	QUnit.test( 'Saved translation restore test', function ( assert ) {
		var sectionNumber, sourceSectionDom, sourceSection, savedUnit;

		for ( sectionNumber in restoreTestData.sourceSections ) {
			sourceSection = restoreTestData.sourceSections[ sectionNumber ];
			sourceSectionDom = $( sourceSection.source )[ 0 ];

			savedUnit = mw.cx.dm.Translation.static.getSavedSection(
				restoreTestData.savedTranslationUnits,
				sourceSectionDom,
				sourceSection.sourceLanguage
			);
			assert.strictEqual(
				savedUnit,
				restoreTestData.savedTranslationUnits[ sourceSection.expectedSavedUnit ],
				sourceSection.description
			);
		}
	} );

}() );
