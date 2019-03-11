FROM node:10

ENV HOST 0.0.0.0

WORKDIR /home/app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5000

CMD npm start
