ALTER TABLE /*_*/cx_notification_log
  MODIFY cxn_wiki_id varbinary(64);

ALTER TABLE /*_*/cx_translations
  MODIFY translation_source_url blob not null,
  MODIFY translation_target_url blob default null;
