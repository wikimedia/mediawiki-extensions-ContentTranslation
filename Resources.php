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
	'group' => 'ext.ct',
);

$wgResourceModules['ext.ct.base'] = array(
	'scripts' => 'base/ext.ct.base.js',
	'styles' => array(
		'base/styles/ext.ct.base.less',
	),
	'dependencies' => array(
		'mediawiki.ui',
		'ext.ct.header',
		'ext.ct.source',
		'ext.ct.translation',
		'ext.ct.tool',
	),
) + $resourcePaths;

$wgResourceModules['ext.ct.header'] = array(
	'scripts' => 'base/ext.ct.header.js',
	'styles' => array(
		'base/styles/ext.ct.header.less',
	),
) + $resourcePaths;

$wgResourceModules['ext.ct.source'] = array(
	'scripts' => 'source/ext.ct.source.js',
	'dependencies' => array(
		'mediawiki.Uri',
	),
) + $resourcePaths;

$wgResourceModules['ext.ct.translation'] = array(
	'scripts' => 'translation/ext.ct.translation.js',
) + $resourcePaths;

$wgResourceModules['ext.ct.tool'] = array(
	'scripts' => 'tools/ext.ct.tools.js',
) + $resourcePaths;
