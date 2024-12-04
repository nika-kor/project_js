//Верстка секції з карточками інтерактивної частини сайту, лише пуста картка. Контент карток створює кожен виконавець своєї гри окремо за допомогою js. Кожна картка повинна мати унікальний ідентифікатор. Написати скрипт який буде створювати картки по кількості завдань, використовуючи масив об'єктів, де будуте зберігатися вся інформаці. Реалізувати фільтр інтерактивних завдань по категорії зі списку, який розгортається при натискані на 'Інтерактив'


const numercial = document.querySelectorAll('.numercial');
const game = document.querySelectorAll('.game');
const acquaintance = document.querySelectorAll('.acquaintance');


const numercialBtn = document.querySelector('.numercial-btn');
const gameBtn = document.querySelector('.game-btn');
const acquaintanceBtn = document.querySelector('.acquaintance-btn');

const listOfBtns = document.querySelector('.nav-list-submenu');


function filter(e) {
    let filtredSection;

    switch (e.target.class) {
        case 'numercial-btn':
            filtredSection = numercial;
            break;
        
    }
    
}
// function filterForGame() {
//     numerial.forEach(el => el.style.display = 'none');
//     game.forEach(el => el.style.display = 'flex');
//     acquaintance.forEach(el => el.style.display = 'none');
// }
// function filterForAcquaintance() {
//     numerial.forEach(el => el.style.display = 'none');
//     game.forEach(el => el.style.display = 'none');
//     acquaintance.forEach(el => el.style.display = 'flex');
// }

// numercialBtn.addEventListener('click', filterForNumercial);
// gameBtn.addEventListener('click', filterForGame);
// acquaintanceBtn.addEventListener('click', filterForAcquaintance);

listOfBtns.addEventListener('click', filter);





