#!/usr/bin/env bash
if [ $# -ne 1 ]; then
	GH_TOKEN=$1
	#travis encrypt -r REPO_USER/REPO_NAME "GH_TOKEN=ABCDEFG"
fi
GIT_COMMITTER_NAME="onoie"
GIT_COMMITTER_EMAIL="onoie3@gmail.com"
GIT_AUTHOR_NAME=${GIT_COMMITTER_NAME}
GIT_AUTHOR_EMAIL=${GIT_COMMITTER_EMAIL}
HOST="github.com"
REPO_USER="onoie"
REPO_NAME="cdn"
REPO_BRANCH="gh-pages"
#git checkout --orphan ${REPO_BRANCH}
cd dist
git init
git add -A
git config --local user.email ${GIT_COMMITTER_EMAIL}
git config --local user.name ${GIT_COMMITTER_NAME}
if git diff --quiet; then
    echo "No changes to the output on this push; exiting."
    exit 0
fi
git commit -m "Deploy to GitHub Pages @ $(date +'%Y-%m-%d %H:%M:%S.%N')"
if $GH_TOKEN; then
	git push --force --quiet --set-upstream \
		"https://${GH_TOKEN}@${HOST}/${REPO_USER}/${REPO_NAME}.git" ${REPO_BRANCH}  >/dev/null 2>&1
	echo "complete"
fi
