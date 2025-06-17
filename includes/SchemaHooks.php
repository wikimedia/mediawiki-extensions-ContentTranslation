<?php
/**
 * Hooks for ContentTranslation extension.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
namespace ContentTranslation;

use MediaWiki\Installer\DatabaseUpdater;
use MediaWiki\Installer\Hook\LoadExtensionSchemaUpdatesHook;

class SchemaHooks implements LoadExtensionSchemaUpdatesHook {

	/**
	 * Hook: LoadExtensionSchemaUpdates
	 * @param DatabaseUpdater $updater
	 */
	public function onLoadExtensionSchemaUpdates( $updater ) {
		$dir = dirname( __DIR__ );
		$dbType = $updater->getDB()->getType();

		// All tables for the extension
		$updater->addExtensionUpdateOnVirtualDomain( [
			ConnectionProvider::VIRTUAL_DOMAIN,
			'addTable',
			'cx_translations',
			"$dir/sql/$dbType/tables-generated.sql",
			true
		] );

		// 1.37
		$updater->addExtensionUpdateOnVirtualDomain( [
			ConnectionProvider::VIRTUAL_DOMAIN,
			'addField',
			'cx_notification_log',
			'cxn_wiki_id',
			"$dir/sql/patch-2020-09-21-notification-log-add-wikiid.sql",
			true
		] );

		// 1.38
		$updater->addExtensionUpdateOnVirtualDomain( [
			ConnectionProvider::VIRTUAL_DOMAIN,
			'addTable',
			'cx_significant_edits',
			"$dir/sql/significant-edits.sql",
			true
		] );
		$updater->addExtensionUpdateOnVirtualDomain( [
			ConnectionProvider::VIRTUAL_DOMAIN,
			'addTable',
			'cx_section_translations',
			"$dir/sql/section-translations.sql",
			true
		] );

		// Here we want to add "cxsx_translation_status" and "cxsx_translation_progress".
		// Since those 2 fields have been added together, we can add only one of them to the
		// updater, and the other one will be picked up by the updater anyway.
		// 1.41
		$updater->addExtensionUpdateOnVirtualDomain( [
			ConnectionProvider::VIRTUAL_DOMAIN,
			'addField',
			'cx_section_translations',
			'cxsx_translation_status',
			"$dir/sql/$dbType/patch-new-fields-to-cx_section_translations.sql",
			true
		] );

		// 1.39
		if ( $dbType === 'mysql' ) {
			$updater->addExtensionUpdateOnVirtualDomain( [
				ConnectionProvider::VIRTUAL_DOMAIN,
				'modifyField',
				'cx_lists',
				'cxl_end_time',
				"$dir/sql/patch-cx_lists-timestamps.sql",
				true
			] );
			$updater->addExtensionUpdateOnVirtualDomain( [
				ConnectionProvider::VIRTUAL_DOMAIN,
				'modifyField',
				'cx_notification_log',
				'cxn_newest',
				"$dir/sql/patch-cx_notification_log-timestamps.sql",
				true
			] );
			$updater->addExtensionUpdateOnVirtualDomain( [
				ConnectionProvider::VIRTUAL_DOMAIN,
				'modifyField',
				'cx_corpora',
				'cxc_timestamp',
				"$dir/sql/patch-cx_corpora-timestamp.sql",
				true
			] );
			$updater->addExtensionUpdateOnVirtualDomain( [
				ConnectionProvider::VIRTUAL_DOMAIN,
				'modifyField',
				'cx_translations',
				'translation_last_updated_timestamp',
				"$dir/sql/patch-cx_translations-timestamps.sql",
				true
			] );
			$updater->addExtensionUpdateOnVirtualDomain( [
				ConnectionProvider::VIRTUAL_DOMAIN,
				'modifyField',
				'cx_notification_log',
				'cxn_wiki_id',
				"$dir/sql/patch-tables-binary.sql",
				true
			] );
		}
		$updater->addExtensionUpdateOnVirtualDomain( [
			ConnectionProvider::VIRTUAL_DOMAIN,
			'dropIndex',
			'cx_translators',
			'cx_translation_translators',
			"$dir/sql/$dbType/patch-cx_translators-unique-to-pk.sql",
			true
		] );
		$updater->addExtensionUpdateOnVirtualDomain( [
			ConnectionProvider::VIRTUAL_DOMAIN,
			'addIndex',
			'cx_translations',
			'cx_translation_target_title',
			"$dir/sql/$dbType/patch-cx_translations-target-title-index.sql",
			true
		] );
		$updater->addExtensionUpdateOnVirtualDomain( [
			ConnectionProvider::VIRTUAL_DOMAIN,
			'addIndex',
			'cx_translators',
			'cx_translators_translation_id',
			"$dir/sql/$dbType/patch-cx_translators-index-translator_translation_id.sql",
			true
		] );
		$updater->addExtensionUpdateOnVirtualDomain( [
			ConnectionProvider::VIRTUAL_DOMAIN,
			'addIndex',
			'cx_translations',
			'cx_translations_started_by_last_updated_timestamp',
			"$dir/sql/$dbType/patch-cx_translations-index-translation_started_by_last_updated_timestamp.sql",
			true
		] );
		$updater->addExtensionUpdateOnVirtualDomain( [
			ConnectionProvider::VIRTUAL_DOMAIN,
			'addIndex',
			'cx_suggestions',
			'cx_suggestions_source_language_title',
			"$dir/sql/$dbType/patch-cx_suggestions-index-source_language_title.sql",
			true
		] );
		$updater->addExtensionUpdateOnVirtualDomain( [
			ConnectionProvider::VIRTUAL_DOMAIN,
			'addIndex',
			'cx_lists',
			'cx_lists_owner',
			"$dir/sql/$dbType/patch-cx_lists-index-owner.sql",
			true
		] );
		$updater->addExtensionUpdateOnVirtualDomain( [
			ConnectionProvider::VIRTUAL_DOMAIN,
			'addIndex',
			'cx_translations',
			'cx_translations_last_update_by_last_updated_timestamp',
			"$dir/sql/$dbType/patch-cx_translations-index-translation_last_update_by_last_updated_timestamp.sql",
			true
		] );
		$updater->addExtensionUpdateOnVirtualDomain( [
			ConnectionProvider::VIRTUAL_DOMAIN,
			'addIndex',
			'cx_translations',
			'cx_translations_last_updated_timestamp',
			"$dir/sql/$dbType/patch-cx_translations-index-translation_last_updated_timestamp.sql",
			true
		] );
	}
}
