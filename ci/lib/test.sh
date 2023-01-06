#!/bin/bash -e

# This script is run by Bitbucket to run tests.

yarn lint

yarn test

if ! [[ -z "$SONAR_CLOUD_URL" ]]; then
  sonar-scanner -Dsonar.host.url=$SONAR_CLOUD_URL -Dsonar.login=$SONAR_CLOUD_API_TOKEN
fi
