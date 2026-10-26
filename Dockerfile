# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.22.2

################################################################################
# Set the base image
FROM node:${NODE_VERSION}-alpine AS base

# Set the working directory
WORKDIR /usr/src/app


################################################################################
# Create a stage for installing dependecies
FROM base AS dependencies

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci


################################################################################
# Create a stage for running the application in development mode
FROM dependencies AS development

# Copy the source code
COPY . .

# Expose the port
EXPOSE 3000

# Run the application
CMD [ "npm", "run", "dev" ]


################################################################################
# Create a stage for building the application
FROM dependencies AS build

# Copy the source code
COPY . .

# Build the application
RUN npm run build

# Remove extraneous packages
RUN npm prune


################################################################################
# Create a stage for running the application in production mode
FROM base AS production

# Copy the built application
COPY --from=build /usr/src/app/.output /usr/src/app/.output

# Run the application
CMD [ "node", ".output/server/index.mjs" ]