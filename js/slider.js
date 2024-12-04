const slidesFilling = [
    {
        img: 'https://math-media.byjusfutureschool.com/bfs-math/2022/07/04185628/Asset-1-8-300x300.png', 
        name: 'nika', 
        work: 'Інформація про роботу, яку він/вона виконав/ла'
    },

    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvDKV7L91pePEUNFbnS1mOzlWvsAQGY_S9RhB3vvd49G7TNBPCJpeytWgdt69s7IxSzFk&usqp=CAU', 
        name: 'anton', 
        work: 'Інформація про роботу, яку він/вона виконав/ла'
    },
    {
        img: 'https://img.freepik.com/premium-vector/decorative-ornamental-square-frame-border-with-geometric-lines-nouveau-style-design_1226483-13552.jpg?semt=ais_hybrid', 
        name: 'misha', 
        work: 'Інформація про роботу, яку він/вона виконав/ла'
    },
    {
        img: 'https://www.freeiconspng.com/thumbs/square-png/blue-square-image-3.png', 
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

const title = document.createElement('h2');
title.textContent = 'Наша команда';
title.classList.add('our-team-h2');

const slider = document.createElement('div');
slider.classList.add('our-team-slider');


const btnPrev = document.createElement('button');
btnPrev.classList.add('our-team-btn-prev');
btnPrev.textContent = '«';

const btnNext = document.createElement('button');
btnNext.classList.add('our-team-btn-next');
btnNext.textContent = '»';


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





// const btnPrev = document.querySelector(".prev");
// const btnNext = document.querySelector(".next");
// const listOfImages = document.querySelector(".slides");
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
}





// btnPrev.addEventListener('click',()=> moveSlides(currentSlide -1));
// btnNext.addEventListener('click',()=> moveSlides(currentSlide +1));


btnPrev.addEventListener('click', function () {moveSlides(currentSlide -1)});
btnNext.addEventListener('click', function() {moveSlides(currentSlide +1)});









