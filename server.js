const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8989 });

wss.on('connection', ws => {
  ws.on('message', data => {
    console.log(data);
    // Broadcast to everyone else
    wss.clients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});
