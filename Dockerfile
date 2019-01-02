FROM ubuntu:18.04

ENV DEBIAN_FRONTEND=noninteractive

# Update and install packages
RUN apt-get update -q && \
    apt-get install -qy git curl ca-certificates gnupg2 build-essential dirmngr nodejs gzip ruby --no-install-recommends && \
    apt-get clean

RUN curl -sSL dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

# RUN apt-get update -q && \
#     apt-get install yarn --no-install-recommends

RUN mkdir /app
WORKDIR /app

# Install RVM
RUN curl -sSL get.rvm.io | bash -s

SHELL [ "/bin/bash", "-l", "-c" ]

RUN . /etc/profile.d/rvm.sh && rvm install 2.5.3

# Install Gems
RUN gem install rails -v '5.2.2' --no-document

# Copy files into container
COPY . .

RUN sed -i 's/\r$//' ./docker/run.sh && chmod +x ./docker/run.sh

ENV JEKYLL_ENV=production

# RUN yarn install
# RUN bundle config --global silence_root_warning 1
RUN bundle install

VOLUME [ "/app" ]

EXPOSE 4000

ENTRYPOINT [ "/bin/bash", "-l", "-c", "bundle exec jekyll serve --host 0.0.0.0" ]
