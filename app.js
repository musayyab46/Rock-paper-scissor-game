// first we will create a variable to store the user score
//second variable we need to store the computer score 
//modular way is the way of creating functions for different usage
let userScore=0;
let compScore=0;
const msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");
let userScorePara=document.querySelector("#userscore");
let compScorePara=document.querySelector("#computerscore");

const drawGame=()=>{
    console.log("game was draw.");
    msg.innerText="The game was draw";
    document.getElementById("msg").style.backgroundColor="#B8860B";

}
const showWinner=(userWin,userchoice,compChoice)=>{
    if(userWin){
       userScore++;
       userScorePara.innerText=userScore;
        //console.log("You Won the game");
        msg.innerText=`You win! ${userchoice} beats ${compChoice}`;
        document.getElementById("msg").style.backgroundColor="green";

    }
    else{
       compScore++;
       compScorePara.innerText=compScore;
        //console.group("You lost the game");
        msg.innerText=`You Lose! ${compChoice} beats ${userchoice}`;
        document.getElementById("msg").style.backgroundColor="red";
    }
}
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
    //rock,paper,scissors
}
const playGame=(userchoice)=>{
    console.log("user choice = ",userchoice);
    //Generate computer choice
    const compChoice=genCompChoice();
    console.log("computer choice = ",compChoice);
    if(userchoice===compChoice){
        //Draw Game
        drawGame();
    }
    else{
        let userWin=true;
        if(userchoice==="rock"){
            //scissors,paper
            userWin=compChoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userchoice,compChoice);
    }


}
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);
        //console.log(`choice was clicked ${userchoice}`);

    })
})
