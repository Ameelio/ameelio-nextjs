FROM almalinux:8.6

ENV USER_HOME=/home/docker

# Create docker group/user and disable logins
RUN groupadd -g 9999 docker \
  && adduser -u 9999 -g 9999 --home ${USER_HOME} docker \
  && usermod -L docker

#Enable EPEL repository, adding RPM Fusion and Yarn repository
RUN dnf install --assumeyes \
    https://download.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm \
    yum-utils \
    --nogpgcheck https://mirrors.rpmfusion.org/free/el/rpmfusion-free-release-8.noarch.rpm \
    --nogpgcheck --nogpgcheck https://mirrors.rpmfusion.org/nonfree/el/rpmfusion-nonfree-release-8.noarch.rpm \
  && yum-config-manager --enable powertools \
  && curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | tee /etc/yum.repos.d/yarn.repo \
  && rpm --import https://dl.yarnpkg.com/rpm/pubkey.gpg

#Install nodejs and enable module nodejs:14
RUN dnf module reset nodejs \
  && dnf module enable -y nodejs:14 \
  && dnf module install -y nodejs:14 

# Configure dnf, install updates and common packages, and clean up dnf's cache
RUN dnf upgrade --assumeyes \
  && dnf autoremove --assumeyes \
  && dnf install --assumeyes \
    ca-certificates \
    curl \
    psmisc \
    git \
    jq \
    ffmpeg \
    yarn \
  && dnf clean dbcache \
  && rm -rf /tmp/* /var/tmp/

# Ensure locale is UTF-8
RUN dnf install -y \
    glibc-langpack-en \
    glibc-locale-source \
  && localedef --force --inputfile=en_US --charmap=UTF-8 en_US.UTF-8 \
  && echo "LANG=en_US.UTF-8" > /etc/locale.conf \
  && dnf clean all \
  && rm -rf /var/cache/dnf /var/cache/yum

# Create mnt dir inside the container
RUN chown docker:docker -R /mnt

# Copy package.json into container
RUN mkdir -p /app/src/ssl \
  && chown -R docker:docker /app/src
COPY --chown=docker:docker package.json package-lock.json /app/src/

# switch to docker user
USER docker
WORKDIR /app/src

# Install npm dependencies and update browserlist
#ENV APP_ENV production
#ENV RACK_ENV production
RUN npm install \
  && npx browserslist@latest --update-db 

RUN yarn add \
    react@latest \
    react-dom@latest \
    next@12 \
    --dev @types/node

# Copy remainder of the source code into the container
COPY --chown=docker:docker . /app/src/

RUN npm run build

EXPOSE 8080
CMD npm run start
