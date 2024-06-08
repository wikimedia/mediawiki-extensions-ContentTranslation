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
		global $wgContentTranslationCluster, $wgContentTranslationDatabase;

		// Following tables should only be created if both cluster and database are false.
		// Otherwise, they are not created in the place they are accesses, because
		// DatabaseUpdater does not support other databases other than main wiki schema.
		if ( $wgContentTranslationCluster !== false || $wgContentTranslationDatabase !== false ) {
			return;
		}

		$dir = dirname( __DIR__ );
		$dbType = $updater->getDB()->getType();

		// All tables for the extension
		$updater->addExtensionTable( 'cx_translations', "$dir/sql/$dbType/tables-generated.sql" );

		// 1.35
		$updater->addExtensionTable( 'cx_notification_log', "$dir/sql/notification-log.sql" );

		// 1.37
		$updater->addExtensionField(
			'cx_notification_log',
			'cxn_wiki_id',
			"$dir/sql/patch-2020-09-21-notification-log-add-wikiid.sql"
		);

		// 1.38
		$updater->addExtensionTable( 'cx_significant_edits', "$dir/sql/significant-edits.sql" );
		$updater->addExtensionTable( 'cx_section_translations', "$dir/sql/section-translations.sql" );

		// Here we want to add "cxsx_translation_status" and "cxsx_translation_progress".
		// Since those 2 fields have been added together, we can add only one of them to the
		// updater, and the other one will be picked up by the updater anyway.
		// 1.41
		$updater->addExtensionField(
			'cx_section_translations',
			'cxsx_translation_status',
			"$dir/sql/$dbType/patch-new-fields-to-cx_section_translations.sql"
		);

		// 1.39
		if ( $dbType === 'mysql' ) {
			$updater->modifyExtensionField(
				'cx_lists',
				'cxl_end_time',
				"$dir/sql/patch-cx_lists-timestamps.sql"
			);
			$updater->modifyExtensionField(
				'cx_notification_log',
				'cxn_newest',
				"$dir/sql/patch-cx_notification_log-timestamps.sql"
			);
			$updater->modifyExtensionField(
				'cx_corpora',
				'cxc_timestamp',
				"$dir/sql/patch-cx_corpora-timestamp.sql"
			);
			$updater->modifyExtensionField(
				'cx_translations',
				'translation_last_updated_timestamp',
				"$dir/sql/patch-cx_translations-timestamps.sql"
			);
			$updater->modifyExtensionField(
				'cx_notification_log',
				'cxn_wiki_id',
				"$dir/sql/patch-tables-binary.sql"
			);
		}
		$updater->dropExtensionIndex(
			'cx_translators',
			'cx_translation_translators',
			"$dir/sql/$dbType/patch-cx_translators-unique-to-pk.sql"
		);
		$updater->addExtensionIndex(
			'cx_translations',
			'cx_translation_target_title',
			"$dir/sql/$dbType/patch-cx_translations-target-title-index.sql"
		);
	}

}
