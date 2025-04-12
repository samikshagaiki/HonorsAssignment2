// 17. Implement a Basic WebSocket Server

const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 3006 });

server.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('message', (msg) => {
    console.log('Received:', msg);
    socket.send(`Echo: ${msg}`);
  });

  socket.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log("WebSocket server running on ws://localhost:3006");