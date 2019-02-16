#base image
FROM node:11-alpine as build

WORKDIR /usr/app

COPY package.json .
COPY yarn.lock .
RUN yarn

COPY src src
COPY public public
RUN yarn build


FROM nginx:1.15

COPY --from=build /usr/app/build /usr/share/nginx/html
COPY docker/start-nginx.sh /usr/local/bin/start-nginx
COPY docker/nginx.vh.default.template /etc/nginx/nginx.vh.default.template

EXPOSE 80

CMD start-nginx
