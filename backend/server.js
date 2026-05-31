const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0000',
  database: 'mobile_tickets'
});

db.connect((err) => {
  if (err) {
    console.log('❌ ERRO MYSQL:', err.message);
  } else {
    console.log('✅ CONECTADO AO MYSQL COM SUCESSO!');
  }
});

app.post('/emitir', (req, res) => {
  const { tipo } = req.body;

  // Gera um código como SP45, GE89, etc (conforme sua tabela no Workbench)
  const prefixo = tipo.substring(0, 2).toUpperCase();
  const numeroAleatorio = Math.floor(Math.random() * 100);
  const novoCodigo = `${prefixo}${numeroAleatorio}`;

  // Query usando as colunas que vimos na sua foto: codigo, tipo, status
  const query = 'INSERT INTO senhas (codigo, tipo, status) VALUES (?, ?, "AGUARDANDO")';

  db.query(query, [novoCodigo, tipo], (err, result) => {
    if (err) {
      console.log('❌ ERRO NO INSERT:', err.sqlMessage);
      return res.status(500).send({ erro: err.sqlMessage });
    }
    console.log('✅ SENHA GRAVADA:', novoCodigo);
    res.send({ id: result.insertId, codigo: novoCodigo });
  });
});

app.get('/proxima', (req, res) => {
  res.send({ mensagem: "Servidor está online!" });
});

app.listen(3000, () => {
  console.log('🚀 SERVIDOR RODANDO NA PORTA 3000');
});
