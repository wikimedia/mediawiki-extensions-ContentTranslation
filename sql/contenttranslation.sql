-- Some example steps for creating a new database for testing this:
-- mysql> CREATE DATABASE contenttranslation;
-- mysql> USE contenttranslation;
-- In the next line replace "USER" with the value of $wgDBuser from your LocalSettings.php,
-- and replace localhost with your hostname if needed.
-- mysql> GRANT ALL ON contenttranslation.* to 'USER'@'localhost';
-- mysql> SOURCE contenttranslation.sql

DROP TABLE IF EXISTS /*_*/translations;
CREATE TABLE /*_*/translations (
      -- translation id. Autogenerated.
      translation_id int primary key auto_increment,
      -- Source title of the translation
      translation_source_title varbinary(512) not null,
      -- Target title of the translation
      translation_target_title varbinary(512) not null,
      -- Source language. language code
      translation_source_language varbinary(36) not null,
      -- Target language. language code
      translation_target_language varbinary(36) not null,
      -- source of the page as full canonical url -- https://www.mediawiki.org/wiki/Help:CxIsPage
      translation_source_url text binary not null,
      -- link to the draft/published target
      translation_target_url text binary not null,
      -- Status of translation - Draft or published status.
      -- There is no final status. A published translation can be draft again to update again
      translation_status enum('draft', 'published' ) default null,
      -- Start date of this translation
      translation_start_timestamp varchar(14) binary not null,
      -- Last updated date of this translation
      translation_last_updated_timestamp varchar(14) binary not null,
      -- Progress of the translation - json dump
      translation_progress TINYBLOB not null,
      -- Who started this translation? User id
      translation_started_by int,
      -- Who did the last translation? It need not be the translator who started.
      translation_last_update_by int
) /*$wgDBTableOptions*/;

DROP TABLE IF EXISTS /*_*/translators;
CREATE TABLE /*_*/translators (
      -- Translators id - global user id
      translator_user_id int not null,
      -- Translation id - foreign key to translations.translation_id
      translator_translation_id int not null
) /*$wgDBTableOptions*/;

DROP TABLE IF EXISTS /*_*/drafts;
CREATE TABLE /*_*/drafts (
      -- Draft Id - foreign key to translations.translation_id
      draft_id int primary key not null,
      -- Draft save timestamp
      draft_timestamp  varchar(14) binary not null,
      -- Translation draft content
      draft_content mediumblob
) /*$wgDBTableOptions*/;


CREATE UNIQUE INDEX /*i*/translation_pair ON /*_*/translations ( translation_source_title, translation_source_language, translation_target_language);

CREATE UNIQUE INDEX /*i*/translation_translators ON /*_*/translators (translator_user_id, translator_translation_id);
