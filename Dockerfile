FROM node:10

COPY . /home/app

WORKDIR /home/app

RUN npm install --production

CMD npm start
