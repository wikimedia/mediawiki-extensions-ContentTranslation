'use strict';

const PUBLISHING_TARGETS = {
	NEW_SECTION: 'NEW_SECTION',
	EXPAND: 'EXPAND',
	REPLACE: 'REPLACE',
	SANDBOX: 'SANDBOX'
};

/**
 * @param {string} target
 * @return {boolean}
 */
mw.cx.isSandboxTarget = ( target ) => target === PUBLISHING_TARGETS.SANDBOX;
/**
 * @param {string} target
 * @return {boolean}
 */
mw.cx.isExpandTarget = ( target ) => target === PUBLISHING_TARGETS.EXPAND;
