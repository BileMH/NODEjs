const http = require('http');
const server = http.createServer((req, res) => {

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello Node!!!!</h1>\n');
  res.end();
});

server.listen(3000, () => {
});

console.log("HELLO WORLD");

const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File created successfully!');
});