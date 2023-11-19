# WebSocket
- HTTP is based on a client-server architecture
- 2011 the communication protocol WebSocket was created to solve client/server problems
- core feature of WebSocket is that it is fully duplexed
- after the initial connection is made from a client, using vanilla HTTP, and then upgraded by the server to a WebSocket connection, the relationship changes to a peer-to-peer connection

![peer to peer](https://github.com/webprogramming260/.github/blob/main/profile/webServices/webSocket/webServicesWebSocketUpgrade.jpg)
- WebSocket connections are still only between two parties
- server must act as the intermediary
- first connects to the server, and then the server forwards messages amongst the peers

![server to peer](https://github.com/webprogramming260/.github/raw/main/profile/webServices/webSocket/webServicesWebSocketPeers.jpg)

## Creating a Websocket Conversation
- initiate a WebSocket connection with the browser's WebSocket API
- create a WebSocket object by specifying the port you want to communicate on
- send messages with the `send` function, and register a callback using the `onmessage` function to receive messages
```
const socket = new WebSocket('ws://localhost:9900');

socket.onmessage = (event) => {
  console.log('received: ', event.data);
};

socket.send('I am listening');
```
- server uses the `ws` package to create a WebSocketServer that is listening on the same port the browser is using
- specifying a port when you create the WebSocketServer, you are telling the server to listen for HTTP connections on that port
- automatically upgrade them to a WebSocket connection if the request has a `connection: Upgrade` header
- connection is detected it calls the server's `on connection` callback
- send messages with the `send` function, and register a callback using the `on message` function to receive messages
```
const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 9900 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const msg = String.fromCharCode(...data);
    console.log('received: %s', msg);

    ws.send(`I heard you say "${msg}"`);
  });

  ws.send('Hello webSocket');
});
```