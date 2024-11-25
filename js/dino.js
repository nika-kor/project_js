const body = document.querySelector('body');

// створити елемент canvas всередині <body> 
const canvas = document.createElement('canvas');
body.appendChild(canvas);

// задати розміри елементу canvas
canvas.width = 720;
canvas.height = 241;

// тимчасовий індикатор
canvas.style.backgroundColor = 'fuchsia';

// контекст рендерінга (власне для малювання гри)
const ctx = canvas.getContext('2d');

const dinoImg = new Image();
dinoImg.src = './img/dino-run-1.png';

dinoImg.onload = () => {
    ctx.drawImage(dinoImg, 0, 0, dinoImg.width, dinoImg.height);
}
