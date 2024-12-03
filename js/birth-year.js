/* <h2 class="birth-year-check-title">Перевір в який рік ти народився</h2>
<input type="text" class="birth-year-check-input" placeholder="Введіть рік народження">
<button class="birth-year-check-btn"></button>
<p class="birth-year-check-text">Ви народилися у високосний рік!</p> */

const yearCheckTitle = document.createElement('h2');
yearCheckTitle.classList.add('birth-year-check-title');
yearCheckTitle.textContent = 'Перевір в який рік ти народився';
const yearCheckInput = document.createElement('input');
yearCheckInput.classList.add('birth-year-check-input');
yearCheckInput.placeholder = 'Введіть рік народження';
yearCheckInput.type = 'text';
const yearCheckBtn = document.createElement('button');
yearCheckBtn.classList.add('birth-year-check-btn');
const yearCheckText = document.createElement('p');
yearCheckText.classList.add('birth-year-check-text');

const yearCheckContainer = document.querySelector('.birth-year-check>.container');
yearCheckContainer.appendChild(yearCheckTitle);
yearCheckContainer.appendChild(yearCheckInput);
yearCheckContainer.appendChild(yearCheckBtn);
yearCheckContainer.appendChild(yearCheckText);

yearCheckBtn.addEventListener('click', () => {
    if (Number.parseInt(yearCheckInput.value) % 4 == 0) {
        yearCheckText.textContent = 'Ви народилися у високосний рік!';
        yearCheckText.classList.remove('output-text-wrong');
    } else {
        yearCheckText.textContent = 'Ви народилися не у високосний рік!';
        yearCheckText.classList.add('output-text-wrong');
    }
})
