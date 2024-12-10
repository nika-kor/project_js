const slidesFilling = [
    {
        img: '../image/nika.jpg', 
        name: 'nika', 
        work: 'Інформація про роботу, яку він/вона виконав/ла'
    },

    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvDKV7L91pePEUNFbnS1mOzlWvsAQGY_S9RhB3vvd49G7TNBPCJpeytWgdt69s7IxSzFk&usqp=CAU', 
        name: 'anton', 
        work: 'Інформація про роботу, яку він/вона виконав/ла'
    },
    {
        img: '../image/misha.jpg', 
        name: 'misha', 
        work: 'Інформація про роботу, яку він/вона виконав/ла'
    },
    {
        img: '../image/vika.jpg', 
        name: 'vika', 
        work: 'Інформація про роботу, яку він/вона виконав/ла'
    },
    {
        img: 'https://pngimg.com/uploads/square/square_PNG67.png', 
        name: 'oleksiy', 
        work: 'Інформація про роботу, яку він/вона виконав/ла'
    },
]

const section = document.querySelector('.acquaintance');

/* <svg width="24" height="16"><use href="./symbol-defs.svg#burger"></use></svg> */

const title = document.createElement('h2');
title.textContent = 'Наша команда';
title.classList.add('our-team-title');

const slider = document.createElement('div');
slider.classList.add('our-team-slider');


const btnPrev = document.createElement('button');
btnPrev.classList.add('our-team-btn-prev');

const svgPrev = document.createElement('svg');
svgPrev.setAttribute('width', '24');

const usePrev = document.createElement('use');
usePrev.setAttribute('href', '../symbol-defs.svg#arrowLeft');

svgPrev.append(usePrev);
btnPrev.append(svgPrev);
// btnPrev.textContent = '«';

const btnNext = document.createElement('button');
btnNext.classList.add('our-team-btn-next');
// btnNext.textContent = '»';


// const slidesWrapper = document.createElement('div');
// slidesWrapper.classList.add('our-team-slides');

// const img = document.createElement('img');
// const nameText = document.createElement('p');
// const workText = document.createElement('p');




section.append(title, slider);



// slides.append(img, nameText, workText);

const listOfImages = document.createElement('div');
listOfImages.classList.add('our-team-slides');

slider.append(listOfImages, btnPrev, btnNext);


const slidesWrapper = slidesFilling.map((slidesFilling) => `<div class="slide"><div class="slider-wrapper"><img class="our-team-img" src="${slidesFilling.img}" alt="img"><p class="our-team-name-text">${slidesFilling.name}</p><p class="our-team-work-text">${slidesFilling.work}</p></div></div>`).join('');

listOfImages.insertAdjacentHTML('afterbegin', slidesWrapper);


const buttonsOnBottomList = document.createElement('div');
buttonsOnBottomList.classList.add('our-team-buttons-lines');  

const buttonsOnBottomFirst = document.createElement('button');
buttonsOnBottomFirst.classList.add('line-btn');

const buttonsOnBottomSecond = document.createElement('button');
buttonsOnBottomSecond.classList.add('line-btn');

const buttonsOnBottomThird = document.createElement('button');
buttonsOnBottomThird.classList.add('line-btn');

const buttonsOnBottomFourth = document.createElement('button');
buttonsOnBottomFourth.classList.add('line-btn');

const buttonsOnBottomFifth = document.createElement('button');
buttonsOnBottomFifth.classList.add('line-btn');


slider.append(buttonsOnBottomList);
buttonsOnBottomList.append(buttonsOnBottomFirst, buttonsOnBottomSecond, buttonsOnBottomThird, buttonsOnBottomFourth, buttonsOnBottomFifth);



// move slides when pressing buttons









let currentSlide = 0;


function moveSlides(position) {
    console.log(position);
	const totalSlides = listOfImages.children.length;
	
	if (position >= totalSlides) {
		position = 0;
	} else if (position < 0) {
		position = totalSlides - 1;
	} 

    currentSlide = position;
	
	listOfImages.style.transform = `translateX(-${position * 800}px)`;

    let dots = document.getElementsByClassName("line-btn");
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    dots[currentSlide].classList.add("active");
}





btnPrev.addEventListener('click', function () {moveSlides(currentSlide -1)});
btnNext.addEventListener('click', function() {moveSlides(currentSlide +1)});





buttonsOnBottomFirst.addEventListener('click', function() {moveSlides(0)});
buttonsOnBottomSecond.addEventListener('click', function() {moveSlides(1)});
buttonsOnBottomThird.addEventListener('click', function() {moveSlides(2)});
buttonsOnBottomFourth.addEventListener('click', function() {moveSlides(3)});
buttonsOnBottomFifth.addEventListener('click', function() {moveSlides(4)});









