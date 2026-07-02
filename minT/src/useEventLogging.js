'use strict';

// Machine-readable name of the instrument registered in Test Kitchen.
// The instrument encapsulates the destination stream and the event schema
// so neither needs to be specified at the call site.
const INSTRUMENT_NAME = 'mint-reader-actions';

// Test Kitchen is a soft dependency: it is not guaranteed to be installed, so
// wait for its module instead of declaring a ResourceLoader dependency. The
// promise fulfills with a single module-scope instrument shared by all
// useEventLogging() call sites, keeping one funnel_event_sequence_position
// counter for the whole session. Events logged before the SDK is ready are
// queued on the promise; where Test Kitchen is not installed the promise
// rejects and queued events are silently dropped.
const instrumentPromise = mw.loader.using( 'ext.testKitchen' ).then(
	() => mw.testKitchen.getInstrument( INSTRUMENT_NAME )
);

const useEventLogging = () => {
	/**
	 * @param {string} action
	 * @param {string|null|undefined} actionSubtype
	 * @param {string|null|undefined} actionSource
	 * @param {string|null|undefined} actionContext
	 * @param {{
	 *  source_id,
	 *  source_title,
	 *  source_type,
	 *  source_language,
	 *  target_id,
	 *  target_title,
	 *  target_language,
	 *  translatable_count,
	 *  translated_count,
	 *  modification_rate,
	 *  is_mint_available
	 * }} translationContext
	 */
	const logEvent = (
		action,
		actionSubtype,
		actionSource,
		actionContext = null,
		translationContext = {}
	) => {
		const interactionData = {};
		if ( actionSubtype ) {
			// eslint-disable-next-line camelcase
			interactionData.action_subtype = actionSubtype;
		}

		if ( actionSource ) {
			// eslint-disable-next-line camelcase
			interactionData.action_source = actionSource;
		}

		if ( actionContext ) {
			// eslint-disable-next-line camelcase
			interactionData.action_context = actionContext;
		}

		interactionData.translation = translationContext;

		// Instrument#send() is a no-op when the user is not in sample, so no
		// isInSample() gate is needed here. The callback only runs on
		// fulfillment, where the instrument is always present.
		instrumentPromise.then( ( instrument ) => instrument.send( action, interactionData ) );
	};

	return { logEvent };
};

module.exports = useEventLogging;
