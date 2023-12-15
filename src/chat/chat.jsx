import React, { useState, useEffect } from 'react';
import './msg.css';

export function Chat() {
  const [socket, setSocket] = useState(null);
  const [nameControlsDisabled, setNameControlsDisabled] = useState(false);
  const [chatControlsDisabled, setChatControlsDisabled] = useState(true);
  const [chatText, setChatText] = useState('');

  useEffect(() => {
    // Adjust the webSocket protocol to what is being used for HTTP
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    const newSocket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    setSocket(newSocket);

    // Clean up on component unmount
    return () => {
      newSocket.close();
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  useEffect(() => {
    if (socket) {
      // Display that we have opened the webSocket
      socket.onopen = (event) => {
        appendMsg('system', 'chat', 'connected');
      };

      // Display messages we receive from our friends
      socket.onmessage = async (event) => {
        const text = await event.data.text();
        const chat = JSON.parse(text);
        appendMsg('friend', chat.name, chat.msg);
      };

      // If the webSocket is closed then disable the interface
      socket.onclose = (event) => {
        appendMsg('system', 'chat', 'disconnected');
        setNameControlsDisabled(true);
        setChatControlsDisabled(true);
      };
    }
  }, [socket]);

  // Send a message over the webSocket
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

  // Create one long list of messages
  function appendMsg(cls, from, msg) {
    setChatText((prevChatText) => 
      `<div><span className="${cls}">${from}</span>: ${msg}</div>` + prevChatText
    );
  }

  // Send message on enter keystroke
  const input = document.querySelector('#new-msg');
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });

  // Disable chat if no name provided
  const myName = document.querySelector('#my-name');
  myName.addEventListener('keyup', (e) => {
    setChatControlsDisabled(myName.value === '');
  });

  return (
    <main>
      <div className="name">
        <fieldset id="name-controls" disabled={nameControlsDisabled}>
          <legend>My Name</legend>
          <input id="my-name" type="text" />
        </fieldset>
      </div>

      <fieldset id="chat-controls" disabled={chatControlsDisabled}>
        <legend>Chat</legend>
        <input id="new-msg" type="text" />
        <button onClick={sendMessage}>Send</button>
      </fieldset>
      <div id="chat-text" dangerouslySetInnerHTML={{ __html: chatText }}></div>
    </main>
  );
}
