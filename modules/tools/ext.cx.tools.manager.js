/**
 * ContentTranslation Tools Manager
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

/**
 * A tool can register as a CX tool card with this manager.
 * Example:
 * <code>
 * 	mw.cx.tools.dictionary = DictionaryCard;
 * </code>
 * In this example dictionary is a unique identifier for the tool card
 * DictionaryCard is a class that implement the tool card
 * This class should have the following methods defined.
 * 1. getCard() - Return the jQuery object representing the DOM of the card
 * 2. start(data) - Takes the data given by events and start presenting the card
 * 3. stop()- Destroys the DOM of the card. End of the card instance.
 *
 * The tool need to fire an event mw.cx.tool.shown once the card is shown
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
		var index, cxToolManager = this;

		this.$loadingIndicator = $( '.cx-tools__loading-indicator' );
		$.each( mw.cx.tools, function ( toolName, tool ) {
			var events = tool.prototype.getTriggerEvents();
			for ( index = 0; index < events.length; index++ ) {
				if ( !cxToolManager.eventRegistry[ events[ index ] ] ) {
					// initialize the array
					cxToolManager.eventRegistry[ events[ index ] ] = [];
				}
				cxToolManager.eventRegistry[ events[ index ] ].push( toolName );
				if ( toolName === cxToolManager.options.defaultTool ) {
					// show the default tool
					cxToolManager.showCard( toolName );
				}
			}
		} );
	};

	/**
	 * Dispatch the events to appropriate cards
	 * @param {string} eventName event name
	 * @param {Array|Object|string} The data passed by the event.
	 */
	CXToolManager.prototype.dispatch = function ( eventName ) {
		var index, tools,
			data = Array.prototype.slice.apply( arguments );

		mw.log( '[CX] event:' + eventName + ' , data:' + data );
		tools = this.eventRegistry[ eventName ];
		data = data.splice( 1 );
		for ( index in tools ) {
			// Call render function on the current setting module.
			this.showCard( tools[ index ], data );
		}
	};

	/**
	 * Listen for all kind of events that tools registered and
	 * dispatch them
	 */
	CXToolManager.prototype.listen = function () {
		var event, cxToolManager = this;

		for ( event in this.eventRegistry ) {
			mw.hook( event ).add(
				$.proxy( this.dispatch, this, event )
			);
		}

		mw.hook( 'mw.cx.tools.shown' ).add( function () {
			cxToolManager.$loadingIndicator.hide();
		} );
		// Check if there are any cards shown in regular time intervals
		// If not show the default tool
		window.setInterval( function () {
			if ( !cxToolManager.$container.find( '.card' ).length ) {
				cxToolManager.showCard( cxToolManager.options.defaultTool );
			}
		}, 5000 );
	};

	/**
	 * Show a tool card
	 * @param {toolName} toolName tool name
	 * @param {Array|Object|string} The data passed by the event.
	 */
	CXToolManager.prototype.showCard = function ( toolName, data ) {
		var tool;

		this.hideCard( toolName );
		if ( toolName !== this.options.defaultTool ) {
			this.hideCard( this.options.defaultTool );
		}
		tool = new mw.cx.tools[ toolName ]();
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
	 * Hide unrelated cards
	 * Find out cards not having trigger events intersecton and hide them.
	 * @param {string} currentToolName current tool name
	 */
	CXToolManager.prototype.hideUnrelatedCards = function ( currentToolName ) {
		var currentToolEvents, toolEvents, toolName;
		if ( this.tools[ currentToolName ] ) {
			currentToolEvents = this.tools[ currentToolName ].getTriggerEvents();
		}
		for ( toolName in this.tools ) {
			if ( toolName === currentToolName ) {
				continue;
			}
			toolEvents = this.tools[ toolName ].getTriggerEvents();
			if ( intersection( currentToolEvents, toolEvents ).length === 0 ) {
				this.hideCard( toolName );
			}
		}
	};

	/**
	 * Hide a card
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
