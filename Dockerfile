FROM node:16.14.2-alpine
EXPOSE 3001/tcp
VOLUME /app
WORKDIR /app

# Need to provide a place to mount the cached build folder.
RUN mkdir -p .next
