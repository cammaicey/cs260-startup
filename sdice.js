var rolls = [];
var clicks = 0;
let total = 0;

function generateRoll() {
    if (clicks != 6) {
        clicks += 1;
        let table = document.getElementById("statT");
        const min = Math.ceil(1);
        const max = Math.floor(6);
        for (var i = 0; tdata = table.rows[0].cells[i]; i++) { //
            if (i < 4) {
            let num = Math.floor(Math.random() * (max - min + 1) + min);
            tdata = num;
            rolls.push(num);
            }
        } 
        let low = rolls[0];
        for (var i = 0; i < 4; i++) { // access all rolls
            total += rolls[i]; // add rolls together
            if (rolls[i] < low) { // keep track of the lowest roll
                low = rolls[i];
            }
            if (i == 3) { // end of rolls?
                total -= low; // subtract lowest roll
            }
        }
        let tdisplay = document.getElementsByClassName("total");
        tdisplay = "Total: " + total;
    }
}