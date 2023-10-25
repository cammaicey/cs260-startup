const nums = [1, 2, 3, 4, 5, 6];
let s_clicks = 6;

function generateRoll() {
    let rolls = [];
    let total = 0;
    let tdisplay = document.getElementById("total");
    let rleft = document.getElementById("rolls-left")
    let table = document.getElementById("statT");
    if (s_clicks != 0) {
        s_clicks -= 1;
        rleft = "Rolls Left: " + s_clicks.toString();
        for (let i = 0; i < 4; i++) {
            tdata = table.rows[0].cells[i];
            let roll_num = nums[Math.floor(Math.random() * nums.length)]; // will get random val from nums
            tdata.innerHTML = roll_num;
            rolls.push(roll_num);
        } 
        let low = rolls[0];
        for (let i = 0; i < 4; i++) { // access all rolls
            total += rolls[i]; // add rolls together
            if (rolls[i] < low) { // keep track of the lowest roll
                low = rolls[i];
            }
            if (i == 3) { // end of rolls?
                total -= low; // subtract lowest roll
            }
        }
        tdisplay = "Total: " + total;
    }
}