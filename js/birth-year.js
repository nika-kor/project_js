/*
<h2 class="birth-year-check-title">Перевір в який рік ти народився</h2>
<div class="birth-year-check-bottom-wrapper">
    <div class="birth-year-check-input-wrapper">
        <input type="text" class="birth-year-check-input" placeholder="Введіть рік народження">
        <button class="birth-year-check-btn"><svg width="15" height="15" class="birth-year-check-btn-svg"><use href="./symbol-defs.svg#icon-search"></use></svg></button>
    </div>
    <p class="birth-year-check-text">Ви народилися у високосний рік!</p>
</div>
*/

const yearCheckSection = document.querySelector('.birth-year-check');

const yearCheckContainer = document.createElement('div');
yearCheckContainer.classList.add('container');
yearCheckContainer.classList.add('birth-year-check-container');
yearCheckSection.appendChild(yearCheckContainer);

const yearCheckTitle = document.createElement('h2');
yearCheckTitle.classList.add('birth-year-check-title');
yearCheckTitle.textContent = 'Перевір в який рік ти народився';

const yearCheckBottomWrapper = document.createElement('div');
yearCheckBottomWrapper.classList.add('birth-year-check-bottom-wrapper');

const yearCheckInputWrapper = document.createElement('div');
yearCheckInputWrapper.classList.add('birth-year-check-input-wrapper');

const yearCheckInput = document.createElement('input');
yearCheckInput.classList.add('birth-year-check-input');
yearCheckInput.placeholder = 'Введіть рік народження';
yearCheckInput.type = 'text';

const yearCheckBtn = document.createElement('button');
yearCheckBtn.classList.add('birth-year-check-btn');
yearCheckBtn.innerHTML = '<svg width="15" height="15" class="birth-year-check-btn-svg"><use href="./symbol-defs.svg#icon-search"></use></svg>';

const yearCheckText = document.createElement('p');
yearCheckText.classList.add('birth-year-check-text');

yearCheckContainer.appendChild(yearCheckTitle);

yearCheckInputWrapper.appendChild(yearCheckInput);
yearCheckInputWrapper.appendChild(yearCheckBtn);

yearCheckBottomWrapper.appendChild(yearCheckInputWrapper);
yearCheckBottomWrapper.appendChild(yearCheckText);

yearCheckContainer.appendChild(yearCheckBottomWrapper);

yearCheckBtn.addEventListener('click', () => {
    if (Number.parseInt(yearCheckInput.value) % 4 == 0) {
        yearCheckText.textContent = 'Ви народилися у високосний рік!';
        yearCheckText.classList.remove('output-text-wrong');
    } else {
        yearCheckText.textContent = 'Ви народилися не у високосний рік!';
        yearCheckText.classList.add('output-text-wrong');
    }
})
