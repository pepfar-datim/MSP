#!/bin/bash

MSP_PORT=${MSP_PORT:-80}

echo "Adding env-config.js"

ENV_FILE="/usr/share/nginx/html/env-config.js"

rm -f ${ENV_FILE}
touch ${ENV_FILE}

if [[ ! -z "${OCL_DOMAIN}" ]]; then
    echo "var OCL_DOMAIN = \"${OCL_DOMAIN}\";" >> ${ENV_FILE}
fi

echo "Adding nginx configuration"
envsubst < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf

echo ""
cat /etc/nginx/conf.d/default.conf
echot ""

echo "Starting up the nginx server"
nginx -g "daemon off;"
