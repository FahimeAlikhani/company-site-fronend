FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN ["npm" , "run" , "serve"]

From nginx
Run rm /etc/nginx/conf/default.conf
COPY vue.conf /etc/nginx/conf.d
WORKDIR /usr/share/nginx/html
COPY --from=0/usr/src/app/dist .
EXPOSE 80

