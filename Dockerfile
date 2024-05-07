FROM node:18.19-buster

ENV WORKDIR /home/workspace

RUN corepack enable; \
    yarn set version berry;

ENV CHOKIDAR_USEPOLLING=true

# Define working directory.
WORKDIR '/path-php-doc'

CMD ["tail", "-f", "/dev/null"]