#!/bin/bash
target_lang=$1
limit=$2

if [ -z $target_lang ]; then
	echo "You must specify the target languages."
	exit
fi

if [ -z $limit ]; then
	limit=5
fi

echo "The top $limit translators to $target_lang:"

translators_query="SELECT translation_started_by FROM cx_translations WHERE (translation_status = 'published' OR translation_target_url IS NOT NULL) AND translation_target_language = '$target_lang' GROUP BY translation_started_by ORDER BY count(translation_target_title) DESC LIMIT $limit;"

user_ids=`sql enwiki -h db1029 -D wikishared -e "$translators_query" | grep -E '[0-9]' | perl -pe "s/\s/,/g"`

global_users_query="SELECT gu_id, gu_name FROM globaluser WHERE gu_id in (${user_ids:0:-1});"
sql centralauth -e "$global_users_query"

