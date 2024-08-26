#!/bin/bash

echo "Enviroment $ENV is starting..."

if [ "$ENV" == "production" ]; then
    npm install && npm run build && npm run start
elif [ "$ENV" == "develop" ]; then
    npm install && npm run dev
else
    npm install && npm run dev
fi
