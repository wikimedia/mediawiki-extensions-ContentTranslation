/**
 * A Callout dialog widget with jQuery.
 * Copyright (c) 2015 Santhosh Thottingal <santhosh.thottingal@gmail.com>
 * released under the MIT license MIT License.
 *
 * Borrows positioning concepts from Tipsy by Jason Frame
 */
( function ( $ ) {
	'use strict';

	/**
	 * Depending on type, return function call result or just the thing.
	 */
	function maybeCall( thing, context ) {
		return $.isFunction( thing ) ? ( thing.call( context ) ) : thing;
	}

	/**
	 * Callout class
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
		$dialog[ 0 ].className = 'cx-callout'; // reset classname in case of dynamic type
		if ( this.options.classes ) {
			$dialog.addClass( this.options.classes );
		}
		$dialog.remove().css( {
			top: 0,
			left: 0,
			visibility: 'hidden',
			display: 'block'
		} ).appendTo( document.body );

		this.position();

		if ( this.options.fade ) {
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
		direction = $.isFunction( this.options.direction ) ? this.options.direction.call( this.$element[ 0 ] ) : this.options.direction;
		// Attach css classes before checking height/width so they
		// can be applied.
		$dialog.removeClass().addClass( 'cx-callout cx-callout-' + direction );

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
				top: pos.top,
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
				top: pos.top + pos.height - actualHeight,
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
				top: pos.top + pos.height - actualHeight,
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
				top: pos.top,
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
				self.show();
			} );
			this.$element.on( 'mouseleave', function () {
				self.hide();
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

		$( window ).resize( function () {
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
	 */
	$.fn.callout = function ( options ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'callout' );

			if ( !data ) {
				$this.data( 'callout', ( data = new Callout( this, options ) ) );
			}

			if ( typeof options === 'string' ) {
				data[ options ].call( $this );
			}
		} );
	};

	/**
	 * Return a closure that can calculate a good direction based on the arguments.
	 *
	 * @param {string} prefer - the direction to prefer.  if there are no viewable region
	 *     edges effecting the callouts's direction.  e.g. '3', '6', 9'
	 * @return {function}
	 */
	$.fn.callout.autoDirection = function ( prefer ) {
		return function () {
			var direction = prefer,
				leftFlips, rightFlips, topFlips, bottomFlips,
				boundTop = $( document ).scrollTop() + $( window ).height() / 2,
				boundLeft = $( document ).scrollLeft() + $( window ).width() / 2,
				$this = $( this );

			leftFlips = {
				'1': '11',
				'2': '10',
				'3': '9',
				'4': '8',
				'5': '7'
			};
			rightFlips = {
				'11': '1',
				'10': '2',
				'9': '3',
				'8': '4',
				'7': '5'
			};
			topFlips = {
				'3': '2',
				'4': '2',
				'5': '1',
				'6': '0',
				'7': '11',
				'8': '10',
				'9': '10'
			};
			bottomFlips = {
				'0': '6',
				'12': '6',
				'1': '5',
				'2': '4',
				'3': '4',
				'11': '7',
				'10': '8',
				'9': '8'
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
		// direction of callout. Imagine the callout is along with the direction of a
		// clock handle with the tip as tip of handle.
		// Possible directions are 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11, 12.
		// It is also possible to give a preferred direction using $.fn.callout.autoDirection
		// Example: $.fn.callout.autoDirection( 100, '0' ),
		// Auto direction will change direction if screen space is not available.
		direction: $.fn.callout.autoDirection( '0' ),
		// Offset of dialog from the trigger
		offset: 10,
		opacity: 1.0,
		trigger: 'hover'
	};

}( jQuery ) );
