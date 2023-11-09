FROM node:alpine

WORKDIR /dongato-frontend

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev"]
