const dice = document.getElementById("dice");
const ctx = dice.getContext('2d');
dice.height = dice.width = 100;
let selected = 1;

const selectRandom = () => {
    selected = Math.floor(Math.random() * 6) + 1;
    drawDice();
}

const drawDice = () => {
    ctx.clearRect(0, 0, 100, 100);
    ctx.fillStyle = 'black';
    ctx.fillRect(10, 10, 80, 80);
    ctx.fillStyle = 'white';
    const drawDot = (x, y) => { ctx.beginPath(); ctx.arc(x, y, 5, 0, Math.PI * 2); ctx.fill(); }
    switch (selected) {
        case 1: drawDot(50, 50); break;
        case 2: drawDot(30, 30); drawDot(70, 70); break;
        case 3: drawDot(30, 30); drawDot(50, 50); drawDot(70, 70); break;
        case 4: drawDot(30, 30); drawDot(70, 30); drawDot(30, 70); drawDot(70, 70); break;
        case 5: drawDot(30, 30); drawDot(70, 30); drawDot(50, 50); drawDot(30, 70); drawDot(70, 70); break;
        case 6: drawDot(30, 30); drawDot(70, 30); drawDot(30, 50); drawDot(70, 50); drawDot(30, 70); drawDot(70, 70); break;
    }
}

window.addEventListener('keydown', (event) => { if (event.key === " ") selectRandom(); });

drawDice();
