#!/usr/bin/env bash
GIT_COMMITTER_NAME="onoie"
GIT_COMMITTER_EMAIL="onoie3@gmail.com"
HOST="github.com"
REPO_USER="onoie"
REPO_NAME="cdn"
REPO_BRANCH="gh-pages"
git config --local user.email ${GIT_COMMITTER_EMAIL}
git config --local user.name ${GIT_COMMITTER_NAME}
git checkout --orphan ${REPO_BRANCH}
mv .git ./dist/
cd dist
git add -A
git commit -m "Deploy to GitHub Pages @ $(date +'%Y-%m-%d %H:%M:%S.%N')"
git push --force --quiet --set-upstream \
	"https://${GH_TOKEN}@${HOST}/${REPO_USER}/${REPO_NAME}.git" ${REPO_BRANCH}  >/dev/null 2>&1
echo "complete"
