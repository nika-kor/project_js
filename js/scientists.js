









const scientists = [
    {
        name: "Albert",
        surname: "Einstein",
        born: 1879,
        dead: 1955,
        id: 1
    },
    {
        name: "Isaac",
        surname: "Newton",
        born: 1643,
        dead: 1727,
        id: 2
    },
    {
        name: "Galileo",
        surname: "Galilei",
        born: 1564,
        dead: 1642,
        id: 3
    },
    {
        name: "Marie",
        surname: "Curie",
        born: 1867,
        dead: 1934,
        id: 4
    },
    {
        name: "Johannes",
        surname: "Kepler",
        born: 1571,
        dead: 1630,
        id: 5
    },
    {
        name: "Nicolaus",
        surname: "Copernicus",
        born: 1473,
        dead: 1543,
        id: 6
    },
    {
        name: "Max",
        surname: "Planck",
        born: 1858,
        dead: 1947,
        id: 7
    },
    {
        name: "Katherine",
        surname: "Blodgett",
        born: 1898,
        dead: 1979,
        id: 8
    },
    {
        name: "Ada",
        surname: "Lovelace",
        born: 1815,
        dead: 1852,
        id: 9
    },
    {
        name: "Sarah E.",
        surname: "Goode",
        born: 1855,
        dead: 1905,
        id: 10
    },
    {
        name: "Lise",
        surname: "Meitner",
        born: 1878,
        dead: 1968,
        id: 11
    },
    {
        name: "Hanna",
        surname: "Hammarström",
        born: 1829,
        dead: 1909,
        id: 12
    }
];

//додаю значення  кнопок

const btnListOfProperties = [
    {
        text:"Які вчені народилися в 19 ст.",
        dataSet: "born-in-19",
    },
    {
        text:"Знайти рік народження Albert Einshtein",
        dataSet: "albert-age",
    },
    {
        text:"Відсортувати вчених за алфавітом",
        dataSet: "sort-by-alphabet",
    },
    {
        text:"Знайти вчених, прізвища яких починаються на на літеру \“С\”",
        dataSet: "begins-with-c",
    },
    {
        text:"Відсортувати вчених за кількістю прожитих років",
        dataSet: "eages-lived",
    },
    {
        text:"Видалити всіх вчених, ім’я яких починається на \“А\”",
        dataSet: "delete-begins-with-a",
    },
    {
        text:"Знайти вченого, який народився найпізніше",
        dataSet: "born-latest",
    },
    {
        text:"Знайти вченого, який прожив найдовше і вченого, який прожив найменше",
        dataSet: "lived-longest-and-shortest",
    },
    {
        text:"Знайти вчених, в яких співпадають перші літери імені і прізвища",
        dataSet: "same-initials",
    },
]


//взяла посилання на секцію

const scientistsSection = document.getElementById('10');

// створюю елементи

const scientistsTitle = document.createElement('h2');
const scientistsList = document.createElement('ul');

const scientistBtnList = document.createElement('ul');

// додаю класи

scientistsTitle.textContent = 'Обери вченого/их';
scientistsTitle.classList.add('scientists-title');

scientistsList.classList.add('scientists-list');
scientistBtnList.classList.add('scientist-btn-list');


// додаю елементи

scientistsSection.append(scientistsTitle, scientistsList, scientistBtnList);

//додала список вчених

const card = scientists.map((scientist) => `<li class="scientist-card"><p class="scientist-name">${scientist.name} ${scientist.surname}</p> <p class="scientist-age">${scientist.born}-${scientist.dead}</p></li>`).join('');

const fillListOfScientist = (data) => {
    scientistsList.innerHTML = '';

    scientistsList.insertAdjacentHTML('afterbegin', data);
}

fillListOfScientist(card);

//додала список кнопок

const btnCreate = btnListOfProperties.map((btnListOfProperties) => `<li class="scientist-btn-list-item"><button class="scientist-btn" type="button" data-sort-mode="${btnListOfProperties.dataSet}">${btnListOfProperties.text}</button></li>`).join('');

scientistBtnList.insertAdjacentHTML('beforeend', btnCreate);







function filterForProject(e) {
    let cardsFiltred;

    switch (e.target.dataset.sortMode) {
        
        // Які вчені народилися в 19 ст.
        case 'born-in-19':
            cardsFiltred = scientists.filter((scientist) => scientist.born >= 1800 && scientist.born < 1900).map((scientist) => `<li class="scientist-card"><p class="scientist-name">${scientist.name} ${scientist.surname}</p> <p class="scientist-age">${scientist.born}-${scientist.dead}</p></li>`).join('');

            fillListOfScientist(cardsFiltred);
            break;

            // Відсортувати вчених за алфавітом
        case 'sort-by-alphabet':
            cardsFiltred = scientists.sort((a, b) => a.name.localeCompare(b.name)).map((scientist) => `<li class="scientist-card"><p class="scientist-name">${scientist.name} ${scientist.surname}</p> <p class="scientist-age">${scientist.born}-${scientist.dead}</p></li>`).join('');

            fillListOfScientist(cardsFiltred);
            break;

            // Відсортувати вчених за кількістю прожитих років
        case 'eages-lived':
            cardsFiltred = scientists.sort((a, b) => (a.dead - a.born) - (b.dead - b.born)).map((scientist) => `<li class="scientist-card"><p class="scientist-name">${scientist.name} ${scientist.surname}</p> <p class="scientist-age">${scientist.born}-${scientist.dead}</p></li>`).join('');

            fillListOfScientist(cardsFiltred);
            break;

            // Знайти вченого, який народився найпізніше вивести тільки одного вченого
        case 'born-latest':
            cardsFiltred = scientists.filter((scientist) => scientist.born === Math.max(...scientists.map((scientist) => scientist.born))).map((scientist) => `<li class="scientist-card"><p class="scientist-name">${scientist.name} ${scientist.surname}</p> <p class="scientist-age">${scientist.born}-${scientist.dead}</p></li>`).join('');

            fillListOfScientist(cardsFiltred);
            break;

            // Знайти рік народження Albert Einshtein
        case 'albert-age':
            cardsFiltred = scientists.filter((scientist) => scientist.name === 'Albert' && scientist.surname === 'Einstein' && scientist.born === 1879 && scientist.dead === 1955).map((scientist) => `<li class="scientist-card"><p class="scientist-name">${scientist.name} ${scientist.surname}</p> <p class="scientist-age">${scientist.born}-${scientist.dead}</p></li>`).join('');

            fillListOfScientist(cardsFiltred);
            break;

            // Знайти вчених, прізвища яких починаються на на літеру “С”
        case 'begins-with-c':
            cardsFiltred = scientists.filter((scientist) => scientist.surname.startsWith('C')).map((scientist) => `<li class="scientist-card"><p class="scientist-name">${scientist.name} ${scientist.surname}</p> <p class="scientist-age">${scientist.born}-${scientist.dead}</p></li>`).join('');

            fillListOfScientist(cardsFiltred);
            break;

            // Видалити всіх вчених, ім’я яких починається на “А”
        case 'delete-begins-with-a':
            cardsFiltred = scientists.filter((scientist) => scientist.name.startsWith('A')).map((scientist) => `<li class="scientist-card"><p class="scientist-name">${scientist.name} ${scientist.surname}</p> <p class="scientist-age">${scientist.born}-${scientist.dead}</p></li>`).join('');

            fillListOfScientist(cardsFiltred);
            break;
            
            // Знайти вченого, який прожив найдовше і вченого, який прожив найменше має бути два вчених
        case 'lived-longest-and-shortest':
            cardsFiltred = scientists.filter((scientist) => scientist.born === Math.max(...scientists.map((scientist) => scientist.born)) || scientist.born === Math.min(...scientists.map((scientist) => scientist.born))).map((scientist) => `<li class="scientist-card"><p class="scientist-name">${scientist.name} ${scientist.surname}</p> <p class="scientist-age">${scientist.born}-${scientist.dead}</p></li>`).join('');

            fillListOfScientist(cardsFiltred);
            break;

            // Знайти вчених, в яких співпадають перші літери імені і прізвища
        case 'same-initials':

            cardsFiltred = scientists.filter((scientist) => scientist.name.charAt(0) === scientist.surname.charAt(0)).map((scientist) => `<li class="scientist-card"><p class="scientist-name">${scientist.name} ${scientist.surname}</p> <p class="scientist-age">${scientist.born}-${scientist.dead}</p></li>`).join('');

            fillListOfScientist(cardsFiltred);
            break;

        default:
            listOfScientists.insertAdjacentHTML('afterbegin', card);
            break;
    }
    return cardsFiltred
}




scientistBtnList.addEventListener('click', filterForProject)


















