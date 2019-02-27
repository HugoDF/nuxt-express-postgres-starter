FROM node:10

WORKDIR /home/app

COPY ./package* ./

RUN npm install --production

COPY . .

CMD npm start
