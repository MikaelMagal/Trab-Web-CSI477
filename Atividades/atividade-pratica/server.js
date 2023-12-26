// Importa o módulo http
const http = require('http');

// Configurações do servidor
const hostname = '127.0.0.1';
const port = 3000;

// Cria o servidor
const server = http.createServer((req, res) => {
  // Configura o cabeçalho da resposta
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Envia a resposta
  res.end('Hello, World!\n');
});

// Inicia o servidor e escuta na porta especificada
server.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});