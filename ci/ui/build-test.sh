#!/bin/bash -e

# This script is run by Bitbucket to build and test the project.

yarn co:login

# We cannot use --ignore-optional here. I've tried it, but the NextJs
# build action requires an optional dependency. For more information,
# refer to:
#
#   https://nextjs.org/docs/messages/failed-loading-swc
yarn install --frozen-lockfile --non-interactive --no-progress

yarn build
yarn lint
