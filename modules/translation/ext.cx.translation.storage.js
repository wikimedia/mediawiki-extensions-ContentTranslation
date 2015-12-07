/*!
 * Client side interface for storing translations
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	/**
	 * @class
	 */
	function ContentTranslationStorage() {
		this.sections = null;
	}

	ContentTranslationStorage.prototype.init = function () {
		this.sections = {};
		this.listen();
	};

	/**
	 * Get the content to save. Clean up the content by removing
	 * all unwanted classes and placeholders.
	 *
	 * @return {string} HTML to save
	 */
	ContentTranslationStorage.prototype.getContent = function ( $section ) {
		var $content;

		$content = $section.clone();
		// Remove all highlighting before saving
		$content
			.find( '.cx-highlight, .cx-highlight--blue, .cx-highlight--lightblue' )
			.removeClass( 'cx-highlight cx-highlight--blue cx-highlight--lightblue' );

		return $content.html();
	};

	ContentTranslationStorage.prototype.listen = function () {
		var self = this;
		mw.hook( 'mw.cx.translation.change' ).add( function ( $targetSection ) {
			self.markForSave( $targetSection );
		} );

		mw.hook( 'mw.cx.translation.save' ).add( function () {
			var sectionId, sections = [];

			for ( sectionId in self.sections ) {
				if ( !self.sections[ sectionId ].saved ) {
					sections.push( self.sections[ sectionId ] );
				}
			}
			self.saveSections( sections );
		} );
	};

	ContentTranslationStorage.prototype.saveSections = function ( sections ) {
		var api = new mw.Api();

		if ( !mw.cx.translationId ) {
			// A translation id is must to save translations. This must be set by
			// the ext.cx.translation.draft module. And that module to be eventually
			// merged to this module.
			return;
		}

		return api.postWithToken( 'csrf', {
			action: 'cxsave',
			translationid: mw.cx.translationId,
			content: EasyDeflate.deflate( JSON.stringify( sections ) )
		} ).done( function () {
			var i;
			// Mark the sections saved
			for ( i = 0; i < sections.length; i++ ) {
				sections[ i ].saved = true;
			}
		} );
	};

	ContentTranslationStorage.prototype.markForSave = function ( $targetSection ) {
		var $sourceSection, sourceSectionId, targetSectionId, sequenceId, state, origin;

		targetSectionId = $targetSection.attr( 'id' );
		state = $targetSection.data( 'cx-state' );
		sourceSectionId = $targetSection.data( 'source' );
		$sourceSection = mw.cx.getSourceSection( sourceSectionId );

		if ( state === 'mt' ) {
			origin = $targetSection.data( 'cx-mt-provider' ) || 'user';
		} else {
			origin = 'user';
		}
		sequenceId = $sourceSection.data( 'seqid' );
		this.sections[ targetSectionId ] = {
			content: this.getContent( $targetSection ),
			sectionId: sourceSectionId, // source section id is the canonical section id.
			saved: false,
			sequenceId: sequenceId,
			origin: origin
		};

		// Source sections are saved only once.
		this.sections[ sourceSectionId ] = this.sections[ sourceSectionId ] || {
			content: this.getContent( $sourceSection ),
			sectionId: sourceSectionId,
			saved: false,
			sequenceId: sequenceId,
			origin: 'source'
		};
	};

	mw.cx.ContentTranslationStorage = ContentTranslationStorage;
}( jQuery, mediaWiki ) );
