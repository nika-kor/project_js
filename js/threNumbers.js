
    /* Number wich computer choose */

const sectionEnterNumbersGame = document.querySelector(".enter-numbers");
    
const container = document.createElement("div");
container.classList.add("container");
sectionEnterNumbersGame.appendChild(container);
    
const EnterNumbersTitle = document.createElement("h2");
EnterNumbersTitle.classList.add("enter-numbers-title");
EnterNumbersTitle.textContent = "Введіть 3 числа";
container.appendChild(EnterNumbersTitle);

const EnterNumbersForm = document.createElement("form");
EnterNumbersForm.classList.add("enter-numbers-form");
container.appendChild(EnterNumbersForm);


for (let i = 1; i <= 3; i++) {
    const inpContainer = document.createElement("div");
    inpContainer.classList.add(`enter-numbers-input-wrapper`);
    const input = document.createElement("input");
    input.classList.add("enter-numbers-input");
    input.type = "number";
    input.placeholder = `Введіть число`;
    inpContainer.appendChild(input);
    EnterNumbersForm.appendChild(inpContainer);
}

const EnterNumbersDesc = document.createElement("p");
EnterNumbersDesc.classList.add("enter-numbers-text");
EnterNumbersDesc.textContent = "Найбільше число, яке ви ввели - ";
container.appendChild(EnterNumbersDesc);

const EnterNumbersSpan = document.createElement("span");
EnterNumbersSpan.classList.add("enter-numbers-span");
EnterNumbersDesc.appendChild(EnterNumbersSpan);

const NumbersInp = document.querySelectorAll(".enter-numbers-input");
const NumbersForm = document.querySelector(".enter-numbers-form");
const maxNumber = document.querySelector(".enter-numbers-span");

NumbersForm.addEventListener("change", () => {
    const numbers = [];

    NumbersInp.forEach((el) => {
        if (el.value != 0) {
            numbers.push(el.value)
        }
    });
    maxNumber.textContent = Math.max(...numbers);
});