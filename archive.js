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
    const character = new Char(cName.value, charDetails); // create an obj
    console.log(character.get_details);
    localStorage.setItem(cName.value, JSON.stringify(character)); //store the obj into local storage
    window.location.href = "archive.html";
}

function displayChar() {
    document.querySelector("#name").style.display = "flex";
    document.querySelector("#charD").style.display = "flex";
    document.querySelector("#name").value = character.get_name;
}