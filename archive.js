class Char { 
    constructor(name, details) {
        this.name = name;
        this.details = details;
    }
    get_name() {
        return this.name;
    }
    get_details(attr) {
        
    }
}

function storeArchive() {
    document.querySelector("#ability-btn").disabled = true; // turn off button
    const cName = document.querySelector("#cname"); //get the name they made
    // store local storage data into archive
    const character = new Char(cName.value, charDetails);
    localStorage.setItem(cName.value, JSON.stringify(character));
    // 
    let t = document.getElementById("tb");
    let row = document.createElement("tr");
    let td = document.createElement("td");
    const dbtn = document.createElement('button');
    dbtn.textContent = 'Display';
    td.innerHTML = cName + ' ' + dbtn;
    row.innerHTML = td;
    t.innerHTML = row;
    window.location.href = "archive.html";
}

function displayChar() {
    document.querySelector("#name").style.display = "flex";
    document.querySelector("#charD").style.display = "flex";
    document.querySelector("#name").value = character.get_name;
}