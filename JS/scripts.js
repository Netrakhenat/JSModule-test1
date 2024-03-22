//func to display rules on clicking button

function displayRules() {
  var Popup = document.getElementById("pop-up");
  Popup.style.display = "block"; 
  console.log("clicked");
  //TO CLOSE RULES
  document.getElementById("exitbutton").addEventListener("click",function(){Popup.style.display="none";}); //INSIDE FUNC BECAUSE X BUTTON GETS AVAILABLE ONLY AFTER LIST IS DISPLAYES.IF WRITTEN OUTSIDE SHOWS ERROR
}

let score=JSON.parse(localStorage.getItem("PCboard"));
let PCscore=document.getElementById("PCscore");
if(score){
  PCscore.innerText=score;
}
let count=0; 

let icons=["rock","paper","scissors"];

function pickedHand(icon){
  let choices= document.getElementById("choices");
  choices.style.display="none";

  let result = document.getElementById("after-pick");
  result.style.display = "flex";
  let leftDiv = document.querySelector(".left-div");
  if(icon =="rock"){
    document.getElementById("player-choice-img").src ="images/rock.png";
    leftDiv.style.borderColor = "#0074B6";
  }else if(icon =="paper"){
    document.getElementById("player-choice-img").src ="images/paper.png";
    leftDiv.style.borderColor = "#FFA943";
  }else{
    document.getElementById("player-choice-img").src ="images/scissor.png";
    leftDiv.style.borderColor = "#BD00FF";
  }
  compChoice(icon);
};

function compChoice(icon){
  let PCchoice = icons[Math.floor(Math.random() * 3)];
  let rightDiv = document.querySelector(".right-div");
  if(PCchoice =="rock"){
    document.getElementById("PC-choice-img").src ="images/rock.png";
    rightDiv.style.borderColor = "#0074B6";
  }else if(PCchoice =="paper"){
    document.getElementById("PC-choice-img").src ="images/paper.png";
    rightDiv.style.borderColor = "#FFA943";
  }else{
    document.getElementById("PC-choice-img").src ="images/scissor.png";
    rightDiv.style.borderColor = "#BD00FF";
  }

  results(icon, PCchoice);
  
};

function results(icon, PCchoice){
  if(icon == PCchoice){
    document.getElementById("tie-msg").style.display = "flex";
  }
  else if(icon=="paper" && PCchoice=="rock"){
    document.getElementById("youwin-msg").style.display="flex";
    document.querySelector(".rulesButton").style.left= "986px";
    document.getElementById("nextButton").style.display= "flex";
  }
  else if(icon=="paper" && PCchoice=="scissor"){
    document.getElementById("youlose-msg").style.display = "flex";
  }
  else if(icon=="rock" && PCchoice=="paper"){
    document.getElementById("youlose-msg").style.display = "flex";
  }
  else if(icon=="rock" && PCchoice=="scissor"){
    document.getElementById("youwin-msg").style.display="flex";
    document.querySelector(".rulesButton").style.left= "986px";
    document.getElementById("nextButton").style.display= "flex";
  }
  else if(icon=="scissors" && PCchoice=="rock"){
    document.getElementById("youlose-msg").style.display = "flex";
  }
  else{
    document.getElementById("youwin-msg").style.display="flex";
    document.querySelector(".rulesButton").style.left= "986px";
    document.getElementById("nextButton").style.display= "flex";
  }
}

let nextButton=document.getElementById("nextButton");
nextButton.addEventListener("click",function(){
  document.location.href = 'hurray.html';
})

function playAgain(){
  let choices= document.getElementById("choices");
  choices.style.display="flex";
  let result = document.getElementById("after-pick");
  result.style.display = "none";
}