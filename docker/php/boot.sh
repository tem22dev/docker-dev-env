#!/bin/bash

echo "Enviroment $ENV is starting..."

# Update laravel vendor
if [ "$ENV" == "production" ]; then
    composer update
fi

# Laravel commands
php artisan migrate
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan config:cache

# Install Xdebug
if [ "$ENV" == "develop" ]; then
    pecl install xdebug \
        && docker-php-ext-enable xdebug
fi

# Start supervisor
service supervisor start