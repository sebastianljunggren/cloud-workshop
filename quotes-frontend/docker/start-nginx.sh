#!/usr/bin/env bash

envsubst  '$API_URL' < /etc/nginx/nginx.vh.default.template > /etc/nginx/conf.d/default.conf
echo "Starting nginx proxying ${API_URL}"
nginx -g "daemon off;"