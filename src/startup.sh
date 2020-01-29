#!/bin/bash

ENV_FILE="/usr/share/nginx/html/env-config.js"

rm -f ${ENV_FILE}
touch ${ENV_FILE}

if [[ ! -z "${OCL_DOMAIN}" ]]; then
    echo "var OCL_DOMAIN = \"${OCL_DOMAIN}\";" >> ${ENV_FILE}
fi

echo "Using env-config.js:"
cat ${ENV_FILE}
echo "----"

echo "Starting up the server..."
nginx -g "daemon off;"