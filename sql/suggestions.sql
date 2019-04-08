CREATE TABLE /*_*/cx_suggestions (
    -- Foreign key to cxl_id
    cxs_list_id int NOT NULL,
    -- Source language code
    cxs_source_language varbinary(36) NOT NULL,
    -- Target language code
    cxs_target_language varbinary(36),
    -- Title of the suggestion
    cxs_title varbinary(512) NOT NULL
) /*$wgDBTableOptions*/;

CREATE INDEX /*i*/cx_suggestions_by_lang ON /*_*/cx_suggestions (
    cxs_list_id,
    cxs_source_language,
    cxs_target_language
);