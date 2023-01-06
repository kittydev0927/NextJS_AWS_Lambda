#!/bin/bash -e

# This script is run by Bitbucket to install dependencies.

apt-get update

apt-get -y dist-upgrade

apt-get install -y libgbm-dev

echo "Installing NVM"
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

echo "Installing node v16.14.0"
nvm install --no-progress --default v16.14.0

echo "Installing Yarn"
npm install --global yarn@1.22.18

yarn co:login

yarn install --frozen-lockfile --no-progress --non-interactive
