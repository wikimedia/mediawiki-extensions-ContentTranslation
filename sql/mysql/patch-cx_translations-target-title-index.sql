-- This file is automatically generated using maintenance/generateSchemaChangeSql.php.
-- Source: extensions/ContentTranslation/sql/abstractSchemaChanges/patch-cx_translations-target-title-index.json
-- Do not modify this file directly.
-- See https://www.mediawiki.org/wiki/Manual:Schema_changes
CREATE INDEX cx_translation_target_title ON /*_*/cx_translations (translation_target_title);