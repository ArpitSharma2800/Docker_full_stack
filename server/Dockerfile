FROM node:alpine

RUN mkdir -p /app

COPY package*.json ./app/

COPY . /app/

WORKDIR /app

RUN npm install

EXPOSE 3000

CMD ["nodemon", "app.js"]