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

function storeArchive() {
    document.querySelector("#ability-btn").disabled = true; // turn off button
    const cName = document.querySelector("#cname"); //get the name they made
    // store local storage data into archive
    const character = new Char(cName.value, JSON.stringify(Array.from(charDetails)), JSON.stringify(Array.from(ability_scores))); // create an obj
    localStorage.setItem(cName.value, JSON.stringify(character)); //store the obj into local storage
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