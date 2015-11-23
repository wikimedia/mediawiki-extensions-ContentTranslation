#!/bin/bash

first_day=$1
last_day=$2

if [ -z $first_day ]; then
	first_day=`date +%Y%m`
	first_day="${first_day}01"
fi

if [ -z $last_day ]; then
	last_day=`date --date=yesterday +%Y%m%d`
fi

echo "Starting deletion range from $first_day until $last_day"

date

for time_stamp in $(seq $first_day $last_day);
do
	./count_deletion.sh $time_stamp
done

date

