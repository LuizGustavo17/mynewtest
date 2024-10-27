const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const pages = [
  { template: 'index', output: 'dist/index.html' }
  
];


pages.forEach(page => {
  ejs.renderFile(
    path.join(__dirname, 'views', `${page.template}.ejs`), 
    {}, 
    (err, html) => {
      if (err) {
        console.error(`Erro ao renderizar ${page.template}:`, err);
      } else {
        const outputPath = path.join(__dirname, page.output); 
        fs.mkdirSync(path.dirname(outputPath), { recursive: true }); 
        fs.writeFileSync(outputPath, html); 
        console.log(`Página gerada: ${page.output}`);
      }
    }
  );
});

console.log('Build concluído: arquivos HTML gerados na pasta dist.');
