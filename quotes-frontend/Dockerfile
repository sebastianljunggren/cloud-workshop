#base image
FROM node:11.6.0-alpine as build

WORKDIR /usr/app

COPY package.json .
RUN yarn
RUN yarn add global react-scripts

COPY . .
RUN yarn build


FROM nginx:1.15.8-alpine

COPY --from=build /usr/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]