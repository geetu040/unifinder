# Use an official PHP runtime as a parent image
FROM php:latest

RUN docker-php-ext-install mysqli

# Set the working directory to /var/www/html
WORKDIR /var/www/html

# Copy the contents of the current directory to the container at /var/www/html
COPY . .

# Expose port 80 to the outside world
EXPOSE 8000

# Start PHP server
CMD ["php", "-S", "0.0.0.0:8000"]
