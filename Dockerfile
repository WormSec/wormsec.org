FROM node:23.11.1

WORKDIR /app/

COPY ./package.json /app/package.json

RUN npm install

COPY ./src/ /app/src/
COPY ./public/ /app/public/

RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]
