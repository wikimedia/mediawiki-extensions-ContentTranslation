'use strict';

function debounce( func, wait, immediate ) {
	let timeout;

	const doDebounce = ( ...args ) => {
		const context = this;

		const later = () => {
			timeout = null;

			if ( !immediate ) {
				func.apply( context, args );
			}
		};

		if ( immediate && !timeout ) {
			func.apply( context, args );
		}

		if ( !timeout || wait ) {
			clearTimeout( timeout );
			timeout = setTimeout( later, wait );
		}
	};

	doDebounce.cancel = () => clearTimeout( timeout );

	return doDebounce;
}

module.exports = debounce;
