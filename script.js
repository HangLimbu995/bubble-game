

var timer = 6;
var score = 0;
var hitnum = 0;

function hitvalue() {
    hitnum = Math.floor(Math.random() * 10)
    document.querySelector('#hitval').textContent = hitnum
}

function timevalue() {
    const timeInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector('#timeval').textContent = timer
        } else {
            document.querySelector('#pbottom').innerHTML = `
            <div>
            <h1 id='gover'>Game Over <br/>score:${score}<br/></h1>
            <button id="newbtn">New Game</button>
            </div>
            `;
            newgame();
            clearInterval(timeInterval);
        }
    }, 1000);


    // return () => clearInterval(timeInterval)
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

function newgame() {
    document.querySelector('#newbtn').addEventListener('click', () => {
        // console.log('hello')
        window.location.reload()
    })
}

document.addEventListener("DOMContentLoaded", () => {
    makeBubble();
    hitvalue();
    timevalue();
})