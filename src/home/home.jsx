import React from 'react';
import './home.css';

export function Home() {
  //cdice file
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

  //sdice file
  const nums = [1, 2, 3, 4, 5, 6];
  let s_clicks = 6;
  let total = 0;
  let lowest = 6;
  let ability_scores = new Map();
  let ddm = document.querySelector("#ability-btn").disabled = true;

  function generateRoll() {
      let tdisplay = document.querySelector("#total");
      let rleft = document.querySelector("#rolls-left")
      let table = document.getElementById("statT");
      if (clicks == 1) {
          if (s_clicks != 0) {
              s_clicks -= 1;
              rleft.innerHTML = "Rolls Left: " + s_clicks.toString();
              for (let i = 0; i < 4; i++) {
                  tdata = table.rows[0].cells[i];
                  let roll_num = nums[Math.floor(Math.random() * nums.length)]; // will get random val from nums
                  tdata.innerHTML = roll_num;
                  total += roll_num;
                  if (roll_num < lowest) {
                      lowest = roll_num;
                  }
                  if (i == 3) {
                      total -= lowest;
                      lowest = 6;
                  }
              } 
              tdisplay.innerHTML = "Total: " + total;
              document.querySelector("#ability-btn").disabled = false;
              document.querySelector("#stat-btn").disabled = true;
          }
      }
  }

  function dropdownMenu() {
      if (s_clicks != 6) {  
      let element = document.getElementById("ability-names");
      ability_scores.set(element[element.selectedIndex].value, total);
      element.remove(element.selectedIndex);
      document.querySelector("#ability-btn").disabled = true;
      document.querySelector("#stat-btn").disabled = false;
      ddm_chosen = true;
      total = 0;
      if (s_clicks == 0) {
          //const jsonAbilities = JSON.stringify(Array.from(ability_scores));
          //localStorage.setItem('Stats', jsonAbilities);
          let abtn = document.querySelector("#ability-btn");
          document.querySelector("#ability-btn").disabled = false;
          document.querySelector("#ability-names").remove();
          abtn.value = "Move to Name Character";
          abtn.onclick = moveToNaming;
      }
    }
  }

  function moveToNaming() {
      // remove all elements
      document.querySelector("#charT").remove();
      document.querySelector("#statT").remove();
      document.querySelector("#cbtn").remove();
      document.querySelector("#stat-btn").remove();
      document.querySelector("#total").remove();
      document.querySelector("#rolls-left").remove();
      // change title
      document.getElementById("title").innerHTML = "Name Your Character";
      // display hidden input field
      document.querySelector("#nfield").style.display = "flex";
      // change btn
      document.querySelector("#ability-btn").value = "Submit to Archive";
      document.querySelector("#ability-btn").onclick = storeArchive;
  }
  
  return (
    <main className="container-fluid" id="main">
          <h1 id="title">Create Your Character</h1>
          <div>
              <table id="charT">
                  <tr>
                      <td id="r">Race</td>
                      <td id="c">Class</td>
                      <td id="a">Alignment</td>
                      <td id="b">Background</td>
                  </tr>
              </table>
          </div>
          <div id="nfield">
              <input type="text" id="cname" placeholder="Name" required/>
          </div>
          <div>
              <button className="button" id="cbtn" onclick={generateChar()}>Roll Here</button>
          </div>
          <div>
              <table id="statT">
                  <tr>
                      <td className="num">1</td>
                      <td className="num">2</td>
                      <td className="num">3</td>
                      <td className="num">4</td>
                  </tr>
              </table>
              <button className="button" id="stat-btn" onclick={generateRoll()}>Roll Stats</button> 
          </div>
          <div className="under-stats">
              <p className="total" id="total">Total: 9</p>
          </div>
          <div className="under-stats">
              <form id="myForm">
              <select name="ability-names" id="ability-names" required>
                  <option value="Strength">Strength</option>
                  <option value="Constitution">Constitution</option>
                  <option value="Dexterity">Dexterity</option>
                  <option value="Intelligence">Intelligence</option>
                  <option value="Wisdom">Wisdom</option>
                  <option value="Charisma">Charisma</option>
              </select>
              <input className="button" type="button" id="ability-btn" onclick={dropdownMenu()} value="Click to Assign Stat"/>
              </form>
          </div>
          <div>
              <p id="rolls-left">Rolls Left: 6</p>
          </div>
      </main>
  );
}