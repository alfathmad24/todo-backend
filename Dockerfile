FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .

# Building app
EXPOSE 5000

# Running the apps
CMD ["npm", "run", "server"]