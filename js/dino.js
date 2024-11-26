const gameArea = {
    // створити елемент canvas
    canvas: document.createElement('canvas'),

    // функція, що запускає гру
    start: function () {
        // задати розміри canvas
        this.canvas.width = 720;
        this.canvas.height = 240;

        // тимчасовий кольоровий індикатор
        this.canvas.style.backgroundColor = 'fuchsia';

        // додати canvas до <body>
        document.body.appendChild(this.canvas);

        // отримати контекст рендерінгу
        this.ctx = this.canvas.getContext('2d');

        // задати інтервал оновлення екрану (у мілісекундах)
        this.interval = setInterval(updateGameArea, 20);

        // код для відслідковування натисків клавіш
        window.addEventListener('keydown', (e) => {
            gameArea.keys = (gameArea.keys || []);
            gameArea.keys[e.keyCode] = true;
        })

        window.addEventListener('keyup', (e) => {
            gameArea.keys = (gameArea.keys || []);
            gameArea.keys[e.keyCode] = false;
        })
    },

    // функція для стирання екрану
    clear: function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
// функція для оновлення гри
const updateGameArea = function () {
    gameArea.clear();
    // gameArea.ctx.fillRect(Math.random() * gameArea.canvas.width, Math.random() * gameArea.canvas.height, 30, 30);
    gameArea
}

const dino = {
    image: new Image(src='./img/dino-run-1.png'),
    originY: 100,
    posY: 0,
    spdY: 0,
    move: function () {
        this.posY += this.spdY;
        if (!(this.posY == this.originY)) {
            
        }
    },

    jump: function () {
        this.spdY = 10;
    }
}

// запустити гру
gameArea.start();
