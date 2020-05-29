#!/usr/bin/env bash
set -euo pipefail

# Check if staged files include files from dist
git diff --name-only --staged --exit-code dist && {
    echo 'There are no staged changes to the dist folder in this change.'
    exit 0;
}

cat << eof
Checking the contents of dist
Note: You are using $(node -v).
Building assets...
eof
npm -s run build
git diff --name-status --exit-code dist || {
    cat << 'eof'
After I built the assets, I noticed differences in the contents to what you committed.
Try running `npm run build` again or removing the node_modules folder and running npm install with the correct node version.
eof
    exit 1;
}
bundlesize
echo 'Your changes look good!'
echo 'There are no staged changes to the dist folder in this change.'
echo 'Make sure to `npm run build` if this was not expected.'