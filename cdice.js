var baseRaces = [
    'Dwarf', 'Elf', 'Halfling',
    'Human', 'Dragonborn', 'Gnome',
    'Half-Elf', 'Half-Orc', 'Tiefling'
];
var baseClasses = [
    'Barbarian', 'Bard', 'Cleric', 
    'Druid', 'Fighter', 'Monk', 
    'Paladin', 'Ranger', 'Rogue', 
    'Sorcerer', 'Warlock', 'Wizard'
];
var alignments = [
    'Lawfule Good', 'Neutral Good', 'Chaotic Good',
    'Lawful Neutral', 'True Neutral', 'Chaotic Neutral',
    'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'
];
var baseBackgrounds = [
    'Acolyte', 'Charlatan', 'Criminal',
    'Entertainer', 'Folk Hero', 'Guild Artisan',
    'Hermit', 'Noble', 'Outlander', 'Sage', 'Sailor',
    'Soldier', 'Urchin'
];

var clicks = 0;

function generateChar() {
    if (clicks == 0 ) {
        clicks = 1;
        let table = document.getElementById("charT");
        table.rows[0].cells[0].innerHTML = baseRaces[Math.floor(Math.random() * baseRaces.length)];
        table.rows[0].cells[1].innerHTML = baseClasses[Math.floor(Math.random() * baseClasses.length)];
        table.rows[0].cells[2].innerHTML = alignments[Math.floor(Math.random() * alignments.length)];
        table.rows[0].cells[3].innerHTML = baseBackgrounds[Math.floor(Math.random() * baseBackgrounds.length)];
    }
}