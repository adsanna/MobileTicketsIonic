const express = require('express');
const router = express.Router();
const db = require('../db');

// contador simples (memória)
let contador = {
  SP: 1,
  SG: 1,
  SE: 1
};


// 🟢 EMITIR SENHA
router.post('/emitir', (req, res) => {

  const { tipo } = req.body;

  const codigo = tipo + String(contador[tipo]++).padStart(3, '0');

  db.query(
    'INSERT INTO senhas (codigo, tipo) VALUES (?, ?)',
    [codigo, tipo],
    (err) => {
      if (err) {
        console.log(err);
        return res.status(500).send('Erro');
      }

      res.send({ codigo });
    }
  );
});


// 🔵 PEGAR PRÓXIMA SENHA
router.get('/proxima', (req, res) => {

  db.query(`
    SELECT * FROM senhas
    WHERE status = 'AGUARDANDO'
    ORDER BY FIELD(tipo, 'SP', 'SE', 'SG'), data_emissao
    LIMIT 1
  `, (err, results) => {

    if (err) {
      return res.status(500).send(err);
    }

    res.send(results[0]);
  });
});

module.exports = router;
