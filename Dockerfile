# Multi-stage
# 1) Node image for building frontend assets
# 2) nginx stage to serve frontend assets

# Name the node stage "builder"
FROM node:14 AS builder
# set argument for environment
ARG env=development
# Set working directory
WORKDIR /app
# Copy all files from monorepo root to working dir in image
COPY . .
# install node modules
RUN yarn && yarn lerna bootstrap
# Go to web package
WORKDIR /app/packages/web
# build assets
RUN yarn build -e $env

# nginx stage for serving content
FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/packages/web/build .
# Copy nginx.conf
COPY packages/web/.nginx/nginx.conf /etc/nginx/nginx.conf
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]