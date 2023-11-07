FROM node:14

WORKDIR /dongato-backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3200

CMD [ "node", "index.js" ]
