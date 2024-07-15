# base image node:20 a
FROM node:20

#Working Directory
WORKDIR /app

# Adds files from the host file system into the Docker container.
COPY . /app

# Install node modules
RUN npm install

#expose a port to allow external access
EXPOSE 5432

# Start mean application
CMD ["npm", "start"]