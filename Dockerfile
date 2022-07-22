FROM almalinux:8.6

ENV USER_HOME=/home/docker
ENV LANG en_US.UTF-8

# Create docker group/user and disable logins
RUN groupadd --gid 1000 docker \
 && adduser --uid 1000 --gid 1000 --home ${USER_HOME} docker \
 && usermod -L docker

# Ensure locale is UTF-8
RUN dnf install --assumeyes \
    glibc-langpack-en \
    glibc-locale-source \
 && localedef --force --inputfile=en_US --charmap=UTF-8 en_US.UTF-8 \
 && echo "LANG=en_US.UTF-8" > /etc/locale.conf

# Install EPEL and configure dnf, install updates, common packages, and clean up dnf's cache
RUN dnf install --assumeyes https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm \
 && dnf install --assumeyes dnf-plugins-core \
 && dnf config-manager --set-enabled powertools \
 && dnf update --assumeyes \
 && dnf install --assumeyes \
    ca-certificates \
    curl \
    wget \
    psmisc \
    procps-ng \
    jq \
 && dnf autoremove --assumeyes \
 && dnf clean all \
 && rm -rf /var/cache/dnf /var/cache/yum

 #Install nodejs and enable module nodejs:16
RUN dnf module reset nodejs \
 && dnf module enable -y nodejs:16 \
 && dnf module install -y nodejs:16 

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

# Copy remainder of the source code into the container
COPY --chown=docker:docker . /app/src/

RUN npm run build

EXPOSE 8080
CMD npm run start
