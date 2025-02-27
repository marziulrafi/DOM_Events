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

// Option 4
const btnMakePlum = document.getElementById('btn-plum');
btnMakePlum.onclick = makePlum;

function makePlum() {
    document.body.style.backgroundColor = 'plum'
}