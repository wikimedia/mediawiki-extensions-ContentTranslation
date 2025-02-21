#!/usr/bin/env bash

# check for -v argument
if [ "$1" == "-v" ]; then
    verbose=true
else
    verbose=false
fi

last_build=`git log --grep="CX3 Build" -n 1 --format=%H`

# print last build commit if verbose
if $verbose; then
    echo "Last build commit: $last_build"
    git show -s $last_build
    echo ""
fi

tasks=()

# iterate on the commits between head and last_build
for commit in `git log --pretty=format:%H $last_build..HEAD`; do
  # check if the commit includes files in the app/src folder
    if git diff --name-only $commit^..$commit | grep -q "app/src"; then
        # extract the lines matching "Bug: Txxxxxx" from the commit message
        for bug in `git show --pretty=format:%B -s $commit | grep -o "Bug: T[0-9]*"`; do
            tasks+=($(echo "$bug" | tr 'Bug: ', ' '))
        done

        # print the commit message if verbose
        if $verbose; then
            git show --oneline -s $commit
        fi
    fi
done

# sort the tasks and remove duplicates
tasks=($(echo "${tasks[@]}" | tr ' ' '\n' | sort -u | tr '\n' ' '))

# print the tasks one per line
echo ""
for task in ${tasks[@]}; do
    echo "Bug: $task"
done
echo ""
