/* Find max number */

const sectionGussingGame = document.querySelector(".number-guessing-game");

const container = document.createElement("div");
container.classList.add("container-for-guessing");
sectionGussingGame.appendChild(container);

const GuessingGameTitle = document.createElement("h2");
GuessingGameTitle.classList.add("number-guessing-game-title");
GuessingGameTitle.textContent = "Вгадай число, яке загадав комп’ютер";
container.appendChild(GuessingGameTitle);

const guessingWrapper = document.createElement("div");
guessingWrapper.classList.add("guessing-wrapper");
container.appendChild(guessingWrapper);

const guessingContainer = document.createElement("div");
guessingContainer.classList.add("guessing-container");
guessingWrapper.appendChild(guessingContainer);

const GuessingGameInput = document.createElement("input");
GuessingGameInput.classList.add("number-guessing-game-input");
GuessingGameInput.placeholder = "Введіть число";
GuessingGameInput.type = "text";
guessingContainer.appendChild(GuessingGameInput);

const GuessingGameBtn = document.createElement("button");
GuessingGameBtn.classList.add("number-guessing-game-btn");
GuessingGameBtn.innerHTML = `<svg width="15" height="15" fill="white"> <use href="./symbol-defs.svg#icon-search"></use></svg>`;
guessingContainer.appendChild(GuessingGameBtn);

const GuessingGameDesc = document.createElement("p");
GuessingGameDesc.classList.add("number-guessing-game-desc");
guessingWrapper.appendChild(GuessingGameDesc);

const guessInp = document.querySelector(".number-guessing-game-input");
const guessP = document.querySelector(".number-guessing-game-desc");
const guessingBtn = document.querySelector(".number-guessing-game-btn");
const min = 0;
const max = 10;

guessingBtn.addEventListener("click", () => {
    event.preventDefault();
    let randomnum = Math.round(Math.random() * (max - min) + min);
    console.log(randomnum);
    checkGuessingNumber(randomnum);
});

function checkGuessingNumber(randomnum) {
    if (guessInp.value == randomnum) {
        guessP.textContent = `Вітаю ви вгадали число: ${randomnum}`;
        guessP.classList.remove('output-text-wrong');
    } else {
        guessP.textContent = `Ви програли, компютер загадав: ${randomnum}`;
        guessP.classList.add('output-text-wrong');
    }
}
