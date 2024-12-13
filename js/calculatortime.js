const timeCalculatorSection = document.querySelector(".calculator-time-section");
  
  // Контейнер
  const timeCalculatorContainer = document.createElement("div");
  timeCalculatorContainer.classList.add("calculator2");
  
  // Заголовок
  const timeCalculatorTitle = document.createElement("h2");
  timeCalculatorTitle.classList.add("calculator-title");

  timeCalculatorTitle.textContent = "Калькулятор Часу";
  timeCalculatorContainer.appendChild(timeCalculatorTitle);
  
  // Базовый блок
  const timeBaseDiv = document.createElement("div");
  timeBaseDiv.classList.add("base-time");
  timeCalculatorContainer.appendChild(timeBaseDiv);
  
  // Поле ввода
  const calculatorTimeInput = document.createElement('div');
calculatorTimeInput.classList.add('birth-year-check-input-wrapper');

  const input3 = document.createElement("input");
  input3.type = "number";
  input3.placeholder = "Введіть число";
  input3.id = "num3";
  input3.classList.add("input-time");

  const calculatorTimeBtn = document.createElement('button');
calculatorTimeBtn.classList.add('birth-year-check-btn');
calculatorTimeBtn.innerHTML = '<svg width="15" height="15" class="birth-year-check-btn-svg"><use href="./symbol-defs.svg#icon-search"></use></svg>';


  calculatorTimeInput.append(input3, calculatorTimeBtn);
  timeBaseDiv.appendChild(calculatorTimeInput);
  
  // Параграф для результата
  const timeResultParagraph = document.createElement("p");
  timeResultParagraph.id = "formattedTime";
  timeResultParagraph.textContent = "......................";
  timeBaseDiv.appendChild(timeResultParagraph);
  
  // Формат времени
  const formattedTime = document.createElement("p");
  formattedTime.classList.add("result-time");

  formattedTime.id = "result2";
  formattedTime.textContent = "Ваш результат тут";
  timeBaseDiv.appendChild(formattedTime);
  
  // Готовый Контейнер
  timeCalculatorSection.appendChild(timeCalculatorContainer);
  
  const num3 = document.getElementById("num3");
  const result2 = document.getElementById("result2");
  num3.addEventListener("input", () => {
    const totalSeconds = parseInt(num3.value) * 60;
    if (isNaN(totalSeconds) || totalSeconds < 0) {
      result2.textContent = "Введіть додатнє число!";
      return;
    }
  
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const timeString =
      (days > 0 ? `${days} дн. ` : "") +
      `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
  
    result2.textContent = timeString;
  });
  