# 🌐 Projeto Holliday.app - SPA Fullstack

Este projeto é uma aplicação **web fullstack** que permite consultar, cadastrar, editar e excluir feriados.

## 📁 Estrutura do Projeto

```
/
├── frontend/         # Aplicação React
├── backend/          # API Express com autenticação
└── README.md         # Este arquivo
```

---

## 🚀 Funcionalidades

### 🖥️ Frontend (React)

- Busca de feriados via API externa (Nager.Date)
- Cadastramento de feriados personalizados
- Edição e exclusão de feriados do usuário
- Filtros por mês e tipo de feriado
- Alternância entre dados da API e personalizados
- Tela dedicada para visualizar todos os feriados cadastrados
- Autenticação via token JWT
- Interface moderna com Material UI

### 🔧 Backend (Node.js + Express)

- API RESTful com autenticação JWT
- Banco de dados (SQLite com Sequelize)
- Rotas protegidas para criar, listar, editar e excluir feriados personalizados
- Integração com API pública externa para feriados
- Validação e sanitização de dados
- HTTPS com certificado local
- Cache de requisições externas
- Limitação de requisições por IP
- Pool de conexões no banco

---

## ⚙️ Como Executar

### 1. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/projeto-feriados.git
cd projeto-feriados
```

### 2. Backend

```bash
cd backend
npm install
touch .env
```

**Exemplo do `.env`:**

```
JWT_SECRET=sua_chave_secreta
```

**Gere os certificados HTTPS:**

```
mkdir certs
openssl req -nodes -new -x509 -keyout certs/key.pem -out certs/cert.pem
```


**Inicialize o servidor:**

```bash
npm start
```

O servidor será iniciado em `https://localhost:3001`.

---

### 3. Frontend

```bash
cd ../frontend
npm install
npm start
```

O app estará disponível em `http://localhost:3000`.

---

## 🧪 Usuário Padrão para Testes

Ao iniciar o servidor, um usuário `admin` e `user2` com senha `123` será criado automaticamente.

- **Login:** `admin` ou `user2`
- **Senha:** `123`

---

## 📦 Tecnologias Utilizadas

- **Frontend:**
  - React.js
  - React Context + useReducer
  - Material UI (MUI)
  - Styled-components
  - Day.js

- **Backend:**
  - Node.js
  - Express.js
  - Sequelize ORM
  - SQLite
  - JWT (Autenticação)
  - Bcrypt
  - dotenv
  - express-validator
  - express-rate-limit
  - apicache
  - helmet
  - compression

---

## 🛡️ Segurança

-Hash de senha com bcrypt
-Autenticação com JWT
-HTTPS local com certificados próprios
-Middleware de proteção de rotas
-Separação de dados por usuário
-Validação e sanitização de dados
-Rate limiting contra brute force
-Cache de respostas externas (feriados)
-Pool de conexões com SQLite
-Compressão com compression
-Headers seguros com helmet

---

## 📌 Observações

- A aplicação segue o padrão **SPA** (Single Page Application), sem mudanças de rota.
- A API externa utilizada é a [Nager.Date](https://date.nager.at/).
- Projeto desenvolvido para fins acadêmicos.
---
