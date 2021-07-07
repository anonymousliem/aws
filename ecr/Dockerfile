FROM ubuntu:16.04
# Install apache and remove the list of packages downloaded from apt-get update
RUN apt-get update -y && \
apt-get install -y apache2 && \
rm -r /var/lib/apt/lists/*
# Copy the website into the apache web root directory
COPY resources /var/www/html
EXPOSE 80
CMD ["apachectl", "-D", "FOREGROUND"]