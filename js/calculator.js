const calculatorSection = document.querySelector(".calculator-section");

// Контейнер
const calculatorContainer = document.createElement("div");
calculatorContainer.classList.add("calculator");

// calculatorSection.appendChild(calculatorContainer);

// Заголовок
const calculatorTitle = document.createElement("h2");
calculatorTitle.classList.add("calculator-title");
calculatorTitle.textContent = "Калькулятор";
calculatorContainer.appendChild(calculatorTitle);

// Базовый блок
const baseDiv = document.createElement("div");
baseDiv.classList.add("base-calculator");
calculatorContainer.appendChild(baseDiv);

// Поля ввода
const input1 = document.createElement("input");
input1.type = "number";
input1.placeholder = "Введіть число";
input1.id = "num1";
input1.classList.add("input-calculator");

const input2 = document.createElement("input");
input2.type = "number";
input2.placeholder = "Введіть число";
input2.id = "num2";
input2.classList.add("input-calculator");

const operatorDiv = document.createElement("div");
operatorDiv.classList.add("operator-wrapper");
operatorDiv.id = "operator_button";

["+", "*", "-", "/"].forEach((symbol, index) => {
  const button = document.createElement("button");
  button.id = ["plus", "multiplace", "minus", "divide"][index];
  button.classList.add("operator-btn");
  button.textContent = symbol;
  operatorDiv.appendChild(button);
});

//Кнопки
const equalsBtn = document.createElement("button");
equalsBtn.classList.add("equals-btn");
equalsBtn.id = "equals";
equalsBtn.textContent = "=";

const resultParagraph = document.createElement("p");
resultParagraph.id = "result";
resultParagraph.classList.add("result-calculator");
resultParagraph.textContent = "Результат";

baseDiv.append(input1, operatorDiv, input2, equalsBtn, resultParagraph);


calculatorSection.append(calculatorContainer);

const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultDisplay = document.getElementById("result");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const multiplyButton = document.getElementById("multiplace");
const divideButton = document.getElementById("divide");
const equalsButton = document.getElementById("equals");
let operator = null;
plusButton.addEventListener("click", () => setOperator("+"));
minusButton.addEventListener("click", () => setOperator("-"));
multiplyButton.addEventListener("click", () => setOperator("*"));
divideButton.addEventListener("click", () => setOperator("/"));
equalsButton.addEventListener("click", calculate);

function setOperator(op) {
  operator = op;
  resultDisplay.textContent = `Обраний оператор: ${op}`;
}
function calculate() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  if (isNaN(num1) || isNaN(num2)) {
    resultDisplay.textContent = "Помилка: Треба два числа!";
    return;
  }

  if (!operator) {
    resultDisplay.textContent = "Помилка: треба оператор!";
    return;
  }

  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        resultDisplay.textContent = "Помилка: ділить на нуль не можна!";
        return;
      }
      result = num1 / num2;
      break;
    default:
      resultDisplay.textContent = "Помилка: нема оператора!";
      return;
  }

  resultDisplay.textContent = `Результат: ${result}`;
}
