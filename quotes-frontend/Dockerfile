#base image
FROM node:11.6.0-alpine as build


WORKDIR /usr/app

COPY package.json .
RUN yarn
RUN yarn add global react-scripts


COPY . .

# The protocol, hostname and port of the API
ARG API_URL=http://localhost:8080
ENV REACT_APP_API_URL=$API_URL
RUN yarn build

FROM nginx:1.15.8-alpine

COPY --from=build /usr/app/build /usr/share/nginx/html

#EXPOSE 80 #exposed by the docker-compose-prod.yaml file

CMD ["nginx", "-g", "daemon off;"]