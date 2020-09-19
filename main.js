const rock = document.querySelector('#rock');
rock.addEventListener('click', playerPlay);
const paper = document.querySelector('#paper');
paper.addEventListener('click', playerPlay);
const scissor = document.querySelector('#scissor');
scissor.addEventListener('click', playerPlay);

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', start));

const gameover = document.querySelector('#gameover');
const results = document.querySelector('#results');
const para = document.createElement('p');
const over = document.createElement('button');
over.style.display = 'none';
over.setAttribute('id', 'overButton')

var playerSelection
function playerPlay(e) {
	playerSelection = this.id;
}

function computerPlay() {
	function random() {
		return Math.floor(Math.random() * 3)
	}
	if (random() == 0) {
		return "rock"
	} else if (random() == 1) {
		return "paper"
	} else {
		return "scissor"
	}
}

function game1(p, c) {
	if (p === "paper" && c === "rock") {
		userScore++
		return "You won! Paper beats rock"
	} else if (p === "paper" && c === "scissor") {
		computerScore++
		return "You lose! Scissor beats paper"
	} else if (p === "rock" && c === "scissor") {
		userScore++
		return "You won! Rock beats scissor"
	} else if (p === "rock" && c === "paper") {
		computerScore++
		return "You lose! Paper beats rock"
	} else if (p === "scissor" && c === "rock") {
		computerScore++
		return "You lose! Rock beats scissor"
	} else if (p === "scissor" && c === "paper") {
		userScore++
		return "You won! Scissor beats paper"
	} else if (p === c) {
		return "That is even"
	}
}

let userScore = 0;
const player = document.querySelector('#player');
player.textContent = 'Player: ' + userScore;
let computerScore = 0;
const computer = document.querySelector('#computer');
computer.textContent = 'Computer: ' + computerScore;

function checker(a, b) {
	if (a == 5) {
		over.innerHTML = 'You won, congratulations!';
		over.style.display = 'block';
		gameover.appendChild(over);
		return true
	} else if (b == 5) {
		over.innerHTML = 'The computer won, try one more time';
		over.style.display = 'block';
		gameover.appendChild(over);
		return true
	} else {
		return false
	}
}

function reset() {
	userScore = 0;
	player.textContent = 'Player: ' + userScore;
	computerScore = 0;
	computer.textContent = 'Player: ' + userScore;
	results.removeChild(para);
	gameover.removeChild(over);
	over.style.display = 'none';
	rock.addEventListener('click', playerPlay);
	paper.addEventListener('click', playerPlay);
	scissor.addEventListener('click', playerPlay);
	buttons.forEach(button => button.addEventListener('click', start));
}

function start() {
	let begin = game1(playerSelection, computerPlay());
	para.textContent = begin;
	results.appendChild(para);
	gameover.appendChild(over);
	computer.textContent = 'Computer: ' + computerScore;
	player.textContent = 'Player: ' + userScore;
	if (checker(userScore, computerScore) == true) {
		buttons.forEach(button => button.removeEventListener('click', start));
		rock.removeEventListener('click', playerPlay);
		paper.removeEventListener('click', playerPlay);
		scissor.removeEventListener('click', playerPlay);
		over.addEventListener('click', reset);
	}
}