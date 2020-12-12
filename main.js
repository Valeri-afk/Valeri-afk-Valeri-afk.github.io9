let title = document.querySelector('.title__text');
let playerHand;
let computerHand;

const playButton = document.querySelector('.play-btn');
playButton.addEventListener('click', letsPlayFunction);
function letsPlayFunction() {
    title.innerHTML = 'Choose an option';
    this.style.display = 'none';
    createHandsFunction();
    buttonsFunction();
}


function createHandsFunction() {
    const handsBlock = document.querySelector('.hands-block');
    playerHand = document.createElement('img');
    playerHand.classList.add('player-hand');
    playerHand.src = '../rockreverse.jpg';
    playerHand.alt = "#";
    computerHand = document.createElement('img');
    computerHand.classList.add('computer-hand');
    computerHand.src = '../rock.jpg';
    computerHand.alt = "#";
    handsBlock.appendChild(playerHand);
    handsBlock.appendChild(computerHand);
}

function buttonsFunction() {
    let buttons = document.querySelectorAll('.button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = 'block';
        buttons[i].addEventListener('click', clickFunction);
    }
}
function clickFunction(event) {
    setHandsFunction(event);
     getResultFunction(event);
 }


function setHandsFunction(event) {
    playerHand.src = event.target.dataset.src;
    playerHand.setAttribute('data-choice', event.target.dataset.choice);
    if (parseInt(Math.random() * 3, 10) === 0) {
        computerHand.src = '../rock.jpg'
        computerHand.setAttribute('data-choice', 'rock')
    } else if (parseInt(Math.random() * 3, 10) === 1) {
        computerHand.src = '../paper.jpg'
        computerHand.setAttribute('data-choice', 'paper')
    } else {
        computerHand.src = '../scissors.jpg'
        computerHand.setAttribute('data-choice', 'scissor')
    }
}


function getResultFunction(event) {
    const playerChoice = event.target.dataset.choice;
    const computerChoice = computerHand.dataset.choice;
    let playerScore = document.querySelector('.player-score');
    let computerScore = document.querySelector('.comp-score');
    let newTitle;
    newTitle = title.innerHTML;
    switch (playerChoice) {
        case computerChoice:
            newTitle = 'It is a tie';
            break;
        case 'rock':
            if (computerChoice === 'scissor') {
                newTitle = 'It is a win'
                playerScore.innerHTML++
            } else {
                newTitle = 'It is a lose'
                computerScore.innerHTML++
            }
            break;
        case 'paper':
            if (computerChoice === 'scissor') {
                newTitle = 'It is a lose'
                computerScore.innerHTML++
            } else {
                newTitle = 'It is a win'
                playerScore.innerHTML++
            }
            break;
        case 'scissor':
            if (computerChoice === 'rock') {
                newTitle = 'It is a lose'
                computerScore.innerHTML++
            } else {
                newTitle = 'It is a win'
                playerScore.innerHTML++
            }
            break;
            default:
    } 
}
