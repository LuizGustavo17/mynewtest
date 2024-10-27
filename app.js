const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// Serve arquivos estáticos da pasta public
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
