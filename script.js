

var timmer = 6;
var score = 0;
var hitnum = 0;

function hitvalue() {
    hitnum = Math.floor(Math.random() * 10)
    document.querySelector('#hitval').textContent = hitnum
}

function timevalue() {
    const timeInterval = setInterval(() => {
        if (timmer > 0) {
            timmer--;
            document.querySelector('#timeval').textContent = timmer
        } else {
            document.querySelector('#pbottom').innerHTML = `<h1 id='gover'>Game Over <br/>score:${score}</h1>`
        }
    }, 1000)

    return () => clearInterval(timeInterval)
}

function scorevalue() {
    score += 10;
    document.querySelector('#scoreval').textContent = score
}
function makeBubble() {
    var clutter = "";

    for (let i = 1; i < 301; i++) {
        const num = Math.floor(Math.random() * 10)
        clutter += `<div class="ball">${num}</div>`
    }

    document.querySelector('#pbottom').innerHTML = clutter
}

document.querySelector('#pbottom').addEventListener('click', (dets) => {
    const clickedNum = Number(dets.target.textContent)
    if (hitnum === clickedNum) {
        scorevalue();
        hitvalue();
        makeBubble();
    }
})

document.addEventListener("DOMContentLoaded", () => {
    makeBubble();
    hitvalue();
    timevalue();
})