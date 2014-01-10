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
		'ext.cx.header',
		'ext.cx.source',
		'ext.cx.translation',
		'ext.cx.tool',
	),
) + $resourcePaths;

$wgResourceModules['ext.cx.header'] = array(
	'scripts' => 'base/ext.cx.header.js',
	'styles' => array(
		'base/styles/ext.cx.header.less',
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
) + $resourcePaths;

$wgResourceModules['ext.cx.tool'] = array(
	'scripts' => 'tools/ext.cx.tools.js',
) + $resourcePaths;
