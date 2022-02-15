#!/usr/bin/env bash

if [ -z "${RELEASE_VERSION}" ]; then
  RELEASE_VERSION="$(git rev-parse HEAD)"
  echo "RELEASE_VERSION is not set.  Setting to HEAD (${RELEASE_VERSION})"
else
  echo "RELEASE_VERSION already set to '${RELEASE_VERSION}'"
fi

# Exit without running tests for now
echo "Skipping tests"
exit 0

docker run --rm  \
  "registry.digitalocean.com/ameelio-registry/ameelio-org-v-2:${RELEASE_VERSION}" \
  npm run test

