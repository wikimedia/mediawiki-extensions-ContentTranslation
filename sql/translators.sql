CREATE TABLE /*_*/cx_translators (
    -- Translators id - global user id
    translator_user_id int not null,
    -- Translation id - foreign key to translations.translation_id
    translator_translation_id int not null
) /*$wgDBTableOptions*/;

CREATE UNIQUE INDEX /*i*/cx_translation_translators ON /*_*/cx_translators (
    translator_user_id,
    translator_translation_id
);
