const nums = [1, 2, 3, 4, 5, 6];
let s_clicks = 6;
let total = 0;
let lowest = 6;

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
        total = 0;
    }
}