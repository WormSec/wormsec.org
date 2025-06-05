FROM node:23.11.1 AS builder

WORKDIR /app/

COPY ./package.json /app/package.json

RUN npm install

COPY ./src/ /app/src/
COPY ./public/ /app/public/

RUN npm run build

FROM busybox:stable
COPY --from=builder /app/build/ /www/
EXPOSE 80
ENTRYPOINT [ "httpd", "-f", "-p", "80", "-h", "/www/" ]
