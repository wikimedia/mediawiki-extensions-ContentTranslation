ALTER TABLE  /*_*/cx_notification_log
CHANGE  cxn_date cxn_date binary(14) not null,
CHANGE  cxn_newest cxn_newest binary(14) not null;
