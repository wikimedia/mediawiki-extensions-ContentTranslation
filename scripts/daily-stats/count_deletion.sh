#!/bin/bash
date=$1
if [ -z $date ]; then
	date=`date --date=yesterday +%Y%m%d`
fi

echo "Deletions on $date"

query="SELECT count(ar_id) FROM change_tag, archive, user WHERE ar_timestamp like '$date%' AND ar_namespace = 0 AND ct_tag = 'contenttranslation' AND ar_rev_id = ct_rev_id AND ar_user = user_id ORDER BY NULL;"

total_deletions=0

for language in aa ab ace af ak als am ang an arbcom_de arbcom_en arbcom_fi arbcom_nl arc ar arz ast as av ay az azb bar bat_smg ba bcl be_x_old be bg bh bi bjn bm bn bo bpy br bs bug bxr ca cbk_zam cdo ceb ce cho chr ch chy ckb co crh cr csb cs cu cv cy da de diq dsb dv dz ee el eml en eo es et eu ext fa ff fiu_vro fi fj fo frp frr fr fur fy gag gan ga gd glk gl gn gom got gu gv hak ha haw he hif hi ho hr hsb ht hu hy hz ia id ie ig ii ik ilo io is it iu ja jbo jv kaa kab ka kbd kg ki kj kk kl km kn koi ko krc kr ksh ks ku kv kw ky lad la lbe lb lez lg lij li lmo ln lo lrc ltg lt lv mai map_bms mdf mg mhr mh min mi mk ml mn mo mrj mr ms mt mus mwl myv my mzn nah nap na nds_nl nds ne new ng nl nn nov no nrm nso nv ny oc om or os pag pam pap pa pcd pdc pfl pih pi pl pms pnb pnt ps pt qu rm rmy rn roa_rup roa_tara ro rue ru rw sah sa scn sco sc sd se sg sh simple si sk sl sm sn so sq srn sr ss stq st su sv sw szl ta ten test test2 tet te tg th ti tk tl tn to tpi tr ts tt tum tw tyv ty udm ug uk ur uz vec vep ve vi vls vo war wa wg_en wo wuu xal xh xmf yi yo za zea zh_classical zh_min_nan zh_yue zh zu
do
	db="${language}wiki"

	# Execute mysql
	result=`sql $db -e "$query" | grep "[0-9]"`
	if [ $result -ne 0 ]
	then
		printf "%-20s %d\n" $db $result
		((total_deletions = total_deletions + result))
	fi
done

echo "Total deletions for $date: $total_deletions"

