const ROCK = 'ROCK',
    PAPER = 'PAPER',
    SCISSORS = 'SCISSORS';

const playerChoice = document.getElementById('player-choice');
const playerChoiceText = document.getElementById('player-choice-text');
const computerChoice = document.getElementById('computer-choice');
const computerChoiceText = document.getElementById('computer-choice-text');
const result = document.getElementById('result');

const gamesCount = document.getElementById('games-count');
const winCount = document.getElementById('win-count');

const btns = document.querySelectorAll('.btn');
let computerSelection, playerSelection;
let gamesPlayed = 0,
    gamesWon = 0;


btns.forEach(btn => btn.addEventListener('click', (e) => {
    playerSelection = e.target.id;
    computerSelection = '';
    var playerSelectedImage = document.createElement('img');
    switch (playerSelection) {
        case 'rock':
            playerSelectedImage.src = './img/rock.svg';
            break;
        case 'paper':
            playerSelectedImage.src = './img/paper.svg';
            break;
        case 'scissors':
            playerSelectedImage.src = './img/scissors.svg';
        default:
            break;
    }

    playerChoice.innerHTML = playerSelectedImage.outerHTML;
    playerChoiceText.innerHTML = playerSelection.toUpperCase();
    generateComputerChoice();
    generateWinRate();

    gamesPlayed++;
    gamesCount.innerHTML = gamesPlayed;
}));

function generateComputerChoice() {
    let choice = Math.floor(Math.random() * btns.length);
    var computerSelectedImage = document.createElement('img');

    switch (choice) {
        case 0:
            computerSelection = 'rock';
            computerSelectedImage.src = './img/rock.svg';
            break;
        case 1:
            computerSelection = 'paper';
            computerSelectedImage.src = './img/paper.svg';
            break;
        case 2:
            computerSelection = 'scissors';
            computerSelectedImage.src = './img/scissors.svg';
        default:
            break;
    }
    computerChoice.innerHTML = computerSelectedImage.outerHTML;
    computerChoiceText.innerHTML = computerSelection.toUpperCase();
}

function generateWinRate() {
    //console.log('playerSelection:'+playerSelection+"  computerSelection"+computerSelection);
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    if (playerSelection == computerSelection) {
        result.style.color = "#0000FF";
        result.innerHTML = 'Match is a tie!<br/> (You & Computer selected ' + playerSelection + ')';
    } else {
        switch (playerSelection) {
            case ROCK:
                switch (computerSelection) {
                    case PAPER:
                        result.style.color = "#FF0000";
                        result.innerHTML = 'You lost!<br/> (' + computerSelection + ' wraps ' + playerSelection + ')';
                        break;
                    case SCISSORS:
                        gamesWon++;
                        result.style.color = "#00FF00";
                        result.innerHTML = 'You Win!<br/>(' + playerSelection + ' breaks ' + computerSelection + ')';
                        break;
                }
                break;
            case PAPER:
                switch (computerSelection) {
                    case SCISSORS:
                        result.style.color = "#FF0000";
                        result.innerHTML = 'You lost!<br/>(' + computerSelection + ' cuts ' + playerSelection + ')';
                        break;
                    case ROCK:
                        gamesWon++;
                        result.style.color = "#00FF00";
                        result.innerHTML = 'You Win!<br/>(' + playerSelection + ' wraps ' + computerSelection + ')';
                        break;
                }
                break;
            case SCISSORS:
                switch (computerSelection) {
                    case ROCK:
                        result.style.color = "#FF0000";
                        result.innerHTML = 'You lost!<br/>(' + computerSelection + ' breaks ' + playerSelection + ')';
                        break;
                    case PAPER:
                        gamesWon++;
                        result.style.color = "#00FF00";
                        result.innerHTML = 'You Win!<br/>(' + playerSelection + ' cuts ' + computerSelection + ')';
                        break;
                }
                break;
        }
    }
    winCount.innerHTML = gamesWon;
}