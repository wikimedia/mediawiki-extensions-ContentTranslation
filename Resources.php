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

$wgResourceModules['ext.cx.base'] = array(
	'scripts' => 'base/ext.cx.base.js',
	'styles' => array(
		'base/styles/ext.cx.base.less',
	),
	'dependencies' => array(
		'mediawiki.api',
		'mediawiki.jqueryMsg',
		'mediawiki.language',
		'mediawiki.ui',
		'ext.cx.header',
		'ext.cx.source',
		'ext.cx.translation',
		'ext.cx.tool',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.header'] = array(
	'scripts' => 'header/ext.cx.header.js',
	'styles' => array(
		'header/styles/ext.cx.header.less',
	),
	'dependencies' => array(
		'ext.cx.progressbar',
		'ext.cx.publish',
	),
	'messages' => array(
		'cx-header-translation-center',
		'cx-publish-button'
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.source'] = array(
	'scripts' => 'source/ext.cx.source.js',
	'dependencies' => array(
		'jquery.uls.data',
		'mediawiki.Uri',
	),
	'messages' => array(
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
) + $resourcePaths;

$wgResourceModules['ext.cx.tool'] = array(
	'scripts' => 'tools/ext.cx.tools.js',
	'messages' => array(
		'cx-tools-instructions-title',
		'cx-tools-instructions-text1',
		'cx-tools-instructions-text2',
		'cx-tools-instructions-text3',
		'cx-tools-instructions-text4',
		'cx-tools-instructions-text5'
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.progressbar'] = array(
	'scripts' => 'header/ext.cx.progressbar.js',
	'styles' => array(
		'header/styles/ext.cx.progressbar.less',
	),
	'messages' => array(
		'cx-header-progressbar-text'
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
