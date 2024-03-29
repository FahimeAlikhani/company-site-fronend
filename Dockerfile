FROM node:12 as build-stage
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /usr/src/app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
