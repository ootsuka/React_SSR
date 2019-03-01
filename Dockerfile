# build =====================
FROM node:latest as build

WORKDIR /React_SSR

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

COPY . .

RUN npm run prod:build:server

RUN npm run prod:build:client

# run =====================
FROM node:latest as run

WORKDIR /React_SSR

COPY --from=build /React_SSR .

EXPOSE 8080

CMD [ "npm", "run", "prod:start"]
