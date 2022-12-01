# Stage 0, pulls node official base image as 'build-stage' to be referenced later in file
FROM node:16 as build-stage
#setting working dir
WORKDIR /site
#install deps, copies package and package-lock json files to Docker env
COPY package.json ./
#install all node packages
RUN npm install
#copies everything over to docker env
COPY . ./
RUN npm run build

# Stage 1
#pull official nginx base image
FROM nginx:1.22.0

#Set working dir to nginx resources
WORKDIR /usr/share/nginx/html
#remove default nginx static resources
RUN rm -rf ./*
#copies static resources from build-stage
COPY --from=build-stage /site/build/ .
#copying from /site workingdir to nginx config spot
COPY --from=build-stage /site/default.conf /etc/nginx/conf.d/default.conf
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]