#!/bin/bash -e

echo "Deploying new package"

VERSION=$(jq -r '.version' ./package.json)

readarray -d '.' -t split_version <<< ${VERSION}

new_version="${split_version[0]}.${split_version[1]}.${BITBUCKET_BUILD_NUMBER}"

# We have to use --no-git-tag-version because we need the [skip ci] tag to
# be in the commit message.
yarn \
  publish \
    --frozen-lockfile \
    --no-progress \
    --no-git-tag-version \
    --non-interactive \
    --new-version ${new_version} \
    --production

# Tag this version in Git
git add package.json

git commit --no-verify -m "v${new_version}

[skip ci]"

# Not sure why we get two tags here, but the current bitbucket-pipelines
# does this, so carrying it forward.
git tag --annotate "${new_version}" -m "Tagging for version ${new_version}"

git remote set-url origin "${BITBUCKET_GIT_SSH_ORIGIN}"

# If some other PR has merged while this one was building, then the local
# develop branch will have diverged from the origin develop branch, and a
# push will fail. We need to pull first.
#
# Note that the CI/CD server is running git 2.25.1 and therefore does not have
# the "ort" strategy, so we use "recursive" instead.
git pull \
  --no-commit \
  --strategy=recursive \
  --strategy-option=theirs

git_status=$(git status --porcelain)

if [ "${#git_status}" -eq "0" ]; then
  echo "No changes detected.";
else
  git commit --no-verify --message "Merge with ${BITBUCKET_BRANCH}. [skip ci]"
fi

git push origin "${BITBUCKET_BRANCH}" "${new_version}" --no-verify
