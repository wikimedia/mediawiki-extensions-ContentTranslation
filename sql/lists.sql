-- Content translation suggestion related tables

DROP TABLE IF EXISTS /*_*/cx_lists;
CREATE TABLE /*_*/cx_lists (
    -- List id
    cxl_id int NOT NULL PRIMARY KEY auto_increment,

    -- Type of the list such as features, popular, etc.
    cxl_type int default 0,
    -- Owner of the list
    cxl_owner int NOT NULL,
    cxl_public BOOLEAN NOT NULL,
    -- Optional validity period for the list
    cxl_start_time varchar(14) binary,
    cxl_end_time varchar(14) binary,

    -- Name for the suggestion list
    cxl_name varbinary(512) NOT NULL,
    -- Url to page with additional info about the list
    cxl_info mediumblob
) /*$wgDBTableOptions*/;

CREATE UNIQUE INDEX /*_*/cx_lists_relevant ON /*_*/cx_lists (
    cxl_type,
    cxl_public,
    cxl_start_time,
    cxl_end_time
);

DROP TABLE IF EXISTS /*_*/cx_suggestions;
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
