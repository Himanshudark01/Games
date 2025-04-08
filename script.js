// forEach

// var arr = [1,2,3,4];
// arr.forEach(function(val){
//     console.log(val + " Hello");
// });


// Map

// var arr = [1,2,3,4];
// var ans = arr.map(function(val){
//     return val * 3;
// });
// console.log(ans);


// Filter

// var arr = [1,2,3,4];
// var ans = arr.filter(function(val){
//     if(val >= 2) {return true;}
//     else return false;
// })
// console.log(ans);

// Find (Any value find)

// var arr = [1,2,3,4];

// var ans = arr.find(function(val){
//     if(val === 2) return val;
// })
// console.log(ans);


//        Object

// var intro = {
//     name : "Himu",
//     age : 25,
//     fullNam : "HIMU K"
// }
// console.log(intro);


////////// Game js code //////

var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {
    
var clutter = "";
for(var i = 1; i <= 70; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    var timerint = setInterval(function () {
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000);
}

document.querySelector("#pbtm")
.addEventListener("click", function (dets) {
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

runTimer();
makeBubble();
getNewHit();
// increaseScore();