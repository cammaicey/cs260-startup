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
      document.querySelector("#ability-btn").disabled = true; // turn off button
      const cName = document.querySelector("#cname"); //get the name they made
      // store local storage data into archive
      const character = new Char(cName.value, JSON.stringify(Array.from(charDetails)), JSON.stringify(Array.from(ability_scores))); // create an obj
      saveChar(character);
      // make their spot on the table
      let t = document.querySelector("#cTable"); // ref to table
      let tb = document.querySelector("#tb"); // ref to tbody
      let newR = document.createElement("tr"); // makes row
      let nCell = document.createElement("td"); // makes data
      nCell.textContent = character.get_name; // adds name to td
      newR.appendChild(nCell);
    // tb.append(newR); // null error I think it's an issue with the tbody element
    // sends user to archive
      window.location.href = "archive.html";
  }

  function displayChar() {
      document.querySelector("#name").style.display = "flex";
      document.querySelector("#charD").style.display = "flex";
      document.querySelector("#name").value = character.get_name;
  }

  return (
    <main class="container-fluid">
            <table class="table" id="cTable">
                <thead class="th">
                    <tr class="row">
                        <th><b>Your Characters</b></th>
                    </tr>
                </thead>
                <tbody class="tb" id="tb">
                    <tr class="row">
                        <td>
                            Example: Henry Porter <button class="button" type="button" onclick="displayChar()">Display</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h1 id="name">Henry Porter</h1>
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