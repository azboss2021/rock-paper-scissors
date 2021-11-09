function computerPlay () {
    let choice = Math.floor(Math.random() * 3);
    if(choice === 0){
        choice = "Rock";
    } else if (choice === 1){
        choice = "Paper";
    } else if (choice === 2){
        choice = "Scissors";
    }
    return choice;
}

function playRound (playerSelection, computerSelection) {
    let finalPrompt;
    if(playerSelection==="rock" && computerSelection==="scissors"
    || playerSelection==="paper" && computerSelection==="rock"
    || playerSelection==="scissors" && computerSelection==="paper"){
        finalPrompt = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if(playerSelection==="scissors" && computerSelection==="rock"
    || playerSelection==="rock" && computerSelection==="paper"
    || playerSelection==="paper" && computerSelection==="scissors"){
        finalPrompt = `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else finalPrompt = `It's a Draw! ${playerSelection} cannot beat ${computerSelection}`;
    return finalPrompt;
}

function game () {
    let score = 0;
    for(let i=0;i<5;i++){
        let playerChoice = prompt("Enter Rock, Paper, or Scissors: ").toLowerCase();
        let computerChoice = computerPlay().toLowerCase();
        if(playRound(playerChoice,computerChoice).includes("Win")){
            score++;
        }
        console.log(playRound(playerChoice, computerChoice));    
    }
    if(score >= 3){
        console.log("YOU WIN!");
    } else {
        console.log("YOU LOST!");
    }
}

game();