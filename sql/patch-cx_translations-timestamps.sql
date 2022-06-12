ALTER TABLE  /*_*/cx_translations
CHANGE  translation_start_timestamp translation_start_timestamp binary(14) not null,
CHANGE  translation_last_updated_timestamp translation_last_updated_timestamp binary(14) not null;
