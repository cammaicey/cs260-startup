function storeArchive() {
    const cName = document.querySelector("#cname");
    localStorage.setItem("Character Name", cName.value);
    document.querySelector("#go-to").style.display = "flex";
    // store local storage data into archive
}

function displayChar() {

}