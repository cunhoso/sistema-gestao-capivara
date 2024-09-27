# Usando uma imagem base do Node.js
FROM node:14 AS build

# Definindo o diretório de trabalho
WORKDIR /app

# Copiando os arquivos de pacote e instalando as dependências
COPY package*.json ./
RUN npm install

# Copiando o restante dos arquivos da aplicação
COPY . .

# Construindo a aplicação
RUN npm run build

# Usando uma imagem base do Nginx para servir os arquivos estáticos
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Expondo a porta em que a aplicação vai rodar
EXPOSE 80

# Comando para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]
