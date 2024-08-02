FROM node:12.22.9

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .

EXPOSE 8000


ENV HOST=0.0.0.0 PORT=8000

CMD ["node", "src/server.js"]