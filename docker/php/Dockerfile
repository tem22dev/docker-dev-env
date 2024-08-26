FROM php:8.2.13-fpm

ENV ENV=${ENV}

RUN cd /usr/bin && curl -s http://getcomposer.org/installer | php && ln -s /usr/bin/composer.phar /usr/bin/composer

RUN apt-get -y update
RUN apt-get -y upgrade
RUN apt-get install -y git libzip-dev vim zlib1g-dev libpng-dev libfreetype6-dev libjpeg62-turbo-dev libcurl4-openssl-dev cron supervisor \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd
RUN apt-get install -y ffmpeg
RUN docker-php-ext-install curl
RUN docker-php-ext-install zip
RUN docker-php-ext-install mysqli
RUN docker-php-ext-install pdo_mysql
RUN docker-php-ext-install opcache
RUN docker-php-ext-install exif
RUN docker-php-ext-enable zip

# COPY ./boot.sh /usr/local/sbin/
# RUN chmod 755 /usr/local/sbin/boot.sh
# CMD ["sh", "-c", "/usr/local/sbin/boot.sh && php-fpm"]
