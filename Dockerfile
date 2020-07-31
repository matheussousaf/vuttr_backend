FROM node:12

WORKDIR /usr/app

COPY package*.json ./

RUN yarn

# Bundle app source
COPY . .

# RUN yarn test

RUN yarn build

EXPOSE 3000

CMD [ "node", "dist/server.js" ]
