FROM node:21-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 80
CMD [ "npm", "start" ]
