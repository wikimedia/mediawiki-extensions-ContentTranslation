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
		'mediawiki.ui',
		'mediawiki.api',
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
) + $resourcePaths;

$wgResourceModules['ext.cx.source'] = array(
	'scripts' => 'source/ext.cx.source.js',
	'dependencies' => array(
		'mediawiki.Uri',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.translation'] = array(
	'scripts' => 'translation/ext.cx.translation.js',
	'styles' => array(
		'translation/styles/ext.cx.translation.less',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.tool'] = array(
	'scripts' => 'tools/ext.cx.tools.js',
) + $resourcePaths;

$wgResourceModules['ext.cx.progressbar'] = array(
	'scripts' => 'header/ext.cx.progressbar.js',
	'styles' => array(
		'header/styles/ext.cx.progressbar.less',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.publish'] = array(
	'scripts' => 'translation/ext.cx.publish.js',
	'dependencies' => array(
		'mediawiki.api.edit',
	),
) + $resourcePaths;
