const gameArea = {
    // створити елемент canvas
    canvas: document.createElement('canvas'),

    bgPosition: 0,

    // функція, що запускає гру
    start: function () {
        // задати розміри canvas
        this.canvas.width = 720;
        this.canvas.height = 240;

        // тимчасовий кольоровий індикатор
        this.canvas.style.backgroundColor = 'fuchsia';

        // додати canvas до <body>
        document.querySelector(".dino").appendChild(this.canvas);

        // отримати контекст рендерінгу
        this.ctx = this.canvas.getContext('2d');

        // задати інтервал оновлення екрану (у мілісекундах)
        this.interval = setInterval(updateGameArea, 20);

        // код для відслідковування натисків клавіш
        window.addEventListener('keydown', (e) => {
            e.preventDefault();
            
            // стрибок, якщо пробіл
            if (e.key == " ") {
                dino.jump();
            }
        })

        dino.image.src = './img/dino-run-1.png';
    },

    // функція для стирання екрану
    clear: function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

const dino = {
    // створення картинки для динозаврика
    image: new Image(),

    // розміри динозаврика
    height: 45,
    width: 45 * 0.93,

    // система координат та прискорення: точка відліку, позиція, швидкість 
    originY: 100,
    posY: 100,
    spdY: 0,
    posX: 100,

    // для стрибання: умова, чи знаходиться динозаврик у повітрі, та сила гравітації
    isJumping: false,
    gravity: 0.5,

    // функція оновлення стану, виконується кожного оновлення гри
    update: function () {
        if (this.isJumping) {
            // прискорення вниз через гравітацію та зміна позиції через прискорення
            this.spdY += this.gravity;
            this.posY += this.spdY;

            // перевірка, чи не впав динозаврик на землю
            if (this.posY >= this.originY) {
                this.posY = this.originY;
                this.isJumping = false;
                this.spdY = 0;
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

// функція для оновлення гри
function updateGameArea () {
    // оновити стан динозаврика
    dino.update();

    // стерти все з екрану
    gameArea.clear();

    // відмалювати динозаврика
    gameArea.ctx.drawImage(dino.image, dino.posX, dino.posY, dino.width, dino.height);
}

// запустити гру
gameArea.start();
