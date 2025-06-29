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
- Banco de dados relacional (SQLite com Sequelize)
- Rotas protegidas para criar, listar, editar e excluir feriados personalizados
- Integração com API pública externa para feriados

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

**Inicialize o servidor:**

```bash
npm start
```

O servidor será iniciado em `http://localhost:3001`.

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
  - Express.js
  - Sequelize ORM
  - SQLite
  - JWT (Autenticação)
  - Bcrypt

---

## 🛡️ Segurança

- Rotas de feriados personalizados são protegidas por JWT.
- Cada usuário só visualiza seus próprios feriados cadastrados.

---

## 📌 Observações

- A aplicação segue o padrão **SPA** (Single Page Application), sem mudanças de rota.
- A API externa utilizada é a [Nager.Date](https://date.nager.at/).

---
