var timer = 60;
var score = 0;
var hitrn = 0;
function runTimer() {
    var tm = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector(".timerval").textContent = timer;
        }
        else {
            clearInterval(tm);
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER <h1>`
        }
    }, 1000);
}
function makebubble() {
    var clutter = ""
    for (i = 1; i <= 167; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}
function getnewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector(".hitval").textContent = hitrn;
}
function calScore() {
    score += 10;
    document.querySelector(".scoreval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var clicknum = Number(dets.target.textContent);
    if (clicknum === hitrn) {
        calScore();
        makebubble();
        getnewHit();
    }
})


runTimer() //timer lagane k liye
makebubble()// bubble banane ke liye
getnewHit()
calScore() 