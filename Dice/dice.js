const dice = document.getElementById("dice");
const diceNumbers = [1, 2, 3, 4, 5, 6];
const ctx = dice.getContext('2d');
dice.height = "100";
dice.width = "100";
let selectedNumber = 1; 

const selectRandom = () => {
    const selectedIndex = Math.floor(Math.random() * diceNumbers.length);
    selectedNumber = diceNumbers[selectedIndex];
    drawDice();
}

const drawDice = () => {
    ctx.clearRect(0, 0, dice.width, dice.height);
    ctx.fillStyle = "black"; 
    ctx.fillRect(10, 10, 80, 80); 
    ctx.fillStyle = "white"; 
    switch (selectedNumber) {
        case 1:
            ctx.beginPath();
            ctx.arc(50, 50, 5, 0, Math.PI * 2);
            ctx.fill();
            break;
        case 2:
            ctx.beginPath();
            ctx.arc(30, 30, 5, 0, Math.PI * 2);
            ctx.arc(70, 70, 5, 0, Math.PI * 2);
            ctx.fill();
            break;
        case 3:
            ctx.beginPath();
            ctx.arc(30, 30, 5, 0, Math.PI * 2);
            ctx.arc(50, 50, 5, 0, Math.PI * 2);
            ctx.arc(70, 70, 5, 0, Math.PI * 2);
            ctx.fill();
            break;
        case 4:
            ctx.beginPath();
            ctx.arc(30, 30, 5, 0, Math.PI * 2);
            ctx.arc(70, 30, 5, 0, Math.PI * 2);
            ctx.arc(30, 70, 5, 0, Math.PI * 2);
            ctx.arc(70, 70, 5, 0, Math.PI * 2);
            ctx.fill();
            break;
        case 5:
            ctx.beginPath();
            ctx.arc(30, 30, 5, 0, Math.PI * 2);
            ctx.arc(70, 30, 5, 0, Math.PI * 2);
            ctx.arc(50, 50, 5, 0, Math.PI * 2);
            ctx.arc(30, 70, 5, 0, Math.PI * 2);
            ctx.arc(70, 70, 5, 0, Math.PI * 2);
            ctx.fill();
            break;
        case 6:
            ctx.beginPath();
            ctx.arc(30, 30, 5, 0, Math.PI * 2);
            ctx.arc(70, 30, 5, 0, Math.PI * 2);
            ctx.arc(30, 50, 5, 0, Math.PI * 2);
            ctx.arc(70, 50, 5, 0, Math.PI * 2);
            ctx.arc(30, 70, 5, 0, Math.PI * 2);
            ctx.arc(70, 70, 5, 0, Math.PI * 2);
            ctx.fill();
            break;
        default:
            break;
    }
}

const handleKeyPress = (event) => {
    if (event.key === " ") {
        selectRandom();
    }
};
window.addEventListener('keydown', handleKeyPress);
drawDice(); 
