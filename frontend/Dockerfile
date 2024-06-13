# produce the react build:
FROM node:latest AS builder

# working directory
WORKDIR /app

# copy package.json from source to /app
COPY package.json ./

RUN npm i

# copy the source code
COPY ./ ./

# now we can ask react to build our code to production
# the result will be in the /app/build directory
RUN npm run build

# start over with a fresh nginx machine
# Note: sometimes might require to download nginx from docker hub manualy even with FROM command
FROM nginx:latest

# we go to this directory
WORKDIR /usr/share/nginx/html

# and we empty it totally
RUN rm -rf *

# copy the react build products from the 1st stage, to here
COPY --from=builder /app/build .
COPY nginx.conf ../sites-available/

# start nginx, which will serve react app to any browser

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
