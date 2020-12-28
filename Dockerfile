FROM mhart/alpine-node:12

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin

RUN apk update && apk add bash && rm -rf /var/cache/apk/*

WORKDIR /app
ADD . /app

# Set variables needed for building
ENV NODE_ENV=production
ENV GA_ID=UA-68649021-1

RUN yarn
RUN npm run build

EXPOSE 8000