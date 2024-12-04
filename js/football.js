/*
<h2 class="football-title">Футбол</h2>
<div class="football-field">
    <div class="football-ball">
        <img src="./img/football.png">
    </div>
</div>
*/

const footballContainer = document.querySelector('.football-container');

const footballTitle = document.createElement('h2');
footballTitle.classList.add('football-title');
footballTitle.innerText = 'Футбол';

const footballField = document.createElement('div');
footballField.classList.add('football-field');

const footballBall = document.createElement('div');
footballBall.classList.add('football-ball');
footballBall.innerHTML = '<img src="./img/football.png">';

footballContainer.appendChild(footballTitle);
footballField.appendChild(footballBall);
footballContainer.appendChild(footballField);

footballField.addEventListener('click', (e) => {
    const fieldRect = footballField.getBoundingClientRect();

    const clickX = e.clientX - fieldRect.left;
    const clickY = e.clientY - fieldRect.top;

    const ballX = Math.min(
        Math.max(clickX - (footballBall.offsetWidth / 2), 0),
        fieldRect.width - footballBall.offsetWidth
    );

    const ballY = Math.min(
        Math.max(clickY - (footballBall.offsetWidth / 2), 0),
        fieldRect.height - footballBall.offsetHeight
    );

    footballBall.style.transform = `translate(${ballX}px, ${ballY}px)`;
});
