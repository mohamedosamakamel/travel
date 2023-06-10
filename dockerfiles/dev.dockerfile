FROM node:14-alpine3.14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install glob rimraf

RUN npm install 

COPY . .

RUN wget -O /usr/local/bin/dumb-init https://github.com/Yelp/dumb-init/releases/download/v1.2.5/dumb-init_1.2.5_x86_64
RUN chmod +x /usr/local/bin/dumb-init

RUN npm run build

ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
RUN apk add --no-cache tini
ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "dist/main"]