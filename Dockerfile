FROM node:10

WORKDIR /home/app

COPY ./package* ./

RUN npm install --production

COPY . .

RUN npm run build
EXPOSE 5000

CMD npm start
