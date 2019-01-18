#base image
FROM node:11.6.0-alpine as build


WORKDIR /usr/app

COPY package.json .
RUN yarn
RUN yarn add global react-scripts


COPY . .

ENV REACT_APP_API_URL="http://API_URL:8080"
RUN yarn build

FROM nginx:1.15.8-alpine

COPY --from=build /usr/app/build /usr/share/nginx/html

#EXPOSE 80 #exposed by the docker-compose-prod.yaml file

CMD ["nginx", "-g", "daemon off;"]