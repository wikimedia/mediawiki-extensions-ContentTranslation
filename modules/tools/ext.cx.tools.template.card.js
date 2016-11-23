/*!
 * Content Translation template adaption card
 *
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	/**
	 * Template Control card
	 */
	function TemplateControlCard() {
		this.templateTool = null;
		this.sourceTemplate = null;
		this.targetTemplate = null;
		this.card = {
			$container: null,
			$sourceTemplateTitle: null,
			$targetTemplateTitle: null,
			$actionsMenu: null
		};
		this.actions = [ 'adapt', 'keep-original', 'skip' ];
	}

	/**
	 * Prepare and return the card template.
	 *
	 * @return {jQuery}
	 */
	TemplateControlCard.prototype.getCard = function () {
		var $titleRow, $title;

		this.card.$container = $( '<div>' )
			.addClass( 'card template' );

		$title = $( '<div>' )
			.addClass( 'card__title' )
			.text( mw.msg( 'cx-tools-template-title' ) );

		$titleRow = $( '<div>' )
			.addClass( 'card__title-row' )
			.append( $title );

		this.card.$sourceTemplateTitle = $( '<div>' )
			.addClass( 'card__template-source-title' )
			.prop( {
				lang: mw.cx.sourceLanguage,
				dir: $.uls.data.getDir( mw.cx.sourceLanguage )
			} );

		this.card.$targetTemplateTitle = $( '<div>' )
			.addClass( 'card__template-target-title' )
			.prop( {
				lang: mw.cx.targetLanguage,
				dir: $.uls.data.getDir( mw.cx.targetLanguage )
			} );

		this.card.$actionSelectorTrigger = $( '<div>' )
			.addClass( 'card__trigger' );

		this.card.$container.append(
			$titleRow,
			this.card.$sourceTemplateTitle,
			this.card.$targetTemplateTitle,
			this.card.$actionSelectorTrigger
		);

		this.card.$actionsMenu = $( [] );

		this.listen();

		return this.card.$container;
	};

	TemplateControlCard.prototype.listen = function () {
		var self = this;

		this.card.$actionSelectorTrigger.on( 'click', function () {
			self.card.$actionsMenu.toggle();
		} );
	};

	TemplateControlCard.prototype.buildActionsMenu = function ( actions ) {
		var i,
			self = this;

		this.card.$actionsMenu = $( '<ul>' )
			.addClass( 'card__template-options-menu' )
			.hide();

		for ( i = 0; i < actions.length; i++ ) {
			this.card.$actionsMenu.append( this.getActionMenuItem( actions[ i ] ) );
		}

		// Set the main label
		this.card.$actionSelectorTrigger
			.text( this.getActionMenuItemLabel( this.templateTool.action ) )
			.after( this.card.$actionsMenu );

		this.card.$actionsMenu.find( '.card__template-action-item' )
			.on( 'click', function () {
				self.card.$actionsMenu.hide();
				self.onActionSelect( $( this ).data( 'template-action' ) );
			} );
	};

	/**
	 * Menu item selection handler
	 *
	 * @param {string} actionId Action id
	 */
	TemplateControlCard.prototype.onActionSelect = function ( actionId ) {
		this.templateTool.action = actionId;
		this.setSelectedAction( this.templateTool.action );

		switch ( this.templateTool.action ) {
			case 'adapt':
				this.adapt();
				break;
			case 'keep-original':
				this.useSource();
				break;
			case 'skip':
				this.skip();
				break;
		}
	};

	/**
	 * Get the menu item label for the given action id.
	 *
	 * @param {string} actionId Action id
	 * @return {string} The menu item label
	 */
	TemplateControlCard.prototype.getActionMenuItemLabel = function ( actionId ) {
		return mw.msg( 'cx-template-action-' + actionId );
	};

	/**
	 * Set the given action as selected one.
	 *
	 * @param {string} actionId Action id
	 */
	TemplateControlCard.prototype.setSelectedAction = function ( actionId ) {
		this.card.$actionSelectorTrigger
			.text( this.getActionMenuItemLabel( actionId ) );
	};

	/**
	 * Get a menu item for the actions list.
	 *
	 * @param {string} actionId Action id.
	 * @return {jQuery}
	 */
	TemplateControlCard.prototype.getActionMenuItem = function ( actionId ) {
		var $label,
			selected = '';

		$label = $( '<span>' )
			.text( this.getActionMenuItemLabel( actionId ) );

		// Mark the selected item
		if ( actionId === this.templateTool.action ) {
			selected = 'selected';
		}

		return $( '<li>' )
			.addClass( [
				'card__template-action-item', selected, actionId
			].join( ' ' ) )
			.attr( 'data-template-action', actionId )
			.append( $label );
	};

	/**
	 * Start the template control card
	 *
	 * @param {jQuery|string} $section section or section identifier
	 */
	TemplateControlCard.prototype.start = function ( $section ) {
		var $targetTemplate, $sourceTemplate, storedState = false;

		if ( $section instanceof jQuery ) {
			$targetTemplate = $section.filter( '[typeof~="mw:Transclusion"]' );
		} else {
			$targetTemplate = mw.cx.getTranslationSection( $section );
		}
		if ( !$targetTemplate.length ) {
			this.stop();
			return;
		}

		// Source section and source template wont be same since the template
		// with template definition may be another element with same about attribute.
		$sourceTemplate = mw.cx.Template.static.getTemplateDef( $targetTemplate );

		this.templateTool = $sourceTemplate.data( 'cxtemplate' );
		if ( !this.templateTool ||
			mw.cx.TemplateTool.static.isReferencesBlock( $sourceTemplate )
		) {
			this.stop();
			return;
		}
		// Find what was the action used in previous save
		storedState = $targetTemplate.data( 'template-state' );
		// Do the stored action for a restored template or default action
		if ( storedState ) {
			this.setSelectedAction( storedState );
		} else {
			this.onActionSelect( this.templateTool.action );
		}
		this.sourceTemplate = this.templateTool.sourceTemplate;
		this.targetTemplate = this.templateTool.targetTemplate;
		this.card.$sourceTemplateTitle.text( this.sourceTemplate.title );

		if ( this.templateTool.action === 'adapt' && storedState ) {
			this.card.$targetTemplateTitle.text( this.targetTemplate.title ||
				mw.msg( 'cx-template-not-available', $.uls.data.getAutonym( mw.cx.targetLanguage ) ) );
		}

		this.buildActionsMenu( this.actions );
		this.card.$container.show();
		this.onShow();
	};

	/**
	 * Adapt the template for the target language.
	 */
	TemplateControlCard.prototype.adapt = function () {
		var self = this;

		this.templateTool.adapt().then( function () {
			// Adaptation passed.
			self.card.$targetTemplateTitle.text( self.templateTool.targetTemplate.title );
			self.templateTool.updateTargetTemplate();
		} ).fail( function () {
			// Adaptation failed.
			self.markUndaptable();
			self.buildActionsMenu( self.actions );
		} );
	};

	/**
	 * Skip the template and use empty section
	 */
	TemplateControlCard.prototype.skip = function () {
		this.templateTool.markUndaptable();
	};

	/**
	 * Mark the template as Unadaptable template
	 */
	TemplateControlCard.prototype.markUndaptable = function () {
		this.card.$targetTemplateTitle.text(
			mw.msg( 'cx-template-not-available', $.uls.data.getAutonym( mw.cx.targetLanguage ) ) );
		this.templateTool.markUndaptable();
	};

	/**
	 * Adapt a template using template mapping
	 */
	TemplateControlCard.prototype.useSource = function () {
		this.templateTool.replaceTargetTemplate( this.sourceTemplate.$template, 'keep-original' );
	};

	/**
	 * Stop the card.
	 */
	TemplateControlCard.prototype.stop = function () {
		this.card.$container.remove();
		mw.hook( 'mw.cx.tools.shown' ).fire( true );
	};

	TemplateControlCard.prototype.onShow = function () {
		mw.hook( 'mw.cx.tools.shown' ).fire( true );
	};

	TemplateControlCard.prototype.getTriggerEvents = function () {
		return [
			'mw.cx.translation.template.focus',
			'mw.cx.translation.focus'
		];
	};

	mw.cx.tools.templatecard = TemplateControlCard;
}( jQuery, mediaWiki ) );
