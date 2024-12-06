const dinoTitle = document.createElement('h2');
dinoTitle.classList.add('dino-title');
dinoTitle.textContent = 'Google динозавр';
const dinoContainer = document.querySelector('.dino-container');
dinoContainer.appendChild(dinoTitle);

// тема, задана перемикачем
let theme = document.body.classList.contains('dark') ? 'dark' : 'light';


// функція для виконання функції з рандомними інтервалами 
function executeWithRandomIntervals(task, minInterval, maxInterval) {
    if (gameArea.running) {
        function next() {
            const randomDelay = Math.floor(
                Math.random() * (maxInterval - minInterval + 1) + minInterval
            );

            setTimeout(() => {task(); next();}, randomDelay);
        }

        next();
    } else {
        return;
    }
}

// об'єкт ігрового поля
const gameArea = {
    // умова стану гри
    running: false,

    // створити елемент canvas
    canvas: document.createElement('canvas'),

    // фонова картинка, позиція фону
    bgImage: new Image(),
    bgPosition: 0,

    // швидкість та рахунок гри
    speed: 2,
    score: 0,

    // функція, що виконується один раз, при завантаження сторінки
    doOnce: function () {
        this.running = true;
        this.createCactuses = executeWithRandomIntervals(createCactus, 500, 3000);
        this.running = false;
    },

    // функція, що ініціалізує гру
    init: function () {
        // скидання змінних
        this.bgPosition = 0;
        this.speed = 2;
        this.score = 0;
        dino.isAlive = true;
        this.cactuses = [];
        this.cactusId = 0;

        // завантаження картинок
        this.bgImage.src = './img/ground.png';
        dino.image.src = './img/dino-idle.png';

        // задати розміри canvas
        this.canvas.width = 720;
        this.canvas.height = 240;

        // тимчасовий кольоровий індикатор
        // this.canvas.style.backgroundColor = 'fuchsia';

        // додати canvas до <body>
        document.querySelector(".dino>.container").appendChild(this.canvas);

        // отримати контекст рендерінгу
        this.ctx = this.canvas.getContext('2d');

        // відслідковування натисків клавіш
        window.addEventListener('keydown', (e) => {
            if (gameArea.running) {     
                // стрибок, якщо пробіл
                if (e.key == " ") {
                    e.preventDefault();
                    dino.jump();
                }
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
        this.running = true;
    },

    stop: function () {
        // зупинити гру
        clearInterval(this.intervalUpdate);
        clearInterval(this.intervalSpeed);
        clearInterval(this.intervalScore);
        this.running = false;
    },

    // функція для стирання екрану
    clear: function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    // масив для зберігання кактусів
    cactuses: []
}

// клас кактуса
class Cactus {
    constructor () {
        this.active = true;
        this.image = new Image();
        // отримати рандомне посилання на картинку та відповідні дані про висоту, ширину, позицію по y
        this.srcSet = [
            './img/cactus-1.png', './img/cactus-2.png', './img/cactus-3.png', 
            './img/cactus-4.png', './img/cactus-5.png', './img/cactus-6.png', 
            './img/cactus-7.png', './img/cactus-8.png', './img/cactus-9.png'
        ];
        this.srcId = Math.floor(Math.random() * this.srcSet.length);
        this.image.src = this.srcSet[this.srcId];
        this.width = [34, 34, 34, 34, 50, 48, 50, 60, 50][this.srcId] / 1.5;
        this.height = [70, 70, 70, 70, 100, 100, 100, 96, 100][this.srcId] / 1.5;
        this.posY = [185, 185, 185, 185, 170, 170, 170, 170, 170][this.srcId];

        // починати з-за екрану
        this.posX = gameArea.canvas.width + this.width;

        // оновлення кактусу
        this.update = function () {
            this.posX -= gameArea.speed * 3;

            // зупинити дію та оновленняя кактусу після виходу за екран для економіЇ ресурсів
            if (this.posX < (-gameArea.canvas.width - this.width)) {
                this.active = false;
            }
        }
    }
}

// функція для ствоорення кактуса
function createCactus () {
    gameArea.cactuses.push(new Cactus());
}

// об'єкт динозаврика
const dino = {
    // створення картинки для динозаврика
    image: new Image(),

    // умова, чи живий
    isAlive: true,

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
        if (this.isAlive) {
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
        }
    },

    // функція стрибка
    jump: function () {
        // якщо не знаходиться у стані стрибка, перейти у стан стрибка і задати прискорення вгору
        if (!this.isJumping) {
            this.isJumping = true;
            this.spdY = -10;
        }
    },

    // функція смерті
    die: function () {
        // скидання умови про життєдіяльність, зупинка гри, зміна картинки на мертвого динозаврика
        this.isAlive = false;
        gameArea.stop();
        this.image.src = './img/dino-dead.png';
    }
}

// кнопка рестарту
let gameOver = new Image();
gameOver.src = './img/game-over.png'

// функція оновлення рахунку
function updateScore () {
    gameArea.score += (gameArea.speed / 2);
}

// функція оновлення швидкості
function updateGameSpeed () {
    if (gameArea.speed < 4) {
        gameArea.speed += 0.02;
    }
}

// функція для оновлення гри
function updateGameArea () {
    // оновити тему
    theme = document.body.classList.contains('dark') ? 'dark' : 'light';

    // оновити стан динозаврика
    dino.update();

    // змінити позицію фону відповідно до швидкості гри
    gameArea.bgPosition -= gameArea.speed * 3;

    // стерти все з екрану
    gameArea.clear();

    // вивести рахунок на екран
    gameArea.ctx.font = '16px serif';
    // залежно від теми задати кольори фону та тексту
    switch(theme) {
        case 'dark':
            gameArea.ctx.fillStyle = 'white';
            gameArea.canvas.style.backgroundColor = '#121212';
            break;
        case 'light':
            gameArea.ctx.fillStyle = '#121212';
            gameArea.canvas.style.backgroundColor = 'white';
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

    // оновлення і відмальовка всіх кактусів
    for (let c of gameArea.cactuses) {
        if (c.active) {
            c.update();
            gameArea.ctx.drawImage(c.image, c.posX, c.posY, c.width, c.height);

            // перевірка на колізію з динозавриком (виглядає страшно, але насправді все просто)
            if (
                dino.posX + dino.width > c.posX &&
                dino.posX + dino.width < c.posX + c.width &&
                dino.posY + dino.height > c.posY &&
                dino.posY + dino.height < c.posY + c.height
            ) {
                // вбити динозаврика
                dino.die();

                // скинути швидкість гри
                gameArea.speed = 0;

                // оновити поле один раз і намалювати кнопку рестарта через 1 мілісекунду
                setTimeout(() => {
                    updateGameArea(); gameArea.ctx.drawImage(gameOver, (gameArea.canvas.width / 2) - 25, (gameArea.canvas.height / 2) - 25, 50, 50);
                }, 1);
            }
        }
    }

    // відмалювати динозаврика
    gameArea.ctx.drawImage(dino.image, dino.posX, dino.posY, dino.width, dino.height);
}

// ініціалізувати гру
gameArea.doOnce();
gameArea.init();
setTimeout(() => {gameArea.ctx.drawImage(gameOver, (gameArea.canvas.width / 2) - 25, (gameArea.canvas.height / 2) - 25, 50, 50);}, 10);

// запустити гру при натиску на ігрове поле, якщо вона вже не запущена
gameArea.canvas.addEventListener('click', () => {
    if (!gameArea.running) {
        gameArea.init();
        gameArea.start();
    }
})
