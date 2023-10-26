const nums = [1, 2, 3, 4, 5, 6];
let s_clicks = 6;
let total = 0;
let lowest = 6;
let ability_scores = new Map();
let ddm_chosen = false;
let ddm = document.querySelector("#ability-names").disabled = true;

function generateRoll() {
    let tdisplay = document.querySelector("#total");
    let rleft = document.querySelector("#rolls-left")
    let table = document.getElementById("statT");
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
            }
        } 
        tdisplay.innerHTML = "Total: " + total;
        document.querySelector("#ability-names").disabled = false;
        if (!ddm_chosen) {
            document.querySelector("#stat-btn").disabled = true;
        }
    }
}

function dropdownMenu(total) {
    if (s_clicks != 6) {  
    let element = document.getElementById("ability-names");
    ability_scores.set(element.selectedIndex, total);
    element.remove(element.selectedIndex);
    document.querySelector("#ability-names").disabled = true;
    document.querySelector("#stat-btn").disabled = false;
    ddm_chosen = true;
    total = 0;
    }
}