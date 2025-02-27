// Option 2
function makeYellow() {
    document.body.style.backgroundColor = 'yellow'
}
function makeRed() {
    document.body.style.backgroundColor = 'red'
}

// Option 3
const btnMakeBlue = document.getElementById('btn-blue');
btnMakeBlue.onclick = function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}

// Option 3 (Different)
const btnMakePlum = document.getElementById('btn-plum');
btnMakePlum.onclick = makePlum;

function makePlum() {
    document.body.style.backgroundColor = 'plum'
}

// Option 4
document.getElementById('btn-green').addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green'
})

// Mouseover
document.getElementById('btn-gold').addEventListener('mouseover', function() {
    document.body.style.backgroundColor = 'gold'
})