// Computer choice section
function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber >=0 & randomNumber<= .33) {
        return 'rock'
    } else if(randomNumber >= .34 & randomNumber<= .66){
        return 'paper'
    } else if(randomNumber >= .67 & randomNumber<= 1){
        return 'scissor'
    }
}

console.log(getComputerChoice())

// Player choice selection 

function getHumanChoice() {
    let userInput = prompt("Enter rock, paper, or scissor:").toLowerCase(); 
    
    if (userInput === "rock" || userInput === "paper" || userInput === "scissor") {
        return userInput; 
    } else {
        return "Invalid choice";  
    }
}

alert(getHumanChoice());

// Versus section

function playRound(getHumanChoice,getComputerChoice){
    if ( getHumanChoice === getComputerChoice) {
        return alert('Tie!')
    } else if (
        getHumanChoice === 'rock' && getComputerChoice === 'scissor' ||
        getHumanChoice === 'paper' && getComputerChoice === 'rock' ||
        getHumanChoice === 'scissor' && getComputerChoice === 'paper')
    {
        return alert('Human Wins!')
    } else {
        return alert('Computer wins!')
    }
}

playRound();

let humanScore = 0;
let computerScore = 0;
