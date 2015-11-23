#!/bin/bash
source_lang=$1
target_lang=$2

if [ -z $source_lang ] || [ -z $target_lang  ]; then
	echo "You must specify source and target languages."
	exit
fi

date=$3
if [ -z $date ]; then
	date=`date --date=yesterday +%Y%m%d`
fi

echo "Translations from $source_lang to $target_lang on $date"

pub_query="SELECT COUNT(*) FROM cx_translations where (translation_status = 'published' OR translation_target_url IS NOT NULL) and translation_source_language = '$source_lang' AND translation_target_language = '$target_lang' AND translation_start_timestamp LIKE '$date%';"
all_query="SELECT COUNT(*) FROM cx_translations where translation_source_language = '$source_lang' AND translation_target_language = '$target_lang' AND translation_start_timestamp LIKE '$date%';"

# Execute mysql
echo "Published:"
sql enwiki -h db1029 -D wikishared -e "$pub_query"

echo "All:"
sql enwiki -h db1029 -D wikishared -e "$all_query"
