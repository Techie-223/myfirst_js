// server.js

// Require the built-in 'http' module to create a web server
const http = require('http');

// Define the server and its behavior
const server = http.createServer((req, res) => {
  // Set the response HTTP header with a 200 OK status and content type as HTML
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Write the response body
  res.end('Hello, World!');
});

// Define the port the server will listen on
const PORT = 3000;

// Make the server listen on the specified port
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
