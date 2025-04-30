FROM nginx:alpine

COPY ./src/config/nginx/default.conf /etc/nginx/conf.d/default.conf

WORKDIR /opt/juanez/resume

COPY ./dist .

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]