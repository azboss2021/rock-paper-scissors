let userScore = 0;
let computerScore = 0;
let gameOver = false;
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const content_div = document.querySelector(".content");
const score_div = document.createElement("div");
const userScore_div = document.createElement("div");
const computerScore_div = document.createElement("div");;
const result_div = document.createElement("div");;
const retry_button = document.createElement("button");;

function computerPlay () {
    let choice = Math.floor(Math.random() * 3);
    if(choice === 0){
        choice = "r";
    } else if (choice === 1){
        choice = "p";
    } else if (choice === 2){
        choice = "s";
    }
    return choice;
}

function showElements() {
    score_div.appendChild(userScore_div);
    score_div.appendChild(computerScore_div);
    content_div.appendChild(score_div);
    content_div.appendChild(result_div);
    userScore_div.textContent ="User Score: " + userScore;
    computerScore_div.textContent ="Computer Score: " + computerScore;
    score_div.classList.add("scoreContent");
    userScore_div.classList.add("score");
    computerScore_div.classList.add("score");
    result_div.classList.add("result");
}

function updateScore () {
    userScore_div.textContent="User Score: " + userScore;
    computerScore_div.textContent="Computer Score: " + computerScore;
}

function restart() {
    userScore = 0;
    computerScore = 0;
    updateScore();
    gameOver=false;
}

function win() {
    result_div.textContent = "You won " + userScore + " to " + computerScore + "!!!";
    gameOver = true;
    retry_button.classList.add("item");
    retry_button.textContent = "Retry?";
    content_div.appendChild(retry_button);
    retry_button.addEventListener('click', () => restart());
}

function lose() {
    result_div.textContent = "You lost " + userScore + " to " + computerScore + "...";
    gameOver = true;
    retry_button.classList.add("item");
    retry_button.textContent = "Retry?";
    content_div.appendChild(retry_button);
    retry_button.addEventListener('click', () => restart());
}

function endRound (result, endResult) {
    if(userScore===0){
        showElements();
    }
    if(result==="w"){
        userScore++;
        updateScore();
        result_div.textContent=endResult;
    } else if(result==="l"){
        computerScore++;
        updateScore();
        result_div.textContent=endResult;
    } else if(result==="d"){
        result_div.textContent=endResult;
    }

    if(userScore>=5){
        win();
    } else if(computerScore>=5){
        lose();
    }
}

function game (userChoice) {
    const computerChoice = computerPlay();
    let endResult = userChoice+computerChoice
    if(!gameOver){
        switch(endResult) {
            case "rs":
                endResult="Rock beats Scissors!"
            case "pr":
                endResult="Paper beats Rock!"
            case "sp":
                endResult="Scissors beats Paper!"
                endRound("w", endResult);
                break;
            case "rp":
                endResult="Rock Lost to Paper!"
            case "ps":
                endResult="Paper Lost to Scissors!"
            case "sr":
                endResult="Scissors Lost to Rock!"
                endRound("l", endResult);
                break;
            case "rr":
            case "pp":
            case "ss":
                endResult="It's a Draw!"
                endRound("d", endResult);
                break;
        }
    }
}

function main () {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}

main();