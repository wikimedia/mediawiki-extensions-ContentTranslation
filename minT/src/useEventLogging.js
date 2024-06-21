'use strict';

const useEventLogging = () => {
	const streamName = 'mediawiki.product_metrics.mint_for_readers';
	const schemaId = '/analytics/product_metrics/web/base/1.2.0';

	/**
	 * @param {string|null} actionSubtype
	 * @param {string|null} actionSource
	 * @param {string|null|undefined} actionContext
	 */
	const logClickEvent = ( actionSubtype, actionSource, actionContext ) => {
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
		mw.eventLog.submitClick( streamName, interactionData );
	};

	/**
	 * @param {string} action
	 * @param {string|null|undefined} actionSubtype
	 * @param {string|null|undefined} actionSource
	 * @param {string|null|undefined} actionContext
	 */
	const logEvent = ( action, actionSubtype, actionSource, actionContext ) => {
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
		mw.eventLog.submitInteraction( streamName, schemaId, action, interactionData );
	};

	return { logClickEvent, logEvent };
};

module.exports = useEventLogging;
