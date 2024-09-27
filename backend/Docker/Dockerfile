# Usando uma imagem base do Node.js
FROM node:14

# Definindo o diretório de trabalho
WORKDIR /usr/src/app

# Copiando os arquivos de pacote e instalando as dependências
COPY package*.json ./
RUN npm install

# Copiando o restante dos arquivos da aplicação
COPY . .

# Copiando o script wait-for-it.sh para o contêiner
COPY scripts/wait-for-it.sh /usr/src/app/wait-for-it.sh

# Dando permissão de execução ao script
RUN chmod +x /usr/src/app/wait-for-it.sh

# Expondo a porta em que a aplicação vai rodar
EXPOSE 3000

# Rodar a aplicação usando wait-for-it.sh para esperar o MySQL (estava dando erro toda hora)
CMD ["./wait-for-it.sh", "db:3306", "--", "node", "app.js"]
