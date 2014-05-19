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
		'ext.cx.tool',
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
	'scripts' => 'source/ext.cx.source.js',
	'styles' => array(
		'source/styles/ext.cx.source.less',
	),
	'dependencies' => array(
		'mediawiki.jqueryMsg',
		'mediawiki.api',
		'jquery.uls.data',
		'mediawiki.Uri',
	),
	'messages' => array(
		'cx-source-view-page',
		'cx-source-loading'
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.translation'] = array(
	'scripts' => 'translation/ext.cx.translation.js',
	'dependencies' => array(
		'jquery.uls.data',
		'mediawiki.Uri',
	),
	'styles' => array(
		'translation/styles/ext.cx.translation.less',
	),
	'messages' => array(
		'cx-translation-add-translation',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.tool'] = array(
	'scripts' => array(
		'tools/ext.cx.tools.js',
		'tools/ext.cx.tools.helpmessage.js',
	),
	'styles' => array(
		'tools/styles/ext.cx.tools.less',
		'tools/styles/ext.cx.tools.helpmessage.less',
	),
	'messages' => array(
		'cx-tools-instructions-text1',
		'cx-tools-instructions-text2',
		'cx-tools-instructions-text3',
		'cx-tools-instructions-text4',
		'cx-tools-instructions-text5',
		'cx-tools-instructions-text6',
		'cx-tools-searchbox-text',
		'cx-tools-view-guidelines',
	),
	'dependencies' => array(
		'ext.cx.progressbar',
		'mediawiki.jqueryMsg',
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
		'mediawiki.api.edit',
	),
	'messages' => array(
		'cx-publish-page',
		'cx-publish-page-error'
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
