<?php
/**
 * Resource loader module definitions.
 *
 * @file
 * @license GPL-2.0+
 */

$dir = __DIR__;

// TODO: use the standard form
$resourcePaths = array(
	'localBasePath' => $dir . '/modules',
	'remoteExtPath' => 'ContentTranslation/modules',
);

$wgResourceModules['ext.cx.contributions'] = array(
	'scripts' => array(
		'entrypoint/ext.cx.contributions.js',
	),
	'styles' => array(
		'entrypoint/styles/ext.cx.contributions.less',
	),
	'dependencies' => array(
		'mediawiki.util',
		'mediawiki.ui.button',
	),
	'messages' => array(
		'cx-contributions',
		'cx-contributions-translation',
		'cx-contributions-media',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.contributions.init'] = array(
	'scripts' => array(
		'entrypoint/ext.cx.contributions.init.js',
	),
	'dependencies' => array(
		'ext.cx.contributions',
	),
	'position' => 'top',
) + $resourcePaths;

$wgResourceModules['ext.cx.model'] = array(
	'scripts' => array(
		'base/ext.cx.model.js',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.feedback'] = array(
	'dependencies' => array(
		'ext.cx.model',
	),
	'scripts' => array(
		'base/ext.cx.feedback.js',
	),
	'styles' => array(
		'base/styles/ext.cx.feedback.less',
	),
	'messages' => array(
		'cx-feedback-link',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.translationview'] = array(
	'scripts' => array(
		'translationview/ext.cx.translationview.js',
	),
	'styles' => array(
		'translationview/styles/ext.cx.translationview.less',
	),
	'dependencies' => array(
		'ext.cx.model',
		'ext.cx.header',
		'ext.cx.source',
		'ext.cx.sitemapper',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.dashboard'] = array(
	'scripts' => array(
		'dashboard/ext.cx.dashboard.js',
	),
	'styles' => array(
		'dashboard/styles/ext.cx.dashboard.less',
	),
	'dependencies' => array(
		'ext.cx.model',
		'ext.cx.header',
		'ext.cx.sitemapper',
		'ext.cx.translationlist',
		'ext.cx.source.selector',
		'ext.cx.feedback',
		'mediawiki.ui.button',
		'mediawiki.Uri',
	),
	'messages' => array(
		'cx-create-new-translation',
		'cx-create-new-translation-desc',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.magnuslink'] = array(
	'scripts' => array(
		'dashboard/ext.cx.magnuslink.js',
	),
	'styles' => array(
		'dashboard/styles/ext.cx.magnuslink.less',
	),
	'messages' => array(
		'cx-magnus-tool-link-text',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.util'] = array(
	'scripts' => array(
		'util/ext.cx.util.js',
	),
	'dependencies' => array(
		'ext.cx.model',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.util.selection'] = array(
	'scripts' => array(
		'util/ext.cx.util.selection.js',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.sitemapper'] = array(
	'scripts' => array(
		'base/ext.cx.sitemapper.js',
	),
	'dependencies' => array(
		'ext.cx.model',
		'mediawiki.Uri',
		'mediawiki.api',
		'mediawiki.Title',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.header'] = array(
	'scripts' => array(
		'header/ext.cx.header.js',
	),
	'styles' => array(
		'header/styles/ext.cx.header.less',
	),
	'dependencies' => array(
		'mediawiki.Uri',
		'mediawiki.jqueryMsg',
		'mediawiki.util',
		'mediawiki.ui.button',
	),
	'messages' => array(
		'cx',
		'cx-error-server-connection',
		'cx-error-page-not-found',
		'cx-header-new-translation',
		'cx-header-all-translations',
		'cx-publish-button',
		'cx-special-login-error',
		'cx-translation-target-page-exists',
		'login',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.source'] = array(
	'scripts' =>  array(
		'source/ext.cx.source.js',
		'source/ext.cx.source.filter.js',
	),
	'styles' => array(
		'source/styles/ext.cx.source.less',
		'base/styles/ext.cx.spinner.less',
	),
	'dependencies' => array(
		'ext.cx.util',
		'jquery.uls.data',
		'mediawiki.Title',
		'mediawiki.Uri',
		'mediawiki.api',
		'mediawiki.jqueryMsg',
		'mediawiki.util',
	),
	'messages' => array(
		'cx-source-view-page',
		'cx-source-loading',
		'cx-tools-link-hover-tooltip',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.source.selector'] = array(
	'scripts' =>  array(
		'source/ext.cx.source.selector.js'
	),
	'styles' => array(
		'source/styles/ext.cx.source.selector.less',
	),
	'dependencies' => array(
		'ext.cx.sitemapper',
		'jquery.suggestions',
		'jquery.throttle-debounce',
		'ext.uls.mediawiki',
		'jquery.uls.compact',
		'mediawiki.ui.button',
		'ext.cx.widgets.overlay',
	),
	'messages' => array(
		'cx-sourceselector-dialog-new-translation',
		'cx-sourceselector-dialog-button-start-translation',
		'cx-sourceselector-dialog-button-cancel',
		'cx-sourceselector-dialog-source-language-label',
		'cx-sourceselector-dialog-target-language-label',
		'cx-sourceselector-dialog-source-title-placeholder',
		'cx-sourceselector-dialog-target-title-placeholder',
		'cx-sourceselector-dialog-error-page-and-title-exist',
		'cx-sourceselector-dialog-error-page-exists',
		'cx-sourceselector-dialog-error-title-in-use',
		'cx-sourceselector-dialog-error-no-source-article',
		'cx-license-agreement',
		'cx-error-server-connection',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.translation'] = array(
	'scripts' => array(
		'translation/ext.cx.translation.js',
		'translation/ext.cx.translation.aligner.js',
	),
	'dependencies' => array(
		'ext.cx.editor',
		'ext.cx.translation.progress',
		'ext.cx.util',
		'ext.cx.util.selection',
		'jquery.throttle-debounce',
		'jquery.uls.data',
		'mediawiki.Uri',
		'mediawiki.Title',
	),
	'styles' => array(
		'translation/styles/ext.cx.translation.less',
	),
	'messages' => array(
		'cx-translation-add-translation',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.translation.progress'] = array(
	'scripts' => 'translation/ext.cx.translation.progress.js',
	'messages' => array(
		'cx-warning-unsaved-translation',
	),
	'dependencies' => array(
		'ext.cx.util'
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.tools.manager'] = array(
	'scripts' => array(
		'tools/ext.cx.tools.manager.js',
	),
	'styles' => array(
		'tools/styles/ext.cx.tools.manager.less',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.tools'] = array(
	'scripts' => array(
		'tools/ext.cx.tools.js',
	),
	'styles' => array(
		'tools/styles/ext.cx.tools.less',
		'base/styles/ext.cx.spinner.less',
	),
	'dependencies' => array(
		'ext.cx.feedback',
		'ext.cx.progressbar',
		'ext.cx.tools.dictionary',
		'ext.cx.tools.formatter',
		'ext.cx.tools.images',
		'ext.cx.tools.instructions',
		'ext.cx.tools.link',
		'ext.cx.tools.manager',
		'ext.cx.tools.mt',
		'ext.cx.tools.mtabuse',
		'ext.cx.tools.reference',
		'ext.cx.tools.template',
		'ext.cx.tools.categories',
		'ext.cx.util.selection',
		'jquery.uls.data',
		'mediawiki.jqueryMsg',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.tools.card'] = array(
	'styles' => array(
		'tools/styles/ext.cx.tools.card.less',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.tools.instructions'] = array(
	'scripts' => array(
		'tools/ext.cx.tools.instructions.js',
	),
	'styles' => array(
		'tools/styles/ext.cx.tools.instructions.less',
	),
	'messages' => array(
		'cx-tools-searchbox-text',
		'cx-tools-instructions-text1',
		'cx-tools-instructions-text2',
		'cx-tools-instructions-text3',
		'cx-tools-instructions-text4',
		'cx-tools-instructions-text5',
		'cx-tools-instructions-text6',
		'cx-tools-view-guidelines',
		'cx-tools-view-guidelines-link',
	),
	'dependencies' => array(
		'ext.cx.tools.manager',
		'ext.cx.tools.card',
		'mediawiki.jqueryMsg',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.tools.mtabuse'] = array(
	'scripts' => array(
		'tools/ext.cx.tools.mtabuse.js',
	),
	'styles' => array(
		'tools/styles/ext.cx.tools.mtabuse.less',
	),
	'messages' => array(
		'cx-mt-abuse-warning-title',
		'cx-mt-abuse-warning-text',
		'cx-tools-view-guidelines',
		'cx-tools-view-guidelines-link',
	),
	'dependencies' => array(
		'ext.cx.tools.manager',
		'ext.cx.tools.card',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.tools.formatter'] = array(
	'scripts' => array(
		'tools/ext.cx.tools.formatter.js',
	),
	'styles' => array(
		'tools/styles/ext.cx.tools.formatter.less',
	),
	'dependencies' => array(
		'ext.cx.tools.manager',
		'ext.cx.tools.card',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.tools.dictionary'] = array(
	'scripts' => array(
		'tools/ext.cx.tools.dictionary.js',
	),
	'styles' => array(
		'tools/styles/ext.cx.tools.dictionary.less',
	),
	'messages' => array(
		'cx-tools-dictionary-title',
	),
	'dependencies' => array(
		'ext.cx.tools.manager',
		'ext.cx.tools.card',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.tools.link'] = array(
	'scripts' => array(
		'tools/ext.cx.tools.link.js',
	),
	'styles' => array(
		'tools/styles/ext.cx.tools.link.less',
	),
	'messages' => array(
		'cx-tools-link-title',
		'cx-tools-link-add',
		'cx-tools-link-remove',
		'cx-tools-link-instruction-shortcut',
	),
	'dependencies' => array(
		'ext.cx.tools.manager',
		'ext.cx.tools.card',
		'jquery.uls.data',
		'mediawiki.Title',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.tools.mt'] = array(
	'scripts' => array(
		'tools/ext.cx.tools.mt.js',
	),
	'styles' => array(
		'tools/styles/ext.cx.tools.mt.less',
	),
	'messages' => array(
		'cx-tools-mt-title',
		'cx-tools-mt-use-source',
		'cx-tools-mt-clear-translation',
		'cx-tools-mt-restore',
		'cx-tools-mt-provider-title',
		'cx-tools-mt-not-available',
		'cx-tools-mt-dont-use',
	),
	'dependencies' => array(
		'ext.cx.translationview',
		'ext.cx.model',
		'ext.cx.source',
		'ext.cx.tools.card',
		'ext.cx.tools.manager',
		'ext.cx.translation',
		'ext.cx.util',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.tools.reference'] = array(
	'scripts' => array(
		'tools/ext.cx.tools.reference.js',
	),
	'styles' => array(
		'tools/styles/ext.cx.tools.reference.less',
	),
	'messages' => array(
		'cx-tools-reference-title',
		'cx-tools-reference-remove',
	),
	'dependencies' => array(
		'ext.cx.tools.manager',
		'ext.cx.tools.card',
		'ext.cx.util',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.tools.template'] = array(
	'scripts' => array(
		'tools/ext.cx.tools.template.js',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.tools.images'] = array(
	'scripts' => array(
		'tools/ext.cx.tools.images.js',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.tools.categories'] = array(
	'scripts' => array(
		'tools/ext.cx.tools.categories.js',
	),
	'styles' => array(
		'tools/styles/ext.cx.tools.categories.less',
	),
	'messages' => array(
		'cx-tools-categories-count-message',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.progressbar'] = array(
	'scripts' => 'tools/ext.cx.progressbar.js',
	'styles' => array(
		'tools/styles/ext.cx.progressbar.less',
	),
	'messages' => array(
		'cx-header-progressbar-text',
		'cx-header-progressbar-text-mt',
	),
	'dependencies' => array(
		'mediawiki.jqueryMsg',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.draft'] = array(
	'scripts' => array(
		'draft/ext.cx.draft.js',
	),
	'dependencies' => array(
		'ext.cx.model',
		'mediawiki.api.edit',
	),
	'messages' => array(
		'cx-save-draft-saving',
		'cx-save-draft-save-success',
		'cx-save-draft-tooltip',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.publish'] = array(
	'scripts' => array(
		'publish/ext.cx.publish.js',
	),
	'styles' => array(
		'publish/styles/ext.cx.publish.less',
	),
	'dependencies' => array(
		'ext.cx.model',
		'json',
		'mediawiki.api.edit',
		'ext.cx.publish.dialog',
		'ext.cx.sitemapper',
		'ext.cx.tours.publish.init',
	),
	'messages' => array(
		'cx-publish-page-success',
		'cx-publish-page-error',
		'cx-publish-button-publishing',
		'cx-publish-captcha-title',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.publish.dialog'] = array(
	'scripts' => array(
		'publish/ext.cx.publish.dialog.js',
	),
	'styles' => array(
		'publish/styles/ext.cx.publish.dialog.less',
	),
	'dependencies' => array(
		'ext.cx.model',
		'ext.cx.sitemapper',
	),
	'messages' => array(
		'cx-publishing-dialog-message',
		'cx-publishing-dialog-keep-button',
		'cx-publishing-dialog-publish-draft-button',
		'cx-publishing-dialog-publish-anyway-button',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.tours.publish.init'] = array(
	'scripts' => array(
		'tours/ext.cx.tours.publish.init.js',
	),
	'dependencies' => array(
		'mediawiki.cookie',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.eventlogging'] = array(
	'scripts' => 'eventlogging/ext.cx.eventlogging.js',
	'dependencies' => array(
		'ext.cx.model',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.redlink'] = array(
	'scripts' => 'entrypoint/ext.cx.redlink.js',
	'styles' => 'entrypoint/styles/ext.cx.redlink.less',
	'messages' => array(
		'cx-entrypoint-title',
	),
	'dependencies' => array(
		'ext.cx.util',
		'ext.uls.init',
		'mediawiki.jqueryMsg',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.entrypoint'] = array(
	'scripts' => 'entrypoint/ext.cx.entrypoint.js',
	'styles' => 'entrypoint/styles/ext.cx.entrypoint.less',
	'messages' => array(
		'cx-entrypoint-dialog-page-doesnt-exist-yet',
		'cx-entrypoint-dialog-title-in',
		'cx-entrypoint-dialog-button-create-from-scratch',
		'cx-entrypoint-dialog-button-translate-from',
		'cx-license-agreement',
	),
	'dependencies' => array(
		'ext.cx.sitemapper',
		'jquery.uls.data',
		'mediawiki.Uri',
		'mediawiki.jqueryMsg',
	),
) + $resourcePaths;

$wgResourceModules['ext.guidedTour.tour.cxpublish'] = array(
	'scripts' => 'tours/ext.cx.tours.publish.js',
	'dependencies' => array(
		'ext.guidedTour',
		'json',
		'mediawiki.cookie',
		'mediawiki.Title',
	),
	'messages' => array(
		'vector-action-move',
		'vector-view-edit',
		'cx-publish-gt-no-permission-to-move-title',
		'cx-publish-gt-no-permission-to-move-description',
		'cx-publish-gt-first-step-title',
		'cx-publish-gt-first-step-description',
		'cx-publish-gt-move-page-title',
		'cx-publish-gt-move-page-description',
		'cx-publish-gt-moved-title',
		'cx-publish-gt-moved-description',
		'cx-publish-gt-published-title',
		'cx-publish-gt-published-description',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.translationlist'] = array(
	'scripts' => array(
		'dashboard/ext.cx.translationlist.js',
	),
	'styles' => array(
		'dashboard/styles/ext.cx.translationlist.less',
	),
	'dependencies' => array(
		'moment',
		'ext.cx.progressbar',
		'ext.cx.util',
		'jquery.uls.data',
		'ext.cx.widgets.overlay',
	),
	'messages' => array(
		'cx-translation-filter-all-translations',
		'cx-translation-filter-published-translations',
		'cx-translation-filter-draft-translations',
		'cx-translation-filter-from-any-language',
		'cx-translation-filter-to-any-language',
		'cx-discard-translation',
		'cx-translation-status-draft',
		'cx-translation-status-deleted',
		'cx-translation-status-published',
		'cx-draft-discard-confirmation-message',
		'cx-draft-cancel-button-label',
		'cx-draft-discard-button-label',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.translation.conflict'] = array(
	'scripts' => array(
		'translation/ext.cx.translation.conflict.js',
	),
	'styles' => array(
		'translation/styles/ext.cx.translation.conflict.less',
	),
	'messages' => array(
		'cx-translation-already-in-progress',
		'cx-translation-already-in-progress-collaborate',
		'cx-create-new-translation',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.editor'] = array(
	'scripts' => array(
		'editor/ext.cx.editor.js',
	),
	'dependencies' => array(
		'jquery.throttle-debounce',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.stats'] = array(
	'scripts' => array(
		'stats/ext.cx.stats.js',
	),
	'styles' => array(
		'stats/styles/ext.cx.stats.less',
	),
	'dependencies' => array(
		'ext.cx.sitemapper',
		'ext.cx.util',
	),
	'messages' => array(
		'cx-stats-table-source-target',
		'cx-stats-table-source-total',
		'cx-stats-table-target-total',
		'cx-stats-published-translations-title',
		'cx-stats-draft-translations-title',
		'cx-stats-published-translators-title',
	)
) + $resourcePaths;

$wgResourceModules['ext.cx.beta.notification'] = array(
	'scripts' => array(
		'entrypoint/ext.cx.betafeature.notification.js',
	),
	'dependencies' => array(
		'jquery.tipsy',
	),
	'messages' => array(
		'cx-beta-feature-enabled-notification',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.campaigns.newarticle'] = array(
	'scripts' => array(
		'campaigns/ext.cx.campaigns.newarticle.js',
	),
	'styles' => array(
		'campaigns/styles/ext.cx.campaigns.newarticle.less',
	),
	'dependencies' => array(
		'mediawiki.ui.button',
		'jquery.client',
		'mediawiki.util',
		'jquery.throttle-debounce',
		'ext.cx.widgets.callout',
	),
	'messages' => array(
		'cx-campaign-newarticle-notice',
		'cx-campaign-no-thanks',
		'cx-campaign-try',
	)
) + $resourcePaths;

$wgResourceModules['ext.cx.widgets.overlay'] = array(
	'scripts' => array(
		'widgets/overlay/ext.cx.overlay.js',
	),
	'styles' => array(
		'widgets/overlay/ext.cx.overlay.less',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.widgets.callout'] = array(
	'scripts' => array(
		'widgets/callout/ext.cx.callout.js',
	),
	'styles' => array(
		'widgets/callout/ext.cx.callout.css',
	),
) + $resourcePaths;

$wgHooks['ResourceLoaderTestModules'][] = function ( array &$modules ) {
	$resourcePaths = array(
		'localBasePath' => __DIR__,
		'remoteExtPath' => 'ContentTranslation',
	);

	$modules['qunit']['ext.cx.editor.tests'] = array(
		'scripts' => array(
			'tests/qunit/editor/ext.cx.editor.test.js',
		),
		'dependencies' => array(
			'ext.cx.editor',
		),
	) + $resourcePaths;

	$modules['qunit']['ext.cx.header.test'] = array(
		'scripts' => array(
			'tests/qunit/header/ext.cx.header.test.js',
		),
		'dependencies' => array(
			'ext.cx.header',
		),
	) + $resourcePaths;

	$modules['qunit']['ext.cx.publish.test'] = array(
		'scripts' => array(
			'tests/qunit/publish/ext.cx.publish.test.js',
		),
		'dependencies' => array(
			'ext.cx.publish',
		),
	) + $resourcePaths;

	$modules['qunit']['ext.cx.tools.tests'] = array(
		'scripts' => array(
			'tests/qunit/tools/ext.cx.tools.template.test.js',
			'tests/qunit/tools/ext.cx.tools.mtabuse.test.js',
			'tests/qunit/tools/ext.cx.tools.categories.test.js',
		),
		'dependencies' => array(
			'ext.cx.model',
			'ext.cx.tools.template',
			'ext.cx.tools.mtabuse',
			'ext.cx.tools.categories',
		),
	) + $resourcePaths;

	$modules['qunit']['ext.cx.translation.tests'] = array(
		'scripts' => array(
			'tests/qunit/translation/ext.cx.translation.test.js',
		),
		'dependencies' => array(
			'ext.cx.translation',
		),
	) + $resourcePaths;

	$modules['qunit']['ext.cx.sitemapper.test'] = array(
		'scripts' => array(
			'tests/qunit/base/ext.cx.sitemapper.test.js',
		),
		'dependencies' => array(
			'ext.cx.sitemapper',
		),
	) + $resourcePaths;
};
