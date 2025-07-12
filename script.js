// var timer = 60;
// var score = 0;
// var hitrn = 0;
// function runTimer() {
//     var tm = setInterval(function () {
//         if (timer > 0) {
//             timer--;
//             document.querySelector(".timerval").textContent = timer;
//         }
//         else {
//             clearInterval(tm);
//             document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER <h1>`
//         }
//     }, 1000);
// }
// function makebubble() {
//     var clutter = ""
//     for (i = 1; i <= 167; i++) {
//         var rn = Math.floor(Math.random() * 10)
//         clutter += `<div class="bubble">${rn}</div>`;
//     }
//     document.querySelector("#pbtm").innerHTML = clutter;
// }
// function getnewHit() {
//     hitrn = Math.floor(Math.random() * 10);
//     document.querySelector(".hitval").textContent = hitrn;
// }
// function calScore() {
//     score += 10;
//     document.querySelector(".scoreval").textContent = score;
// }

// document.querySelector("#pbtm").addEventListener("click", function (dets) {
//     var clicknum = Number(dets.target.textContent);
//     if (clicknum === hitrn) {
//         calScore();
//         makebubble();
//         getnewHit();
//     }
// })


// runTimer() //timer lagane k liye
// makebubble()// bubble banane ke liye
// getnewHit()
// calScore() 

let timer = 60;
let score = 0;
let hitrn = 0;
let interval; // To store the setInterval reference

function runTimer(duration) {
    timer = duration;
    document.querySelector(".timerval").textContent = timer;
    interval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector(".timerval").textContent = timer;
        } else {
            clearInterval(interval);
            document.querySelector("#pbtm").innerHTML = `
                <div class="game-over-screen">
                    <h1>🎮 GAME OVER</h1>
                    <p>Your Score: <strong>${score}</strong></p>
                    <button id="restart-btn">Restart</button>
                    <button id="quit-btn">Quit to Home</button>
                </div>
            `;
            //  last me quit or restart krne k liye event listner click krne par level & main screen pe
            setTimeout(() => {
                document.getElementById("restart-btn").addEventListener("click", () => {
                    // Show level screen
                    document.getElementById("fullscreen").style.display = "none";
                    document.getElementById("level-screen").style.display = "flex";
                });

                document.getElementById("quit-btn").addEventListener("click", () => {
                    // Show intro screen
                    document.getElementById("fullscreen").style.display = "none";
                    document.getElementById("intro-screen").style.display = "flex";
                });
            }, 100);
        }
    },1000);
}



function makeBubble() {
    let clutter = "";
    for (let i = 1; i <= 167; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector(".hitval").textContent = hitrn;
}

function calScore() {
    score += 10;
    document.querySelector(".scoreval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
    let clicknum = Number(dets.target.textContent);
    if (clicknum === hitrn) {
        calScore();
        makeBubble();
        getNewHit();
    }
});

//  Game start function

function startGame(duration) {
    // Reset values
    score = 0;
    timer = duration;
    document.querySelector(".scoreval").textContent = score;
    document.querySelector(".timerval").textContent = timer;

    alert("🎯 Game Instructions:\nClick on the number shown in the 'Hit' section as fast as you can!");

    // Show fullscreen
    document.getElementById("fullscreen").style.display = "flex";

    makeBubble();
    getNewHit();
    runTimer(duration);
}


// Handle UI transitions and start game
document.getElementById("st-btn").addEventListener("click", () => {
    document.getElementById("intro-screen").style.display = "none";
    document.getElementById("level-screen").style.display = "flex";
});

document.querySelectorAll(".level").forEach(btn => {
    btn.addEventListener("click", () => {
        const time = parseInt(btn.getAttribute("data-time"));
        document.getElementById("level-screen").style.display = "none";
        document.getElementById("fullscreen").style.display = "flex";
        startGame(time);
    });
});

