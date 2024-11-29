const theme = 'light'; 

const gameArea = {
    // створити елемент canvas
    canvas: document.createElement('canvas'),

    // фонова картинка, позиція фону
    bgImage: new Image(),
    bgPosition: 0,

    // швидкість та рахунок гри
    speed: 2,
    score: 0,

    // функція, що ініціалізує гру
    init: function () {
        this.bgImage.src = './img/ground.png';
        dino.image.src = './img/dino-idle.png';

        // задати розміри canvas
        this.canvas.width = 720;
        this.canvas.height = 240;

        // тимчасовий кольоровий індикатор
        // this.canvas.style.backgroundColor = 'fuchsia';

        // додати canvas до <body>
        document.querySelector(".dino").appendChild(this.canvas);

        // отримати контекст рендерінгу
        this.ctx = this.canvas.getContext('2d');

        // відслідковування натисків клавіш
        window.addEventListener('keydown', (e) => {
            e.preventDefault();
            
            // стрибок, якщо пробіл
            if (e.key == " ") {
                dino.jump();
            }
        });
        
        updateGameArea();
    },

    // функція, що запускає гру
    start: function () {
        // задати інтервал оновлення екрану, швидкості та рахунку (у мілісекундах)
        this.intervalUpdate = setInterval(updateGameArea, 20);
        this.intervalSpeed = setInterval(updateGameSpeed, 1500);
        this.intervalScore = setInterval(updateScore, 200);
    },

    // функція для стирання екрану
    clear: function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

const dino = {
    // створення картинки для динозаврика
    image: new Image(),

    // анімація бігу як список картинок
    animationRun: ['./img/dino-run-1.png', './img/dino-run-2.png'],
    animationFrame: 0,

    // розміри динозаврика
    height: 45,
    width: 45 * 0.93,

    // система координат та прискорення: точка відліку, позиція, швидкість 
    originY: 185,
    posY: 185,
    spdY: 0,
    posX: 45,

    // для стрибання: умова, чи знаходиться динозаврик у повітрі, та сила гравітації
    isJumping: false,
    gravity: 0.5,

    // функція оновлення стану, виконується кожного оновлення гри
    update: function () {
        if (this.isJumping) {
            // при стрибку задати картинку стрибка
            this.image.src = './img/dino-idle.png';

            // прискорення вниз через гравітацію та зміна позиції через прискорення
            this.spdY += this.gravity;
            this.posY += this.spdY;

            // перевірка, чи не впав динозаврик на землю
            if (this.posY >= this.originY) {
                this.posY = this.originY;
                this.isJumping = false;
                this.spdY = 0;
            }
        } else {
            // анімація
            this.animationFrame += 1;
            if (this.animationFrame % 5 == 0) {
                this.image.src = this.animationRun[this.animationFrame % this.animationRun.length];
            }
        }
    },

    // функція стрибка
    jump: function () {
        // якщо не знаходиться у стані стрибка, перейти у стан стрибка і задати прискорення вгору
        if (!this.isJumping) {
            this.isJumping = true;
            this.spdY = -10;
        }
    }
}

// функція оновлення рахунку
function updateScore () {
    gameArea.score += (gameArea.speed / 2);
}


// функція оновлення швидкості
function updateGameSpeed () {
    if (gameArea.speed < 4)
    gameArea.speed += 0.02;
}

// функція для оновлення гри
function updateGameArea () {
    // оновити стан динозаврика
    dino.update();

    // змінити позицію фону відповідно до швидкості гри
    gameArea.bgPosition -= gameArea.speed * 3;

    // стерти все з екрану
    gameArea.clear();

    // вивести рахунок на екран
    gameArea.ctx.font = '16px serif';
    switch(theme) {
        case 'dark':
            gameArea.ctx.fillStyle = 'white';
            gameArea.canvas.style.backgroundColor = '#121212';
            break;
        case 'light':
            gameArea.ctx.fillStyle = '#121212';
            gameArea.ctx.style.backgroundColor = 'white';
            break;
    }
    gameArea.ctx.fillText(Math.floor(gameArea.score), gameArea.canvas.width - String(Math.floor(gameArea.score)).length * 8 - 8, 24);

    // зациклювання фону
    if (gameArea.bgPosition < -gameArea.bgImage.width) {
        gameArea.bgPosition = 0;
    }

    // відмальовування другого фону в протифазі до першого для створення ілюзії безкінечного фону
    gameArea.ctx.drawImage(gameArea.bgImage, gameArea.bgPosition, 120, gameArea.bgImage.width, gameArea.canvas.height / 2);
    gameArea.ctx.drawImage(gameArea.bgImage, gameArea.bgPosition + gameArea.bgImage.width, 120, gameArea.bgImage.width, gameArea.canvas.height / 2);

    // відмалювати динозаврика
    gameArea.ctx.drawImage(dino.image, dino.posX, dino.posY, dino.width, dino.height);
}

// ініціалізувати гру
gameArea.init();

// запустити гру при натиску на ігрове поле
gameArea.canvas.addEventListener('click', () => {gameArea.start()})
