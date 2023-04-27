function getComputerChoice() {
    let choice = Math.ceil(Math.random() * 9);

    if (choice > 6) {
        return 'Rock';
    }
    else if (choice > 3) {
        return 'Scissors';
    }
    else {
        return 'Paper';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "It's a tie!";
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") {
        return "You Win! Rock beats Paper";
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper") {
        return "You Win! Scissors beats Paper";
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") {
        return "You Win! Paper beats Rock";
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    do {
        let playerInput = prompt("Make your choice: Rock, Paper or Scissors");
        let computerChoice = getComputerChoice();
        let result = playRound(playerInput, computerChoice);
        if (result.includes('Win')) {
            playerScore++;
        } else if (result.includes('Lose')) {
            computerScore++
        }
        alert(`${result}\n\nYour score: ${playerScore}\nComputer score: ${computerScore}`)
    }
    while (playerScore < 5 && computerScore < 5);
}

game();