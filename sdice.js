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
    charDetails.set(element[element.selectedIndex].value, total);
    element.remove(element.selectedIndex);
    document.querySelector("#ability-btn").disabled = true;
    document.querySelector("#stat-btn").disabled = false;
    ddm_chosen = true;
    total = 0;
    if (s_clicks == 0) {
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