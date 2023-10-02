let gameSeq = [];
let userSeq = [];
let h2 = document.querySelector("h2");
let color = ["yellow", "red", "purple", "green"];

//level-1 -->when you press key. print game started.
let started = false;
let level = 0;

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;

        levelUp();
    }
})

//level-2 --> random bottom will flash and in h2 element shows level-1
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level-${level}`;
    let rdmidx = Math.floor(Math.random()*3);
    let rdmColor = color[rdmidx];
    let colorClass = document.querySelector(`.${rdmColor}`);
    gameFlash(colorClass);
    gameSeq.push(rdmColor);
    console.log(gameSeq);
}

//random button flash
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}
//when user click buttom-then create flash on buttom
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(() => {
        btn.classList.remove("userFlash");
    }, 250);
}

//level-3-> add Event Listener
function btnPress() {
    // console.log(this);
    let btn = this;
    userFlash(btn);
   let userColor = btn.getAttribute("id");
   userSeq.push(userColor);

   checkAns(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

//level-4--> Matching the above two sequences (gameSeq,userSeq)
//in levelUp function create the random color, when random color created , we push that into gameSeq[]

//now check our user color is matching the game color or not
function checkAns(index){
  if(userSeq[index] == gameSeq[index]){
if(userSeq.length == gameSeq.length){
    setTimeout(levelUp, 1000);
}
  }else{
    h2.innerHTML = `Game over! your score was <b>${level}</b> </br>.Press any key to start.`;
    let bodyColor = document.querySelector("body");
    bodyColor.style.backgroundColor = "red";
    setTimeout(function(){
        bodyColor.style.backgroundColor = "white";
    },150)
    reset();
  }
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}