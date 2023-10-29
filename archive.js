class Char { 
    constructor(name, details) {
        this.name = name;
        this.details = details;
    }

}

function storeArchive() {
    document.querySelector("#ability-btn").disabled = true;
    const cName = document.querySelector("#cname");
    document.querySelector("#go-to").style.display = "flex";
    // store local storage data into archive
    const character = new Char(cName.value, charDetails);
    localStorage.setItem("Character", character);
}

function displayChar() {

}