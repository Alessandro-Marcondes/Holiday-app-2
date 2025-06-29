require('dotenv').config();
const express = require('express');
const cors = require('cors');
const initDatabase = require('./src/initDatabase');

const app = express();
app.use(cors());
app.use(express.json());


app.use('/auth', require('./src/routes/auth'));
app.use('/holidays', require('./src/routes/holiday'));

const PORT = process.env.PORT || 3001;

initDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
});
