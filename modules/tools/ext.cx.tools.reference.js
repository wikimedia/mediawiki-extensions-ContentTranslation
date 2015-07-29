/**
 * ContentTranslation Tools
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation tools
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	/**
	 * Reference Card
	 * @class
	 */
	function ReferenceCard() {
		this.$card = null;
		this.$removeReference = null;
		this.$addReference = null;
		this.$reference = null;
	}

	/**
	 * Get the reference card
	 * @return {jQuery}
	 */
	ReferenceCard.prototype.getCard = function () {
		var $referenceInfo, $cardHeader;

		this.$card = $( '<div>' )
			.addClass( 'card reference' );
		this.$addReference = $( '<div>' )
			.addClass( 'card__add-reference' )
			.text( mw.msg( 'cx-tools-reference-add' ) );
		this.$removeReference = $( '<div>' )
			.addClass( 'card__remove-reference' )
			.text( mw.msg( 'cx-tools-reference-remove' ) );

		$referenceInfo = $( '<div>' )
			.addClass( 'card__reference-info' );
		$cardHeader = $( '<div>' )
			.addClass( 'card__reference-header' );
		$cardHeader.append( $( '<div>' )
			.addClass( 'card__title' )
			.text( mw.msg( 'cx-tools-reference-title' ) ) );
		$cardHeader.append( $( '<div>' )
			.addClass( 'card__title--language' ) );
		$referenceInfo.append( $cardHeader );
		$referenceInfo.append( $( '<div>' )
			.addClass( 'card__reference-number' ) );
		$referenceInfo.append( $( '<div>' )
			// By default the reference is in the source language and direction
			.prop( {
				lang: mw.cx.sourceLanguage,
				dir: $.uls.data.getDir( mw.cx.sourceLanguage )
			} )
			.addClass( 'card__reference-content' ) );

		$referenceInfo.append( this.$addReference, this.$removeReference );
		this.$card.append( $referenceInfo );
		this.listen();
		return this.$card;
	};

	ReferenceCard.prototype.onShow = function () {
		mw.hook( 'mw.cx.tools.shown' ).fire( true );
	};

	/**
	 * Remove the reference
	 */
	ReferenceCard.prototype.removeReference = function () {
		var $parentSection;

		if ( this.$reference ) {
			$parentSection = this.$reference.parents( '[contenteditable]' );
			$parentSection.trigger( 'input' );
			this.$reference.remove();
			this.stop();
		}
	};

	/**
	 * Add the reference to the cursor position in translation
	 */
	ReferenceCard.prototype.addReference = function () {
		var $reference, referenceId, targetReferenceId;

		mw.cx.selection.restore( 'translation' );
		$reference = this.$reference.clone();
		referenceId = $reference.prop( 'id' );
		targetReferenceId = 'cx' + referenceId;
		$reference.attr( {
			id: targetReferenceId,
			'data-sourceid': referenceId
		} );
		mw.cx.selection.pasteHTML( $reference[ 0 ].outerHTML );
		// Adapt references.
		this.adaptReference( targetReferenceId );
		// Click handler for references.
		$( document.getElementById( targetReferenceId ) )
			.on( 'click', referenceClickHandler )
			// Mark it readonly
			.attr( 'contenteditable', false );

		// Make sure we add reference list since we added a reference just now.
		this.addReferenceList();
		this.stop();
	};

	/**
	 * Event handlers
	 */
	ReferenceCard.prototype.listen = function () {
		this.$removeReference.on( 'click', $.proxy( this.removeReference, this ) );
	};

	ReferenceCard.prototype.onShow = function () {
		mw.hook( 'mw.cx.tools.shown' ).fire( true );
	};

	/**
	 * Get the reference content for the given reference Id.
	 * The content is taken from the reference list section,
	 * linked by mw-data.body.id.
	 * See https://phabricator.wikimedia.org/T88290
	 * and https://www.mediawiki.org/wiki/Parsoid/MediaWiki_DOM_spec#Ref_and_References
	 * @param {string} referenceId The reference element Identifier.
	 * @return {string|null} The HTML content of the reference.
	 */
	ReferenceCard.prototype.getReferenceContent = function ( referenceId ) {
		var reference, referenceContentElement;

		reference = this.getReferenceData( referenceId );
		if ( !reference || !reference.body ) {
			return null;
		}
		// Support traditional reference handling by Parsoid
		if ( reference.body && reference.body.html ) {
			return reference.body.html;
		}

		referenceContentElement = document.getElementById( reference.body.id );

		return referenceContentElement && referenceContentElement.outerHTML;
	};

	/**
	 * Add the reference list(s), usually at the end of translation
	 */
	ReferenceCard.prototype.addReferenceList = function () {
		var $referenceLists, $parentSection;

		// There can be multiple reference lists grouped for notes and references
		// For example see enwiki:Hydrogen
		$referenceLists = $( '[typeof*="mw:Extension/references"]' );

		if ( !$( '.cx-column--translation [typeof*="mw:Extension/references"]' ).length ) {
			// Target reference list not added yet.
			$referenceLists.each( function ( key, referenceList ) {
				var $referenceList = $( referenceList );

				if ( $referenceList.parent().is( '.cx-column__content' ) ) {
					// Reference list is the section,
					$parentSection = $referenceList;
				} else {
					// Reference list not the section, it is wrapped inside.
					$parentSection = $referenceList.parent();
				}
				mw.hook( 'mw.cx.translation.add' ).fire( $parentSection.attr( 'id' ), 'reference' );
			} );
		}
	};

	/**
	 * Start presenting the reference card
	 * @param {string} referenceId The reference element Identifier.
	 * @param {string} language Language code of language where this reference exist.
	 */
	ReferenceCard.prototype.start = function ( referenceId, language ) {
		var $sourceReference, $targetReference, referenceContent;

		// Reference Ids are weird strings like "cite_ref-12-0", jquery fails to do look up with them
		$sourceReference = $( document.getElementById( referenceId ) );
		$targetReference = $( document.getElementById( 'cx' + referenceId ) );
		referenceContent = this.getReferenceContent( referenceId );
		if ( !referenceContent ) {
			this.stop();
			return;
		}
		this.$card.find( '.card__reference-number' )
			.text( $sourceReference.text() );
		this.$card.find( '.card__reference-content' )
			.html( referenceContent );

		if ( $targetReference.length && language === mw.cx.targetLanguage ) {
			this.$reference = $targetReference;
			this.$removeReference.on( 'click', $.proxy( this.removeReference, this ) );
			this.$addReference.remove();
		}
		if ( $sourceReference.length && language === mw.cx.sourceLanguage ) {
			this.$reference = $sourceReference;
			this.$addReference.on( 'click', $.proxy( this.addReference, this ) );
			this.$removeReference.remove();
		}
		this.$card.find( '.card__title--language' )
			.text( $.uls.data.getAutonym( language ) );
		this.$card.find( 'a' ).attr( 'target', '_blank' );
		this.onShow();
	};

	ReferenceCard.prototype.stop = function () {
		this.$card.remove();
		mw.hook( 'mw.cx.tools.shown' ).fire( false );
	};

	ReferenceCard.prototype.getTriggerEvents = function () {
		return [
			'mw.cx.select.reference',
			'mw.cx.search.reference'
		];
	};

	/**
	 * For the given reference id, get the reference data
	 *
	 * @param {string} referenceId
	 * @return {Object|null}
	 */
	ReferenceCard.prototype.getReferenceData = function ( referenceId ) {
		var $sourceReference;

		$sourceReference = $( document.getElementById( referenceId ) );
		if ( !$sourceReference.is( '[typeof*="mw:Extension/ref"]' ) ) {
			mw.log( '[CX] Possible exploitation attempt via references. Reference ignored.' );
			return null;
		}

		return $sourceReference.data( 'mw' );
	};

	/**
	 * Reference adaptation.
	 * See https://www.mediawiki.org/wiki/Parsoid/MediaWiki_DOM_spec#Ref_and_References
	 * We copy the data-mw that was adapted using the template configuration at
	 * ext.cx.source.filter.js#adaptTemplate to the $references' mwData.body.html
	 *
	 * @param {string} referenceId
	 */
	ReferenceCard.prototype.adaptReference = function ( referenceId ) {
		var $referenceContent, $targetReference,
			mwData;

		$targetReference = $( document.getElementById( 'cx' + referenceId ) );
		mwData = this.getReferenceData( referenceId );
		if ( !mwData ) {
			// This is almost impossible. Since every reference will have mw-data as
			// Parsoid DOM Spec
			return;
		}
		mwData.body = mwData.body || {};
		if ( !mwData.body.id ) {
			/*
			Every reference must have a data-mw.body with id poiting to the item
			in References section. In general, we can just get copy the data-mw
			from the source reference. But there are cases it wont be filled in source reference.
			Example: When reference is reused more than once, the second reference might not have
			the data-mw.body.id. We need to find that id by looking at references section.
			To understand this, consider this example reference.

			<span about="#mwt6" class="reference" id="cite_ref-three_3-0" rel="dc:references" typeof="mw:Extension/Ref"
			    data-mw='{"name": "ref", "attrs": {"name": "three"}, "body":{"id":"mw-reference-text-cite_three-3"}}'>
			  <a href="#cite_note-three-3">[3]</a>
			</span>
			When reused, note that body.id is missing.
			<span about="#mwt8" class="reference" id="cite_ref-three_3-1" rel="dc:references" typeof="mw:Extension/ref"
			    data-mw='{"name":"ref", "attrs":{"name":"three"}}'>
			  <a href="#cite_note-three-3">[3]</a>
			</span>
			Reference template expands in references section as below
			<ol about="#mwt11" typeof="mw:Extension/references">
			<li about="#cite_note-three-3" id="cite_note-three-3">
				<span rel="mw:referencedBy">↑
					<a href="#cite_ref-three_3-0">3.0</a>
					<a href="#cite_ref-three_3-1">3.1</a>
				</span>
				<span id="mw-reference-text-cite_note-three-3" class="mw-reference-text" data-parsoid="{}">Three</span>
				</li>
			</li>
			*/
			$referenceContent = $( '[typeof*="mw:Extension/references"]' )
				.find( 'a[href="#' + referenceId + '"]' )
				.closest( 'li' )
				.find( '.mw-reference-text' );
			mwData.body.id = $referenceContent.prop( 'id' );
		}
		$targetReference.attr( 'data-mw', JSON.stringify( mwData ) );
		this.addReferenceList();
	};

	function referenceClickHandler() {
		/*jshint validthis:true */
		var $reference = $( this );
		mw.hook( 'mw.cx.select.reference' ).fire(
			$reference.data( 'sourceid' ), mw.cx.targetLanguage );

		// Avoid bubbling of event.
		return false;
	}

	function processReferences( $section ) {
		var $sourceSection, referenceAdaptor, isRestoredFromDraft, $referenceLists;

		$referenceLists = $( '[typeof*="mw:Extension/references"]' );
		if ( !$referenceLists.length ) {
			// No reference list! There can be multiple reasons for this.
			// (a) Reference list section uses a template that we cannot adapt & filtered out from source.
			// (b) References are in a multi-part template that we cannot process at this point.
			// Or other unknown reason. But if we adapt a reference without a reference list at the
			// translation, parsoid will fail causing a publishing failure. That is serious issue and
			// we work around it by removing all references.
			mw.log( '[CX] References list not found in source article. References will be removed' );
			$section.find( '[typeof*="mw:Extension/ref"]' ).remove();
			return;
		}

		isRestoredFromDraft = $section.data( 'cx-draft' ) === true;

		referenceAdaptor = new ReferenceCard();
		$section.find( '[typeof*="mw:Extension/ref"]' ).each( function () {
			var $reference = $( this ),
				referenceId;

			// Click handler for references.
			$reference
				.on( 'click', referenceClickHandler )
				// Mark it readonly
				.attr( 'contenteditable', false );
			if ( isRestoredFromDraft ) {
				// This section is restored from draft. No need of reference adaptation.
				return;
			}
			referenceId = $reference.prop( 'id' );
			$reference.attr( 'data-sourceid', referenceId );
			$reference.attr( 'id', 'cx' + referenceId );
			// Adapt references.
			referenceAdaptor.adaptReference( referenceId );
		} );

		if ( !isRestoredFromDraft && $section.is( '[typeof="mw:Extension/references"]' ) ) {
			// It is references listing. Copy data-mw that we strip before MT.
			// See https://phabricator.wikimedia.org/T75121 and
			// https://www.mediawiki.org/wiki/Parsoid/MediaWiki_DOM_spec#Ref_and_References
			$sourceSection = mw.cx.getSourceSection( $section.data( 'source' ) );
			$section.attr( 'data-mw', JSON.stringify( $sourceSection.data( 'mw' ) ) );
		}
	}

	mw.cx.tools.reference = ReferenceCard;

	$( function () {
		mw.hook( 'mw.cx.translation.postMT' ).add( processReferences );
	} );
}( jQuery, mediaWiki ) );
