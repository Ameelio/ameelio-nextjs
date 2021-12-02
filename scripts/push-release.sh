#!/usr/bin/env bash

if [ -z "${RELEASE_VERSION}" ]; then
  RELEASE_VERSION="$(git rev-parse HEAD)"
fi

docker push "registry.digitalocean.com/ameelio-registry/ameelio-org-v-2:latest"
docker push "registry.digitalocean.com/ameelio-registry/ameelio-org-v-2:${RELEASE_VERSION}"

