/*!
 * ContentTranslation Tools Manager
 *
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

/*!
 * A tool can register as a CX tool card with this manager.
 * Example:
 * <code>
 * mw.cx.tools.dictionary = DictionaryCard;
 * </code>
 * In this example dictionary is a unique identifier for the tool card
 * DictionaryCard is a class that implements the tool card
 * This class should have the following methods defined:
 * 1. getCard() - Return the jQuery object representing the DOM of the card.
 * 2. start( data ) - Takes the data given by events and start presenting the card.
 * 3. stop()- Destroys the DOM of the card. End of the card instance.
 *
 * The tool needs to fire the event mw.cx.tool.shown once the card is shown.
 *
 * Additionally, if the card need to stay in tools till a condition is met, mark
 * the sticky property of tool object true. See MTAbuseCard for example.
 */
( function ( $, mw ) {
	'use strict';

	/**
	 * @class
	 */
	function CXToolManager( container, options ) {
		this.options = $.extend( {}, $.fn.cxtoolmanager.defaults, options );

		// The tools container
		this.$container = $( container );

		// Collection of all tool instances that are currently shown
		this.tools = {};

		// Collection of all events that the registered tools listen for.
		this.eventRegistry = {};
		this.init();
		this.listen();
	}

	/**
	 * Initialize
	 */
	CXToolManager.prototype.init = function () {
		var index,
			cxToolManager = this;

		this.$loadingIndicator = $( '.cx-tools__loading-indicator' );
		$.each( mw.cx.tools, function ( toolName, tool ) {
			var events = tool.prototype.getTriggerEvents();

			for ( index = 0; index < events.length; index++ ) {
				if ( !cxToolManager.eventRegistry[ events[ index ] ] ) {
					cxToolManager.eventRegistry[ events[ index ] ] = [];
				}

				cxToolManager.eventRegistry[ events[ index ] ].push( toolName );

				if ( toolName === cxToolManager.options.defaultTool ) {
					// Show the default tool
					cxToolManager.showCard( toolName );
				}
			}
		} );
	};

	/**
	 * Dispatch the events to appropriate cards
	 *
	 * @param {string} eventName event name
	 */
	CXToolManager.prototype.dispatch = function ( eventName ) {
		var index, tools,
			data = Array.prototype.slice.apply( arguments );

		mw.log( '[CX] event:' + eventName + ' , data:' + data );
		tools = this.eventRegistry[ eventName ];
		data = data.splice( 1 );

		for ( index in tools ) {
			// Call the render function on the current setting module
			try {
				this.showCard( tools[ index ], data );
			} catch ( e ) {
				// Unhandled errors will unbind the hook handler. Avoid it.
				mw.log( e.stack );
				this.hideCard( tools[ index ] );
			}
		}
	};

	/**
	 * Listen for all kinds of events that the tools registered and dispatch them.
	 */
	CXToolManager.prototype.listen = function () {
		var event,
			cxToolManager = this;

		for ( event in this.eventRegistry ) {
			mw.hook( event ).add(
				$.proxy( this.dispatch, this, event )
			);
		}

		mw.hook( 'mw.cx.tools.shown' ).add( function () {
			cxToolManager.$loadingIndicator.hide();
		} );

		// Check if there are any cards shown in regular time intervals.
		// If not, show the default tool.
		window.setInterval( function () {
			if ( !cxToolManager.$container.find( '.card' ).not( '.cx-card--fixed' ).length ) {
				cxToolManager.showCard( cxToolManager.options.defaultTool );
			}
		}, 5000 );
	};

	/**
	 * Show a tool card.
	 *
	 * @param {toolName} toolName The tool name.
	 * @param {Array|Object|string} data The data passed by the event.
	 */
	CXToolManager.prototype.showCard = function ( toolName, data ) {
		var tool;

		this.hideCard( toolName );
		if ( toolName !== this.options.defaultTool ) {
			this.hideCard( this.options.defaultTool );
		}

		// TODO: Refactor to avoid global access
		tool = new mw.cx.tools[ toolName ]( mw.cx.siteMapper );

		this.$container.append( tool.getCard() );
		if ( typeof data === 'string' ) {
			data = new Array( data );
		}

		this.$loadingIndicator.show();
		tool.start.apply( tool, data );
		this.tools[ toolName ] = tool;
		this.hideUnrelatedCards( toolName );
	};

	/**
	 * Find intersection of two arrays
	 *
	 * @param {Array} array1
	 * @param {Array} array2
	 * @return {Array} intersection array
	 */
	function intersection( array1, array2 ) {
		return array1.filter( function ( n ) {
			return array2.indexOf( n ) !== -1;
		} );
	}

	/**
	 * Hide unrelated cards.
	 * Find cards not having trigger events intersecton and hide them.
	 *
	 * @param {string} currentToolName current tool name
	 */
	CXToolManager.prototype.hideUnrelatedCards = function ( currentToolName ) {
		var currentToolEvents, toolEvents, tool, toolName;

		if ( this.tools[ currentToolName ] ) {
			currentToolEvents = this.tools[ currentToolName ].getTriggerEvents();
		}

		for ( toolName in this.tools ) {
			tool = this.tools[ toolName ];
			if ( toolName === currentToolName ) {
				continue;
			}

			if ( tool.sticky ) {
				// If the card is sticky, do not hide till it is done. Example: MTAbuse card.
				continue;
			}

			toolEvents = tool.getTriggerEvents();
			if ( intersection( currentToolEvents, toolEvents ).length === 0 ) {
				this.hideCard( toolName );
			}
		}
	};

	/**
	 * Hide a card.
	 *
	 * @param {string} toolName
	 */
	CXToolManager.prototype.hideCard = function ( toolName ) {
		if ( this.tools[ toolName ] ) {
			this.tools[ toolName ].stop();
			delete this.tools[ toolName ];
		}
	};

	/**
	 * $.fn.cxtoolmanager jQuery plugin
	 */
	$.fn.cxtoolmanager = function ( option ) {
		return this.each( function () {
			var data,
				$this = $( this ),
				options = typeof option === 'object' && option;

			$this.data( 'cxtoolmanager', ( data = new CXToolManager( this, options ) ) );

			if ( typeof option === 'string' ) {
				data[ option ]();
			}
		} );
	};

	$.fn.cxtoolmanager.defaults = {
		template: $( '<div>' ).addClass( 'card' ),
		defaultTool: 'instructions'
	};
}( jQuery, mediaWiki ) );
