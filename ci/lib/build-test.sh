#!/bin/bash -e

# This script is run by Bitbucket to build and test the project.

. ci/lib/dependencies.sh
. ci/lib/build.sh
. ci/lib/test.sh
yarn snapshots
