document.addEventListener('DOMContentLoaded', () => {
  const rpsSection = document.querySelector('.rock-paper-scissors');

  const htmlContent = `
    <div class="container">
      <div class="rps-container">
        <div class="rps-container-choice">
          <h1 class="rps-title">Камінь - ножиці - папір</h1>
          <div class="rps-content">
            <div class="rps-choices">
              <button class="rps-choice-btn" id="stone"><img src="./image/stone.png" alt="Stone"></button>
              <button class="rps-choice-btn" id="scissors"><img src="./image/scissors.png" alt="Scissors"></button>
              <button class="rps-choice-btn" id="paper"><img src="./image/paper.png" alt="Paper"></button>
            </div>
            <div class="rps-results">
              <p id="message" class="rps-message"></p>
              <p id="choices" class="rps-choices-text">Варіант комп’ютера</p>
            </div>
          </div>
        </div>
        <div class="rps-score">
          <p class="rps-score-text">Рахунок:</p>
          <p id="computer-score" class="rps-score-text">Комп'ютер - 0</p>
          <p id="user-score" class="rps-score-text">Ви - 0</p>
        </div>
      </div>
      <ul class="rps-list">
        <li class="rps-list-item"><img src="" alt="" class="rps-list-img"></li>
        <li class="rps-list-item"><img src="" alt="" class="rps-list-img"></li>
        <li class="rps-list-item"><img src="" alt="" class="rps-list-img"></li>
      </ul>`;

  rpsSection.innerHTML = htmlContent;

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
});
