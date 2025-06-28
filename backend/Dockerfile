FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install && npm install -g nodemon
RUN npm install express && npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
