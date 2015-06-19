<?php
if ( function_exists( 'wfLoadExtension' ) ) {
	wfLoadExtension( 'ContentTranslation' );
	// Keep i18n globals so mergeMessageFileList.php doesn't break
	$wgMessagesDirs['ContentTranslation'] = __DIR__ . '/i18n';
	$wgExtensionMessagesFiles['ContentTranslation'] = __DIR__ . '/ContentTranslation.alias.php';
	wfWarn(
		'Deprecated PHP entry point used for ContentTranslation extension. ' .
		'Please use wfLoadExtension instead, ' .
		'see https://www.mediawiki.org/wiki/Extension_registration for more details.'
	);
	return;
} else {
	die( 'This version of the ContentTranslation extension requires MediaWiki 1.25+' );
}
