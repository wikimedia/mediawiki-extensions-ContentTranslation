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
	),
) + $resourcePaths;
