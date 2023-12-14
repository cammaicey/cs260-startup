import React from 'react';
import './tables.css';

export function Archive() {
  class Char { 
    constructor(name, details, stats) {
        this.name = name;
        this.details = details;
        this.stats = stats;
    }
    get_name() {
        return this.name;
    }
    get_details() {
        return this.details;
    }
    get_stats() {
        return this.stats;
    }
  }

  async function saveChar(char) {
      const cName = char.get_name();
      const d = char.get_details();
      const s = char.get_stats();

      const newChar = {name: cName, details: d, stats: s};

      try {
        const response = await fetch('/api/character', {
          method: 'POST',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify(newChar),
        });

        // Store what the service gave us as the high scores
        const characters = await response.json();
        localStorage.setItem('characters', JSON.stringify(characters));
      } catch {
        // If there was an error then just track characters locally
        this.updateCharactersLocal(newChar);
      }
  }

  function updateCharactersLocal(newChar) {
      let characters = [];
      const charactersText = localStorage.getItem('characters');
      if (charactersText) {
        characters = JSON.parse(charactersText);
      }

      let found = false;
      for (const [i, prevChar] of characters.entries()) {
        if (newChar.name < prevChar.name) {
          characters.splice(i, 0, newChar);
          found = true;
          break;
        }
      }

      if (!found) {
        characters.push(newChar);
      }

      localStorage.setItem('characters', JSON.stringify(characters));
  }


  function storeArchive() {
    document.querySelector("#ability-btn").disabled = true;
    const cName = document.querySelector("#cname").value;

    const character = new Char(cName, JSON.stringify(Array.from(charDetails)), JSON.stringify(Array.from(ability_scores)));
    saveChar(character);

    let t = document.querySelector("#cTable");
    let tb = document.querySelector("#tb");
    let newR = document.createElement("tr");
    let nCell = document.createElement("td");
    nCell.textContent = character.getName(); // use the getName method
    newR.appendChild(nCell);
    tb.appendChild(newR); // append to tbody, not null error

    setNameToDisplay(character.getName());
  }

  function displayChar() {
    document.querySelector("#name").style.display = "flex";
    document.querySelector("#charD").style.display = "flex";
    document.querySelector("#name").textContent = nameToDisplay;
  }

  return (
    <main className="container-fluid">
      <table className="table" id="cTable">
        <thead className="th">
          <tr className="row">
            <th><b>Your Characters</b></th>
          </tr>
        </thead>
        <tbody className="tb" id="tb">
          <tr className="row">
            <td>
              Example: Henry Porter <button className="button" type="button" onClick={displayChar}>Display</button>
            </td>
          </tr>
        </tbody>
      </table>
      <h1 id="name">{nameToDisplay}</h1>
      <div id="charD">
                <div id="descript">
                    <h2 id="d1">Race</h2>
                    <p id="d2">Human</p>
                    <h2 id="d1">Class</h2>
                    <p id="d2">Wizard</p>
                    <h2 id="d1">Alignment</h2>
                    <p id="d2">Neutral Good</p>
                    <h2 id="d1">Background</h2>
                    <p id="d2">Folk Hero</p>
                    <p></p>
                </div>
                <div id="stats">
                    <h2 id="a1">Strength</h2>
                    <p id="a2">9</p>
                    <h2 id="a1">Constitution</h2>
                    <p id="a2">10</p>
                    <h2 id="a1">Dexterity</h2>
                    <p id="a2">13</p>
                    <h2 id="a1">Intelligence</h2>
                    <p id="a2">17</p>
                    <h2 id="a1">Wisdom</h2>
                    <p id="a2">12</p>
                    <h2 id="a1">Charisma</h2>
                    <p id="a2">14</p>
                </div>
            </div>
        </main>
  );
}