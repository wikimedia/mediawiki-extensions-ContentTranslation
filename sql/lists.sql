-- Content translation suggestion related tables

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

