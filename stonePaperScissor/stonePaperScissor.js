let userScore=0;
let compScore=0;

const options=document.querySelectorAll(".option");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=()=>{
    msg.innerText="Game was Draw.Play again";
    msg.style.backgroundColor="#81b31";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`you Win! your${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`you lost! comp${userChoice} beats your${compChoice} `;
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>
{
  const compChoice=genCompChoice();
  if(userChoice===compChoice){
    drawGame();
  }
  else{
    let userWin=true;
    if(userChoice==="rock"){
        userWin=compChoice==="paper"?false:true;    
    }else if(userChoice==="paper"){
        userWin=compChoice==="scissors"?false:true;
    }
    else{
        userChoice=compChoice==="rock"?false:true;
    }
   showWinner(userWin,userChoice,compChoice);
  }
}

options.forEach((option) => {
    option.addEventListener("click", () => {
      const userChoice = option.getAttribute("id");
      playGame(userChoice);
    });
  });
