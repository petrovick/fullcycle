FROM nginx:latest

COPY html /usr/share/nginx/html

ENTRYPOINT ["/docker-entrypoint.sh"]
# Ficou faltando aqui mapear os arquivos, mas isso será mostrado no docker-compose
CMD ["nginx", "-g", "daemon off;"]