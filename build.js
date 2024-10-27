const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

// Configuração para páginas a serem convertidas de EJS para HTML
const pages = [
  { template: 'index', output: 'dist/index.html' }
  // Remova a página 'about' se não for necessária
];

// Função para renderizar cada página e salvar como HTML
pages.forEach(page => {
  ejs.renderFile(
    path.join(__dirname, 'views', `${page.template}.ejs`), // Caminho do template EJS
    {}, // Dados que você deseja passar para o template (se houver)
    (err, html) => {
      if (err) {
        console.error(`Erro ao renderizar ${page.template}:`, err);
      } else {
        const outputPath = path.join(__dirname, page.output); // Caminho do HTML de saída
        fs.mkdirSync(path.dirname(outputPath), { recursive: true }); // Cria a pasta, se não existir
        fs.writeFileSync(outputPath, html); // Salva o HTML renderizado
        console.log(`Página gerada: ${page.output}`);
      }
    }
  );
});

console.log('Build concluído: arquivos HTML gerados na pasta dist.');
