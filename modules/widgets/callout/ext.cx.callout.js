/**
 * A Callout dialog widget with jQuery.
 * Copyright (c) 2015 Santhosh Thottingal <santhosh.thottingal@gmail.com>
 * released under the MIT license.
 */
( function () {
	'use strict';

	/**
	 * Depending on type, return function call result or just the value.
	 *
	 * @param {Mixed} funcOrVal
	 * @param {Object} context
	 * @return {Mixed} Function call result or value.
	 */
	function maybeCall( funcOrVal, context ) {
		return typeof funcOrVal === 'function' ? funcOrVal.call( context ) : funcOrVal;
	}

	/**
	 * Callout class
	 *
	 * @param {HTMLElement} element The trigger element to which callout attaches.
	 * @param {Object} options Options object
	 * @param {string|Function} options.direction Direction of callout.
	 *     Imagine the callout is along with the direction of a clock handle with the tip at top of
	 *     the handle.
	 *         11  12  1
	 *         ________
	 *     10 |        | 2
	 *     9  |    .   | 3
	 *     8  |________| 4
	 *         7  6   5
	 *     Possible directions are 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12.
	 *     Direction 12 is same as position 0.
	 *     It is also possible to give a preferred direction using $.fn.callout.autoDirection
	 *     Example: $.fn.callout.autoDirection( '0' )
	 *     This will make the callout below the trigger with its tip pointing upwards
	 *            *
	 *     ______/\______
	 *     |             |
	 *     _______________
	 *     This will make the callout left of the trigger with its tip pointing 3'O clock direction
	 *     Example: $.fn.callout.autoDirection( '0' )
	 *      ______
	 *      |     |
	 *      |      > *
	 *      |_____|
	 *     Auto direction will change direction if screen space is not available.
	 * @param {number} options.offset Offset of the dialog from the trigger
	 * @param {number} options.opacity Opacity of callout
	 * @param {string} options.trigger Trigger: available options: hover, click,
	 *     and auto(show automatically without any trigger).
	 *     Any other value will assume the client of this libary will take care of show/hide
	 */
	function Callout( element, options ) {
		this.$element = $( element );
		this.options = $.extend( {}, $.fn.callout.defaults, options );
		this.shown = false;
		this.listen();
	}

	/**
	 * Show the callout
	 */
	Callout.prototype.show = function () {
		var $dialog, content;

		content = maybeCall( this.options.content );
		if ( !content ) {
			return;
		}

		$dialog = this.dialog();
		$dialog.find( '.cx-callout-content' ).empty().append( content );
		$dialog.remove().css( {
			top: 0,
			left: 0,
			visibility: 'hidden',
			display: 'block'
		} ).appendTo( document.body );

		this.position();

		if ( this.options.fade ) {
			// FIXME: Use CSS transition
			// eslint-disable-next-line no-jquery/no-animate
			$dialog.stop().css( {
				opacity: 0,
				display: 'block',
				visibility: 'visible'
			} ).animate( {
				opacity: this.options.opacity
			}, 100 );
		} else {
			$dialog.css( {
				visibility: 'visible',
				opacity: this.options.opacity
			} );
		}
		this.shown = true;
	};

	/**
	 * Position the callout
	 */
	Callout.prototype.position = function () {
		var $dialog, pos, direction, actualWidth, actualHeight, position;

		pos = $.extend( {}, this.$element.offset(), {
			width: this.$element[ 0 ].offsetWidth,
			height: this.$element[ 0 ].offsetHeight
		} );

		$dialog = this.dialog();
		direction = maybeCall( this.options.direction, this.$element[ 0 ] );
		// Attach css classes before checking height/width so they
		// can be applied.
		// The following classes are used here:
		// * cx-callout-0
		// * cx-callout-1
		// * ...
		// * cx-callout-12
		$dialog.removeClass().addClass( 'cx-callout cx-callout-' + direction );
		if ( this.options.classes ) {
			// eslint-disable-next-line mediawiki/class-doc
			$dialog.addClass( this.options.classes );
		}
		actualWidth = $dialog[ 0 ].offsetWidth;
		actualHeight = $dialog[ 0 ].offsetHeight;
		switch ( direction ) {
			case '0':
			case '12':
				position = {
					top: pos.top + pos.height + this.options.offset,
					left: pos.left + pos.width / 2 - actualWidth / 2
				};
				break;
			case '1':
				position = {
					top: pos.top + pos.height + this.options.offset,
					left: pos.left + pos.width - actualWidth
				};
				break;
			case '11':
				position = {
					top: pos.top + pos.height + this.options.offset,
					left: pos.left
				};
				break;
			case '2':
				position = {
					top: pos.top - pos.height / 2,
					left: pos.left - actualWidth - this.options.offset
				};
				break;
			case '3':
				position = {
					top: pos.top + pos.height / 2 - actualHeight / 2,
					left: pos.left - actualWidth - this.options.offset
				};
				break;
			case '4':
				position = {
					top: pos.top + pos.height - actualHeight + this.options.offset,
					left: pos.left - actualWidth - this.options.offset
				};
				break;
			case '5':
				position = {
					top: pos.top - actualHeight - this.options.offset,
					left: pos.left + pos.width - actualWidth
				};
				break;
			case '6':
				position = {
					top: pos.top - actualHeight - this.options.offset,
					left: pos.left + pos.width / 2 - actualWidth / 2
				};
				break;
			case '7':
				position = {
					top: pos.top - actualHeight - this.options.offset,
					left: pos.left
				};
				break;
			case '8':
				position = {
					top: pos.top + pos.height - actualHeight + this.options.offset,
					left: pos.left + pos.width + this.options.offset
				};
				break;
			case '9':
				position = {
					top: pos.top + pos.height / 2 - actualHeight / 2,
					left: pos.left + pos.width + this.options.offset
				};
				break;
			case '10':
				position = {
					top: pos.top - pos.height / 2,
					left: pos.left + pos.width + this.options.offset
				};
				break;
		}

		$dialog.css( position );
	};

	/**
	 * Listen for event
	 */
	Callout.prototype.listen = function () {
		var timer, self = this;

		if ( this.options.trigger === 'auto' ) {
			self.show();
		}

		if ( this.options.trigger === 'hover' ) {
			this.$element.on( 'mouseenter', function () {
				// Hide all other cx-callouts
				$( '.cx-callout' ).hide();
				self.show();
				// On mouse enter of siblings, hide.
				self.$element.siblings().one( 'mouseenter', self.hide.bind( self ) );
				self.$dialog.one( 'mouseleave', self.hide.bind( self ) );
				$( document ).one( 'click', self.hide.bind( self ) );
			} );
		}
		if ( this.options.trigger === 'click' ) {
			this.$element.on( 'click', function () {
				if ( self.shown ) {
					self.hide();
				} else {
					self.show();
				}
			} );
		}

		$( window ).on( 'resize', function () {
			clearTimeout( timer );
			timer = setTimeout( function () {
				self.position();
			}, 200 );
		} );
	};

	/**
	 * Hide the callout
	 */
	Callout.prototype.hide = function () {
		if ( this.options.fade ) {
			this.dialog().stop().fadeOut( 100, function () {
				$( this ).remove();
			} );
		} else {
			this.dialog().remove();
		}
		this.shown = false;
	};

	/**
	 * Construct and return the dialog
	 *
	 * @return {jQuery}
	 */
	Callout.prototype.dialog = function () {
		if ( !this.$dialog ) {
			this.$dialog = $( '<div>' ).addClass( 'cx-callout' )
				.append( $( '<div>' ).addClass( 'cx-callout-content' ) );
		}
		return this.$dialog;
	};

	/**
	 * The callout plugin
	 *
	 * @param {Object} options
	 * @return {jQuery}
	 */
	$.fn.callout = function ( options ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'callout' );

			if ( !data ) {
				data = new Callout( this, options );
				$this.data( 'callout', data );
			}

			if ( typeof options === 'string' ) {
				data[ options ]();
			}
		} );
	};

	/**
	 * Return a closure that can calculate a good direction based on the arguments.
	 *
	 * @param {string} prefer - the direction to prefer. if there are no viewable region
	 *     edges effecting the callouts's direction.  e.g. '3', '6', '9'
	 * @return {Function}
	 */
	$.fn.callout.autoDirection = function ( prefer ) {
		return function () {
			var direction = prefer,
				leftFlips, rightFlips, topFlips, bottomFlips,
				boundTop = window.pageYOffset + document.documentElement.clientHeight / 2,
				boundLeft = window.pageXOffset + document.documentElement.clientWidth / 2,
				$this = $( this );

			leftFlips = {
				1: '11',
				2: '10',
				3: '9',
				4: '8',
				5: '7'
			};
			rightFlips = {
				11: '1',
				10: '2',
				9: '3',
				8: '4',
				7: '5'
			};
			topFlips = {
				3: '2',
				4: '2',
				5: '1',
				6: '0',
				7: '11',
				8: '10',
				9: '10'
			};
			bottomFlips = {
				0: '6',
				12: '6',
				1: '5',
				2: '4',
				3: '4',
				11: '7',
				10: '8',
				9: '8'
			};

			if ( $this.offset().top < boundTop ) {
				direction = topFlips[ direction ] || direction;
			}
			if ( $this.offset().top > boundTop ) {
				direction = bottomFlips[ direction ] || direction;
			}
			if ( $( this ).offset().left < boundLeft ) {
				direction = leftFlips[ direction ] || direction;
			}
			if ( $( this ).offset().left > boundLeft ) {
				direction = rightFlips[ direction ] || direction;
			}
			return direction;
		};
	};

	$.fn.callout.defaults = {
		direction: $.fn.callout.autoDirection( '0' ),
		offset: 10,
		opacity: 1.0,
		trigger: 'hover'
	};

}() );
