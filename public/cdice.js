let baseRaces = [
    'Dwarf', 'Elf', 'Halfling',
    'Human', 'Dragonborn', 'Gnome',
    'Half-Elf', 'Half-Orc', 'Tiefling'
];
let baseClasses = [
    'Barbarian', 'Bard', 'Cleric', 
    'Druid', 'Fighter', 'Monk', 
    'Paladin', 'Ranger', 'Rogue', 
    'Sorcerer', 'Warlock', 'Wizard'
];
let alignments = [
    'Lawful Good', 'Neutral Good', 'Chaotic Good',
    'Lawful Neutral', 'True Neutral', 'Chaotic Neutral',
    'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'
];
let baseBackgrounds = [
    'Acolyte', 'Charlatan', 'Criminal',
    'Entertainer', 'Folk Hero', 'Guild Artisan',
    'Hermit', 'Noble', 'Outlander', 'Sage', 'Sailor',
    'Soldier', 'Urchin'
];
let charDetails = new Map();
let clicks = 0;

function generateChar() {
    if (clicks == 0 ) {
        clicks = 1;
        let table = document.getElementById("charT");
        table.rows[0].cells[0].innerHTML = baseRaces[Math.floor(Math.random() * baseRaces.length)];
        charDetails.set("Race", document.querySelector ("#r").innerText);
        table.rows[0].cells[1].innerHTML = baseClasses[Math.floor(Math.random() * baseClasses.length)];
        charDetails.set("Class", document.querySelector ("#c").innerText);
        table.rows[0].cells[2].innerHTML = alignments[Math.floor(Math.random() * alignments.length)];
        charDetails.set("Alignment", document.querySelector ("#a").innerText);
        table.rows[0].cells[3].innerHTML = baseBackgrounds[Math.floor(Math.random() * baseBackgrounds.length)];
        charDetails.set("Background", document.querySelector ("#b").innerText);
    }
}

// Functionality for peer communication using WebSocket

function configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    
    this.socket.onmessage = async (event) => {
      const msg = JSON.parse(await event.data.text());
      
      if (clicks === 1) {
        this.displayMsg('player', msg.from, `rolled a ${msg.value.charDetails.get("Race")}`);
      }
    }; // Added closing parenthesis here
  }
  
  function displayMsg(cls, from, msg) {
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
      `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
  }
  
  function broadcastEvent(from, type, value) {
    const event = {
      from: from,
      type: type,
      value: value,
    };
    this.socket.send(JSON.stringify(event));
  }
  