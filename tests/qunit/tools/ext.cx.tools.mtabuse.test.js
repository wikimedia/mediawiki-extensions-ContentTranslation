/*!
 * QUnit tests for Content Translation.
 *
 * @ingroup Extensions
 * @licence GPL-2.0+
 */

( function ( $, mw ) {
	'use strict';

	QUnit.module( 'ext.cx.tools.mtabuse', QUnit.newMwEnvironment() );

	QUnit.test( 'MT Abuse - isAbuse method tests', 5, function ( assert ) {
		var progress, mtAbuseCard = new mw.cx.tools.mtabuse();
		progress = {
			any: 0,
			human: 0,
			mt: 0,
			mtSectionsCount: 0
		};
		assert.assertFalse( mtAbuseCard.isAbuse( progress ), 'Beginning of translation. Nothing done.' );
		progress = {
			any: 1.0,
			human: 0.9,
			mt: 0.1,
			mtSectionsCount: 10
		};
		assert.assertFalse( mtAbuseCard.isAbuse( progress ), 'Translation with 90% human edits' );
		progress = {
			any: 0,
			human: 0,
			mt: 0.8,
			mtSectionsCount: 2
		};
		assert.assertFalse( mtAbuseCard.isAbuse( progress ), 'Translation with 80% MT, but only 2 sections translated' );
		progress = {
			any: 0,
			human: 0,
			mt: 0.8,
			mtSectionsCount: 6
		};
		assert.assertTrue( mtAbuseCard.isAbuse( progress ), 'Translation with 80% MT, 6 sections translated' );
		progress = {
			any: 0.76,
			human: 0,
			mt: 0.8,
			mtSectionsCount: 5
		};
		assert.assertTrue( mtAbuseCard.isAbuse( progress ),
			'Translation with 80% MT, only 5 sections translated, but total translation is 76%' );
	} );

}( jQuery, mediaWiki ) );
