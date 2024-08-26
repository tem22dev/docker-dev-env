# Clone src code:
- git clone https://github.com/danhdat71/Laravel-NextJS.git

# Build docker
- docker-compose build --no-cache

# Docker up
- docker-compose up -d

# Install Frontend NextJS package automatically when start docker container

# Install Backend Laravel package
- Install packages: docker-compose exec php composer install
- Clear cache: docker-compose exec php php artisan cache:clear
- Clear config: docker-compose exec php php artisan config:clear
- Run migrate: docker-compose exec php php artisan migrate --seed

Enjoy it :)