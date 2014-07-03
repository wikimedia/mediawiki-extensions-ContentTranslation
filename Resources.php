<?php
/**
 * Resource loader module definitions.
 *
 * @file
 * @license GPL-2.0+
 */

$dir = __DIR__;

$resourcePaths = array(
	'localBasePath' => $dir . '/modules',
	'remoteExtPath' => 'ContentTranslation/modules',
	'group' => 'ext.cx',
);

$wgResourceModules['ext.cx.model'] = array(
	'scripts' => array(
		'base/ext.cx.model.js',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.base'] = array(
	'scripts' => array(
		'base/ext.cx.base.js',
	),
	'styles' => array(
		'base/styles/ext.cx.base.less',
	),
	'dependencies' => array(
		'ext.cx.model',
		'ext.cx.header',
		'ext.cx.source',
		'ext.cx.translation',
		'ext.cx.tools',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.header'] = array(
	'scripts' => array(
		'header/ext.cx.header.js',
		'header/ext.cx.header.render.js',
	),
	'styles' => array(
		'header/styles/ext.cx.header.less',
	),
	'dependencies' => array(
		'mediawiki.jqueryMsg',
		'ext.cx.publish',
	),
	'messages' => array(
		'cx-error-server-connection',
		'cx-header-translation-center',
		'cx-publish-button',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.source'] = array(
	'scripts' =>  array(
		'source/ext.cx.source.js',
		'source/ext.cx.source.filter.js'
	),
	'styles' => array(
		'source/styles/ext.cx.source.less',
	),
	'dependencies' => array(
		'mediawiki.jqueryMsg',
		'mediawiki.api',
		'jquery.uls.data',
		'mediawiki.Uri',
		'mediawiki.Title',
	),
	'messages' => array(
		'cx-source-view-page',
		'cx-source-loading',
		'cx-tools-link-hover-tooltip',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.translation'] = array(
	'scripts' => 'translation/ext.cx.translation.js',
	'dependencies' => array(
		'ext.cx.translation.progress',
		'jquery.uls.data',
		'mediawiki.Uri',
		'jquery.throttle-debounce',
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
	),
	'dependencies' => array(
		'ext.cx.progressbar',
		'mediawiki.jqueryMsg',
		'ext.cx.tools.manager',
		'ext.cx.tools.dictionary',
		'ext.cx.tools.instructions',
		'ext.cx.tools.link',
		'ext.cx.tools.images',
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
	),
	'dependencies' => array(
		'ext.cx.tools.manager',
		'ext.cx.tools.card',
		'mediawiki.jqueryMsg',
		'mediawiki.Uri',
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
		'cx-tools-link-instruction-header',
		'cx-tools-link-instruction-shortcut',
	),
	'dependencies' => array(
		'ext.cx.tools.manager',
		'ext.cx.tools.card',
		'jquery.uls.data',
		'mediawiki.Title',
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
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.tools.images'] = array(
	'scripts' => array(
		'tools/ext.cx.tools.images.js',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.progressbar'] = array(
	'scripts' => 'tools/ext.cx.progressbar.js',
	'styles' => array(
		'tools/styles/ext.cx.progressbar.less',
	),
	'messages' => array(
		'cx-header-progressbar-text'
	),
	'dependencies' => array(
		'mediawiki.jqueryMsg',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.publish'] = array(
	'scripts' => 'translation/ext.cx.publish.js',
	'dependencies' => array(
		'ext.cx.model',
		'mediawiki.api.edit',
	),
	'messages' => array(
		'cx-publish-page',
		'cx-publish-page-error',
		'cx-publish-button-publishing',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.eventlogging'] = array(
	'scripts' => 'eventlogging/ext.cx.eventlogging.js',
	'dependencies' => array(
		'schema.ContentTranslation',
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
		'ext.cx.entrypoint',
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
	),
	'dependencies' => array(
		'mediawiki.jqueryMsg',
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

$wgResourceModules['ext.cx.editor.medium'] = array(
	'scripts' => array(
		'editor/ext.cx.editor.js',
		'editor/medium/medium-editor.js',
	),
	'styles' => array(
		'editor/medium/medium-editor.css',
		'editor/medium/theme/agora.css',
	),
) + $resourcePaths;
