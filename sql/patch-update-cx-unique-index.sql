-- Updates cx_translators to allow multiple people to have reference to
-- same translation work (title, from, to).
ALTER TABLE /*_*/cx_translations
DROP INDEX /*i*/cx_translation_pair;

CREATE UNIQUE INDEX /*i*/cx_translation_ref ON /*_*/cx_translations (
    translation_source_title,
    translation_source_language,
    translation_target_language,
    translation_started_by
);
