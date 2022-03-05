<?php

$cfg = require __DIR__ . '/../vendor/mediawiki/mediawiki-phan-config/src/config.php';

$cfg['directory_list'] = array_merge(
	$cfg['directory_list'],
	[
		'scripts/',
		'includes/',
		'skin/',
		'../../extensions/AbuseFilter',
		'../../extensions/BetaFeatures',
		'../../extensions/CentralAuth',
		'../../extensions/Echo',
		'../../extensions/EventLogging',
		'../../extensions/GlobalPreferences',
	]
);

$cfg['exclude_analysis_directory_list'] = array_merge(
	$cfg['exclude_analysis_directory_list'],
	[
		'../../extensions/AbuseFilter',
		'../../extensions/BetaFeatures',
		'../../extensions/CentralAuth',
		'../../extensions/Echo',
		'../../extensions/EventLogging',
		'../../extensions/GlobalPreferences',
	]
);

return $cfg;
