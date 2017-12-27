/*!
 * Content Translation template adaption card
 *
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

	TemplateControlCard.prototype.buildActionsMenu = function ( actions, selectedId ) {
		var i,
			self = this;

		this.card.$actionsMenu = $( '<ul>' )
			.addClass( 'card__template-options-menu' )
			.hide();

		if ( !selectedId ) {
			selectedId = actions[ 0 ];
		}
		for ( i = 0; i < actions.length; i++ ) {
			this.card.$actionsMenu.append(
				this.getActionMenuItem( actions[ i ], actions[ i ] === selectedId )
			);
		}

		// Set the main label
		this.card.$actionSelectorTrigger
			.text( this.getActionMenuItemLabel( selectedId ) )
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
		this.setSelectedAction( actionId );

		switch ( actionId ) {
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
	 * @param {boolean} selected Selected or not
	 * @return {jQuery}
	 */
	TemplateControlCard.prototype.getActionMenuItem = function ( actionId, selected ) {
		var $label,
			selectedClass = '';

		$label = $( '<span>' )
			.text( this.getActionMenuItemLabel( actionId ) );

		// Mark the selected item
		if ( selected ) {
			selectedClass = 'selected';
		}

		return $( '<li>' )
			.addClass( [
				'card__template-action-item', selectedClass, actionId
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
		// Do the default action
		if ( !storedState ) {
			this.onActionSelect( 'adapt' );
		}

		this.sourceTemplate = this.templateTool.sourceTemplate;
		this.targetTemplate = this.templateTool.targetTemplate;
		this.card.$sourceTemplateTitle.text( this.sourceTemplate.title );

		// Show the appropriate menu with correct values selected
		if ( storedState === 'unadaptable' || !this.templateTool.targetTemplate.title ) {
			this.markUndaptable();
		} else if ( storedState === 'keep-original' ) {
			this.markKeepOriginal();
		} else if ( storedState === 'adapt' ) {
			this.markAdaptable();
		} else if ( storedState === 'skip' ) {
			this.markSkipped();
		} else {
			// No stored state. Fresh adaptation.
			this.buildActionsMenu( this.actions );
		}

		this.card.$container.show();
		this.onShow();
	};

	/**
	 * Adapt the template for the target language.
	 */
	TemplateControlCard.prototype.adapt = function () {
		var self = this;

		this.templateTool.adapt().then( function () {
			self.templateTool.updateTargetTemplate();
			self.markAdaptable();
		} ).fail( function () {
			// Adaptation failed.
			self.templateTool.markUndaptable();
			self.markUndaptable();
		} );
	};

	/**
	 * Adapt a template using template mapping
	 */
	TemplateControlCard.prototype.useSource = function () {
		this.templateTool.replaceTargetTemplate( this.sourceTemplate.$template, 'keep-original' );
		this.buildActionsMenu( this.actions, 'keep-original' );
	};

	/**
	 * Skip the template and use empty section
	 */
	TemplateControlCard.prototype.skip = function () {
		this.templateTool.skip();
		this.markSkipped();
	};

	/**
	 * Mark the template as adapted
	 */
	TemplateControlCard.prototype.markAdaptable = function () {
		// Adaptation passed.
		this.card.$targetTemplateTitle.text( this.templateTool.targetTemplate.title );
		this.buildActionsMenu( this.actions, 'adapt' );
	};

	/**
	 * Mark the template as adapted
	 */
	TemplateControlCard.prototype.markSkipped = function () {
		this.buildActionsMenu( this.actions, 'skip' );
	};

	/**
	 * Mark the template as adapted
	 */
	TemplateControlCard.prototype.markKeepOriginal = function () {
		this.card.$targetTemplateTitle.text( this.templateTool.targetTemplate.title );
		this.buildActionsMenu( this.actions, 'keep-original' );
	};

	/**
	 * Mark the template as Unadaptable template
	 */
	TemplateControlCard.prototype.markUndaptable = function () {
		var actions = this.actions;

		if ( !this.templateTool.targetTemplate.title ) {
			// Hide the menu item for 'Use equivalent'
			actions = this.actions.slice( 1 );
			this.card.$targetTemplateTitle.hide().after( $( '<div>' )
				.addClass( 'card__template-target-missing' )
				.text( mw.msg( 'cx-template-not-available', $.uls.data.getAutonym( mw.cx.targetLanguage ) ) )
			);
		}

		this.buildActionsMenu( actions );
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
