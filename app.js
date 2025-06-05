let gameSeq = [];
let userSeq = [];
let btns = ["red" ,"yellow" ,"green" ,"purple"];

let started = false;
let level = 0;
let h3 = document.querySelector('h3');

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game is Started...");
        started = true;
    }
    levelUp();
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout( function(){
        btn.classList.remove("flash");
     }, 250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
     }, 250);
}
function levelUp(){
    userSeq=[];
    level++;
    h3.innerText = `Level ${level}`;
    let randIndx = Math.floor(Math.random() *3);
    let randColor = btns[randIndx];
    let randBtn = document.querySelector(`.${randColor}`);
    //console.log(randIndx);
    //console.log(randColor);
    //console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}
function checkAns(idx){
    //console.log("Current level is" , level);
    if(userSeq[idx] === gameSeq[idx]){
        //console.log("Same seq..");
        if(gameSeq.length==userSeq.length){
            setTimeout( levelUp, 1000);
        }
    }else{
        h3.innerHTML =`GAME OVER!! Your score is <b> ${level} </b><br> Press any key to start..`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}
function btnPress(){
    console.log(this);
    let btn=this;
    userFlash(btn);
    
    userColor = btn.getAttribute("id");
    //console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started = false;
    gameSeq = [];
    userseq = [];
    level = 0;
}