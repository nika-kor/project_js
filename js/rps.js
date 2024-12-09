const userScoreElement = document.getElementById('user-score');
const computerScoreElement = document.getElementById('computer-score');
const messageElement = document.getElementById('message');
const choicesElement = document.getElementById('choices');

let userScore = 0;
let computerScore = 0;

const choices = ['stone', 'scissors', 'paper'];

function computerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function updateScores() {
  userScoreElement.textContent = `Ви - ${userScore}`;
  computerScoreElement.textContent = `Комп'ютер - ${computerScore}`;
}

function displayResult(userChoice, computerChoice) {
  let resultMessage = '';
  let messageColor = 'gray';
  let computerChoiceText = '';

  switch (computerChoice) {
    case 'stone':
      computerChoiceText = 'Камінь';
      break;
    case 'scissors':
      computerChoiceText = 'Ножиці';
      break;
    case 'paper':
      computerChoiceText = 'Папір';
      break;
  }

  if (userChoice === computerChoice) {
    resultMessage = 'Нічия!';
  } else if (
    (userChoice === 'stone' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'stone')
  ) {
    userScore++;
    resultMessage = 'Ви виграли!';
    messageColor = 'green';
  } else {
    computerScore++;
    resultMessage = 'Комп’ютер виграв!';
    messageColor = 'red';
  }

  choicesElement.textContent = `Вибір комп’ютера: ${computerChoiceText}`;
  messageElement.textContent = resultMessage;
  messageElement.style.color = messageColor;

  updateScores();
}

document.getElementById('stone').addEventListener('click', () => {
  const computer = computerChoice();
  displayResult('stone', computer);
});

document.getElementById('scissors').addEventListener('click', () => {
  const computer = computerChoice();
  displayResult('scissors', computer);
});

document.getElementById('paper').addEventListener('click', () => {
  const computer = computerChoice();
  displayResult('paper', computer);
});
