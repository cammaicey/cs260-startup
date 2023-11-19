# WebSocket Chat
- build a simple chat application
- an HTML page that uses WebSockets and displays the resulting chat
- server will forward the WebSocket communication from the different clients

## Chat Client
- HTML for the client provides an input for the user's name, an input for creating messages, and an element to display the messages that are sent and received
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>WebSocket Chat</title>
    <link rel="stylesheet" href="main.css" />
  </head>
  <body>
    <div class="name">
      <fieldset id="name-controls">
        <legend>My Name</legend>
        <input id="my-name" type="text" />
      </fieldset>
    </div>

    <fieldset id="chat-controls" disabled>
      <legend>Chat</legend>
      <input id="new-msg" type="text" />
      <button onclick="sendMessage()">Send</button>
    </fieldset>
    <div id="chat-text"></div>
  </body>
  <script src="chatClient.js"></script>
</html>
```
- JavaScript for the application provides the interaction with the DOM for creating and displaying messages, and manages the WebSockets in order to connect, send, and receive messages

### DOM Interaction
- do not want to be able to send messages if the user has not specified a name
- add an event listener on the name input and disable the chat controls if the name ever is empty
```
const chatControls = document.querySelector('#chat-controls');
const myName = document.querySelector('#my-name');
myName.addEventListener('keyup', (e) => {
  chatControls.disabled = myName.value === '';
});
```
- `chat-text` ID and appending the new message to its HTML. Security-minded developers will realize that manipulating the DOM in this way will allow any chat user to execute code in the context of the application
```
function appendMsg(cls, from, msg) {
  const chatText = document.querySelector('#chat-text');
  chatText.innerHTML = `<div><span class="${cls}">${from}</span>: ${msg}</div>` + chatText.innerHTML;
}
```
- a user presses the enter key in the message input we want to send the message over the socket
- selecting the DOM element with the `new-msg` ID and adding a listener that watches for the `Enter` keystroke
```
const input = document.querySelector('#new-msg');
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});
```
- Enter is pressed the sendMessage function is called
- text out of the `new-msg` element and the name out of the `my-name` element and sends that over the WebSocket
```
function sendMessage() {
  const msgEl = document.querySelector('#new-msg');
  const msg = msgEl.value;
  if (!!msg) {
    appendMsg('me', 'me', msg);
    const name = document.querySelector('#my-name').value;
    socket.send(`{"name":"${name}", "msg":"${msg}"}`);
    msgEl.value = '';
  }
}
```

### WebSocket Connection
- we can set up our WebSocket
- support both secure and non-secure WebSocket connections
- look at the protocol that is currently being used as represented by the `window.location.protocol` variable
- non-secure HTTP then we set our WebSocket protocol to be non-secure WebSocket (`ws`)
- otherwise we use secure WebSocket (`wss`)
- connect the WebSocket to the same location that we loaded the HTML from by referencing the `window.location.host`
- notify the user that chat is ready to go by listening to the `onopen` event and appending some text to the display using the `appendMsg` func
```
// Adjust the webSocket protocol to what is being used for HTTP
const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

// Display that we have opened the webSocket
socket.onopen = (event) => {
  appendMsg('system', 'websocket', 'connected');
};
```
- WebSocket receives a message from a peer it displays it using the `appendMsg` func
```
socket.onmessage = async (event) => {
  const text = await event.data.text();
  const chat = JSON.parse(text);
  appendMsg('friend', chat.name, chat.msg);
};
```
- WebSocket closes for any reason we also display that to the user and disable the controls
```
socket.onclose = (event) => {
  appendMsg('system', 'websocket', 'disconnected');
  document.querySelector('#name-controls').disabled = true;
  document.querySelector('#chat-controls').disabled = true;
};
```

## Chat Server
- runs the web service, serves up the client code, manages the WebSocket connections, and forwards messages

### Web Service
- established using a simple Express app
- we serve up our client HTML, CSS, and JavaScript files using the static middleware
```
const { WebSocketServer } = require('ws');
const express = require('express');
const app = express();

// Serve up our webSocket client HTML
app.use(express.static('./public'));

const port = process.argv.length > 2 ? process.argv[2] : 3000;
server = app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
```

### WebSocket Server
- create our WebSocket we do things a little differently than we did with the simple connection example
- WebSocketServer control both the HTTP connection and the upgrading to WebSocket, we want to use the HTTP connection that Express is providing and handle the upgrade to WebSocket ourselves
- specifying the `noServer` option when creating the WebSocketServer
- handling the `upgrade` notification that occurs when a client requests the upgrade of the protocol from HTTP to WebSocket
```
// Create a websocket object
const wss = new WebSocketServer({ noServer: true });

// Handle the protocol upgrade from HTTP to WebSocket
server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, function done(ws) {
    wss.emit('connection', ws, request);
  });
});
```

### Forwarding Messages
- WebSocket server we can use the `connection`, `message`, and `close` events to forward messages
- on connection, insert an object representing the connection into a list of all connections from the chat peers
- message is received we loop through the peer connections and forward it
- remove a connection from the peer connection list when it is closed
```
// Keep track of all the connections so we can forward messages
let connections = [];

wss.on('connection', (ws) => {
  const connection = { id: connections.length + 1, alive: true, ws: ws };
  connections.push(connection);

  // Forward messages to everyone except the sender
  ws.on('message', function message(data) {
    connections.forEach((c) => {
      if (c.id !== connection.id) {
        c.ws.send(data);
      }
    });
  });

  // Remove the closed connection so we don't try to forward anymore
  ws.on('close', () => {
    connections.findIndex((o, i) => {
      if (o.id === connection.id) {
        connections.splice(i, 1);
        return true;
      }
    });
  });
});
```

### Keeping Connections Alive
- connection will eventually close automatically if no data is sent across
- prevent that from happening the WebSocket protocol supports the ability to send a `ping` message to see if the peer is still there and receive `pong` responses
- we use `setInterval` to send out a ping every 10 seconds to each of our peer connections and clean up any connections that did not respond
```
setInterval(() => {
  connections.forEach((c) => {
    // Kill any connection that didn't respond to the ping last time
    if (!c.alive) {
      c.ws.terminate();
    } else {
      c.alive = false;
      c.ws.ping();
    }
  });
}, 10000);
```
- `connection` handler we listen for the `pong` response and mark the connection as alive
```
// Respond to pong messages by marking the connection alive
ws.on('pong', () => {
  connection.alive = true;
});
```
- connection that did not respond will remain in the not alive state and get cleaned up on the next pass

## Experiment
- You can find the complete example described above in this [GitHub repository](https://github.com/webprogramming260/websocket-chat)
1. Clone the repository
2. Run `npm install` from a console window in the example directory
3. Open up the code in VS Code and review what it is doing.
4. Run and debug the example by pressing `F5`. You may need to select node.js as the debugger the first time you run
5. Open multiple browser windows and point them to http://localhost:3000 and start chatting
6. Use the browser's debugger to view the WebSocket communication