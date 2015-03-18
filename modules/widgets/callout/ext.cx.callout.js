/**
 * A Callout dialog widget with jQuery.
 * Copyright (c) 2015 Santhosh Thottingal <santhosh.thottingal@gmail.com>
 * released under the MIT license MIT License.
 *
 * Borrows positioning concepts from Tipsy by Jason Frame
 */
( function ( $ ) {
	'use strict';

	function maybeCall( thing, ctx ) {
		return ( typeof thing === 'function' ) ? ( thing.call( ctx ) ) : thing;
	}

	function Callout( element, options ) {
		this.$element = $( element );
		this.options = $.extend( {}, $.fn.callout.defaults, options );
		this.shown = false;
		this.listen();
	}

	Callout.prototype.show = function () {
		var $dialog, content;

		content = maybeCall( this.options.content );
		if ( !content ) {
			return;
		}

		$dialog = this.dialog();
		$dialog.find( '.cx-callout-content' ).empty().append( content );
		$dialog[ 0 ].className = 'cx-callout'; // reset classname in case of dynamic gravity
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

	Callout.prototype.position = function () {
		var $dialog, pos, gravity, actualWidth, actualHeight, position;

		pos = $.extend( {}, this.$element.offset(), {
			width: this.$element[ 0 ].offsetWidth,
			height: this.$element[ 0 ].offsetHeight
		} );

		$dialog = this.dialog();
		gravity = ( typeof this.options.gravity === 'function' ) ?
			this.options.gravity.call( this.$element[ 0 ] ) :
			this.options.gravity;

		// Attach css classes before checking height/width so they
		// can be applied.
		$dialog.addClass( 'cx-callout-' + gravity );

		actualWidth = $dialog[ 0 ].offsetWidth;
		actualHeight = $dialog[ 0 ].offsetHeight;
		switch ( gravity.charAt( 0 ) ) {
		case 'n':
			position = {
				top: pos.top + pos.height + this.options.offset,
				left: pos.left + pos.width / 2 - actualWidth / 2
			};
			break;
		case 's':
			position = {
				top: pos.top - actualHeight - this.options.offset,
				left: pos.left + pos.width / 2 - actualWidth / 2
			};
			break;
		case 'e':
			position = {
				top: pos.top + pos.height / 2 - actualHeight / 2,
				left: pos.left - actualWidth - this.options.offset
			};
			break;
		case 'w':
			position = {
				top: pos.top + pos.height / 2 - actualHeight / 2,
				left: pos.left + pos.width + this.options.offset
			};
			break;
		}

		if ( gravity.length === 2 ) {
			if ( gravity.charAt( 1 ) === 'w' ) {
				if ( this.options.center ) {
					position.left = pos.left + pos.width / 2 - 15;
				} else {
					position.left = pos.left;
				}
			} else {
				if ( this.options.center ) {
					position.left = pos.left + pos.width / 2 - actualWidth + 15;
				} else {
					position.left = pos.left + pos.width;
				}
			}
		}
		$dialog.css( position );
	};

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

	Callout.prototype.dialog = function () {
		if ( !this.$dialog ) {
			this.$dialog = $( '<div class="cx-callout"></div>' ).html( '</div><div class="cx-callout-content"></div>' );
		}
		return this.$dialog;
	};

	Callout.prototype.validate = function () {
		if ( !this.$element[ 0 ].parentNode ) {
			this.hide();
			this.$element = null;
			this.options = null;
		}
	};

	$.fn.callout = function ( options ) {
		if ( options === true ) {
			return this.data( 'callout' );
		} else if ( typeof options === 'string' ) {
			var callout = this.data( 'callout' );
			if ( callout ) {
				callout[ options ]();
			}
			return this;
		}

		function get( ele ) {
			var callout = $.data( ele, 'callout' );
			if ( !callout ) {
				callout = new Callout( ele, $.fn.callout.elementOptions( ele, options ) );
				$.data( ele, 'callout', callout );
			}
			return callout;
		}

		this.each( function () {
			get( this );
		} );

		return this;
	};

	$.fn.callout.defaults = {
		gravity: 'n',
		center: true,
		offset: 10,
		opacity: 1.0,
		trigger: 'hover'
	};

	// Overwrite this method to provide options on a per-element basis.
	// For example, you could store the gravity in a 'cx-callout-gravity' attribute:
	// return $.extend({}, options, {gravity: $(ele).attr('cx-callout-gravity') || 'n' });
	// (remember - do not modify 'options' in place!)
	$.fn.callout.elementOptions = function ( ele, options ) {
		return $.metadata ? $.extend( {}, options, $( ele ).metadata() ) : options;
	};

	$.fn.callout.autoNS = function () {
		return $( this ).offset().top > ( $( document ).scrollTop() + $( window ).height() / 2 ) ? 's' : 'n';
	};

	$.fn.callout.autoNEW = function () {
		return $( this ).offset().left > ( $( document ).scrollLeft() + $( window ).width() / 2 ) ? 'ne' : 'nw';
	};

	$.fn.callout.autoWE = function () {
		return $( this ).offset().left > ( $( document ).scrollLeft() + $( window ).width() / 2 ) ? 'e' : 'w';
	};

	/**
	 * yields a closure of the supplied parameters, producing a function that takes
	 * no arguments and is suitable for use as an autogravity function like so:
	 *
	 * @param margin (int) - distance from the viewable region edge that an
	 *        element should be before setting its tooltip's gravity to be away
	 *        from that edge.
	 * @param prefer (string, e.g. 'n', 'sw', 'w') - the direction to prefer
	 *        if there are no viewable region edges effecting the tooltip's
	 *        gravity. It will try to vary from this minimally, for example,
	 *        if 'sw' is preferred and an element is near the right viewable
	 *        region edge, but not the top edge, it will set the gravity for
	 *        that element's tooltip to be 'se', preserving the southern
	 *        component.
	 */
	$.fn.callout.autoBounds = function ( margin, prefer ) {
		return function () {
			var dir = {
					ns: prefer[ 0 ],
					ew: ( prefer.length > 1 ? prefer[ 1 ] : false )
				},
				boundTop = $( document ).scrollTop() + margin,
				boundLeft = $( document ).scrollLeft() + margin,
				$this = $( this );

			if ( $this.offset().top < boundTop ) {
				dir.ns = 'n';
			}
			if ( $this.offset().left < boundLeft ) {
				dir.ew = 'w';
			}
			if ( $( window ).width() + $( document ).scrollLeft() - $this.offset().left < margin ) {
				dir.ew = 'e';
			}
			if ( $( window ).height() + $( document ).scrollTop() - $this.offset().top < margin ) {
				dir.ns = 's';
			}

			return dir.ns + ( dir.ew ? dir.ew : '' );
		};
	};

}( jQuery ) );
