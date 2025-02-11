'use strict';

const useEventLogging = () => {
	const streamName = 'mediawiki.product_metrics.translation_mint_for_readers';
	const schemaId = '/analytics/product_metrics/web/translation/1.0.0';

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
		mw.eventLog.submitInteraction( streamName, schemaId, action, interactionData );
	};

	return { logEvent };
};

module.exports = useEventLogging;
