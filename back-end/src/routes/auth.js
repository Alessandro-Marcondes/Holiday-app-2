const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');


const router = express.Router();

//Rota para Login

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ where: { username } });
  if (!user) {
    return res.status(401).json({ message: 'Usuário não encontrado' });
  }

  const compare = await bcrypt.compare(password, user.passwordHash);
  if (!compare) {
    return res.status(401).json({ message: 'Senha inválida' });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {expiresIn: '1h'});

  res.json({ token });

});


// rota para popular usuário 
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({ username, passwordHash });
  res.json(user);
});

module.exports = router;
