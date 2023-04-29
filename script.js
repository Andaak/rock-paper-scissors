let playerScore = 0;
let computerScore = 0;


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


function addDom(playGame, choice) {
    const result = playGame(choice, getComputerChoice());
    if (result.includes('Win')) playerScore++;
    else if (result.includes('Lose')) computerScore++;
    const div = document.createElement('div');
    div.textContent = result;
    gameLog.appendChild(div);
    console.log(playerScore, computerScore)
    if (playerScore >= 5) {
        alert('Player wins!')
        playerScore = 0;
        computerScore = 0;
        gameLog.textContent = '';
    }
    else if (computerScore >= 5) {
        alert('Computer wins!')
        playerScore = 0;
        computerScore = 0;
        gameLog.textContent = '';
    }
}


const container = document.querySelector('body');

const buttons = document.createElement('div');
buttons.classList.add('buttons');

const gameLog = document.createElement('div');
gameLog.classList.add('gameLog')

const rock = document.createElement('button');
rock.id = 'rock';
rock.textContent = 'Rock';
buttons.appendChild(rock);
rock.addEventListener(
    'click',
    () => addDom(playRound, 'Rock'));

const paper = document.createElement('button');
paper.id = 'paper';
paper.textContent = 'Paper';
buttons.appendChild(paper);
paper.addEventListener(
    'click',
    () => addDom(playRound, 'Paper'));

const scissors = document.createElement('button');
scissors.id = 'scissors';
scissors.textContent = 'Scissors';
buttons.appendChild(scissors);
scissors.addEventListener(
    'click',
    () => addDom(playRound, 'Scissors'));


container.appendChild(buttons);
container.appendChild(gameLog);