#!/bin/bash -e

# This script is run by Bitbucket to build the project.

echo "Node: $(node --version)"
echo "NPM: $(npm --version)"
echo "AWS: $(aws --version)"
echo "Yarn: $(yarn --version)"

yarn build:storybook
yarn build:types
