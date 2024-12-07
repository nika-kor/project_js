/* Find max number */

const sectionGussingGame = document.querySelector(".number-guessing-game");

const container = document.createElement("div");
container.classList.add("container");
sectionGussingGame.appendChild(container);

const GuessingGameTitle = document.createElement("h2");
GuessingGameTitle.classList.add("number-guessing-game-h2");
GuessingGameTitle.textContent = "Вгадай число, яке загадав комп’ютер";
container.appendChild(GuessingGameTitle);

const GuessingGameInput = document.createElement("input");
GuessingGameInput.classList.add("number-guessing-game-input");
GuessingGameInput.type = "text";
container.appendChild(GuessingGameInput);

const GuessingGameBtn = document.createElement("button");
GuessingGameBtn.classList.add("number-guessing-game-btn");
GuessingGameBtn.textContent = "";
container.appendChild(GuessingGameBtn);

const GuessingGameDesc = document.createElement("p");
GuessingGameDesc.classList.add("number-guessing-game");
container.appendChild(GuessingGameDesc);

const guessInp = document.querySelector(".number-guessing-game-input");
const guessP = document.querySelector(".number-guessing-game");
const guessingBtn = document.querySelector(".number-guessing-game-btn");
const min = 0;
const max = 10;

guessingBtn.addEventListener("click", () => {
    let randomnum = Math.round(Math.random() * (max - min) + min);
    console.log(randomnum);
    checkGuessingNumber(randomnum);
});

function checkGuessingNumber(randomnum) {
    if (guessInp.value == randomnum) {
        guessP.textContent = `Вітаю ви вгадали число: ${randomnum}`;
    } else {
        guessP.textContent = `Ви програли, компютер загадав: ${randomnum}`;
    }
}
