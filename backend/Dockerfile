# building upon node image
FROM node:latest

# create working directory, every command will execute here
WORKDIR /app

# copy only the package.json file to the image
# this copies package.json from the same directory where Dockerfile is run
# into the directory we created in WORKDIR command
COPY package.json ./

# Now we want to run npm install
RUN npm i

# Now we want to add the source code of our app
COPY ./ ./

# compile the TypeScript into JavaScript
RUN npm run build

# expose the port app will listen to
EXPOSE 3001

# run start command
CMD [ "npm", "start" ]



