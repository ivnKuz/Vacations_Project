# building upon node image
FROM node:latest

# create working directory, every command will execute here
WORKDIR /app

# copy only the package.json file to the image
# copies package.json from this directory into the directory specified in WORKDIR 

COPY package.json ./


RUN npm i

#copy the source code of the app
COPY ./ ./

# compile the TypeScript into JavaScript
RUN npm run build

# expose the port app will listen to
EXPOSE 3001

# run start command
CMD [ "npm", "start" ]



