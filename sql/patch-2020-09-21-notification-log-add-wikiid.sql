-- Add wiki_id column to notification_log and update index.
ALTER TABLE /*_*/cx_notification_log
  DROP INDEX /*i*/cx_notification_log_index,
  ADD COLUMN cxn_wiki_id varchar(64) binary,
  ADD INDEX /*i*/cxn_wiki_id_newest (
    cxn_wiki_id,
    cxn_newest
  );
