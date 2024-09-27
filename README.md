# Sistema de Gestão de Capivaras

Este é um sistema de gerenciamento para monitorar e administrar capivaras em diferentes habitats. O projeto é composto por um frontend construído em Vue.js e um backend em Node.js com uma base de dados MySQL.

## Estrutura do Projeto

```
sistema-gestao-capivara/
├── backend/
│   ├── Docker/
│   │   ├── .dockerignore
│   │   ├── Dockerfile
│   ├── node_modules/
│   ├── scripts/
│   │   ├── wait-for-it.sh
│   ├── app.js
│   ├── package-lock.json
│   └── package.json
├── frontend/
│   ├── Docker/
│   │   ├── .dockerignore
│   │   ├── Dockerfile
│   ├── node_modules/
│   ├── public/
│   │   ├── favicon.ico
│   │   └── index.html
│   ├── src/
│   │   ├── assets/
│   │   │   ├── capivara.jpg
│   │   │   ├── capivara2.jpg
│   │   │   └── logo.png
│   │   ├── components/
│   │   │   ├── CapivaraDetail.vue
│   │   │   ├── CapivaraForm.vue
│   │   │   ├── CapivaraList.vue
│   │   │   └── HomePage.vue
│   │   ├── routes/
│   │   │   ├── index.js
│   │   ├── App.vue
│   │   └── main.js
│   ├── babel.config.js
│   ├── jsconfig.json
│   ├── package-lock.json
│   ├── package.json
│   └── vue.config.js
├── mysql/
│   ├── init.sql
├── .gitignore
├── docker-compose.yml
├── README.md
```

## Pré Requisitos 
    Docker e Docker Compose instalados na máquina
    Node.js e npm instalados (caso deseje executar fora do Docker)

## Configuração do Banco de Dados

O banco de dados MySQL é inicializado com uma tabela de capivaras, conforme definido no arquivo mysql/init.sql.

# Estrutura da Tabela `capivaras`

```sql
CREATE TABLE capivaras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    idade INT NOT NULL,
    peso FLOAT NOT NULL,
    status_saude VARCHAR(255) NOT NULL,
    habitat VARCHAR(255) NOT NULL,
    comportamento TEXT,
    dieta TEXT,
    observacoes TEXT
);
```

# Dados Iniciais

```sql
INSERT INTO capivaras (nome, idade, peso, status_saude, habitat, comportamento, dieta, observacoes) VALUES
('Senhorita Bigodes', 4, 65, 'Saudável', 'Lago Sul', 'Muito ativa, gosta de nadar no lago durante a manhã.', 'Prefere pasto fresco e frutas, especialmente maçãs.', 'Costuma socializar com Diógenes, muitas vezes são vistos juntos.'),
('Helena', 3, 58, 'Saudável', 'Floresta Oeste', 'Não socializa bem com outras capivaras, frequentemente vista descansando à sombra.', 'Consome uma variedade de vegetação, incluindo folhas e capim.', NULL),
('Garibalda', 5, 70, 'Necessita de cuidados', 'Recinto Norte', 'Mais reservada, prefere ficar sozinha na maioria das vezes.', NULL, 'Diagnosticado com uma infecção no olho esquerdo, tratamento com colírio iniciado.'),
('Diógenes', 2, 55, 'Saudável', 'Lago Sul', 'Jovem e curioso, explora frequentemente novas áreas do recinto.', 'Gosta de uma dieta variada, incluindo frutas e vegetação densa.', 'Mostra interesse em explorar áreas fora do habitat designado, requer monitoramento extra.'),
('Darius III', 6, 72, 'Saudável', 'Lago Sul', 'Grande e dominante, tende a liderar o grupo nas interações sociais.', 'Prefere pasto grosso e casca de árvore.', 'Mostra comportamento protetor, especialmente quando está perto de Senhorita Bigodes.');
```

# Instruções de Execução

## Usando Docker Compose 

*1.* Clone o repositório:
git clone <https://github.com/cunhoso/sistema-gestao-capivara.git>
cd sistema-gestao-capivara

*2.* Inicie o projeto com Docker Compose:
docker-compose up --build

*3.* Acesse o frontend: 
Abra um navegador e acesse http://localhost.

## Executando Localmente (Sem Docker)

*1.* Back-End:

*1.1* Navegue até a pasta `backend`:
    ``cd backend``

*1.2* Instale as dependências:
    ``npm install``

*1.3* Inicie o servidor:
   ``node app.js``

*2.* Front-End:

*2.1* Navegue até a pasta `frontend`:
    ``cd frontend``

*2.2* Instale as dependências:
    ``npm install``

*2.3* Inicie o servidor de desenvolvimento:
    ``npm run serve``

*3.* Banco de Dados:
Certifique-se de que o MySQL está rodando e a tabela `capivaras` foi criada conforme o script `init.sql`.

# Funcionalidades
    • Saiba Mais: Página Inicial contém algumas informações sobre as capivaras.
    • Listagem de Capivaras: Veja todas as capivaras registradas no sistema.
    • Detalhes da Capivara: Veja informações detalhadas de uma capivara específica.
    • Adicionar Capivara: Adicione uma nova capivara ao sistema.
    • Editar Capivara: Edite as informações de uma capivara existente.
    • Deletar Capivara: Remova uma capivara do sistema.

# Tecnologias Utilizadas
    • Backend: Node.js, Express, MySQL
    • Frontend: Vue.js, BootstrapVue
    • Banco de Dados: MySQL
    • Docker: Docker Compose para orquestração de contêineres

# Contribuições
Não há espaço para contribuições pois isto se trata de um teste para uma vaga. Obrigado pela compreensão!