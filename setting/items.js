const target = { x: undefined, y: undefined, width: 30, height: 30, fill: '#F4D35E' };
const antiTarget = { x: undefined, y: undefined, width: 30, height: 30, fill: '#6C757D' };
const score = {
    x: 20,
    y: 50,
    font: 'bold 30px Arial',
    fill: '#F4D35E',
    strokeFill: '#0F2E23',
    lineWidth: 2,
};
const levelsContainer = {
    x: 400,
    y: 200,
    width: 1000,
    height: 95,
    fill: '#143D2E',
};
const levelContainer = {
    width: 100,
    height: 50,
    fill: '#2D6A4F',
    font: 'bold 20px Arial',
    fillWord: '#ffffff',
    strokeFill: '#151414',
    lineWidth: 0.2,
};
const pauseContainer = {
    x: 800,
    y: 100,
    width: 300,
    height: 390,
    fill: 'rgba(15, 46, 35, 0.85)',
};
const replayBtn = {
    x: pauseContainer.x + 30,
    y: pauseContainer.y + 140,
    width: pauseContainer.width - 30 * 2,
    height: 100,
    text: 'Replay',
    fill: '#2D6A4F',
    font: 'bold 40px Arial',
    fillWord: '#FFFFFF',
    strokeFill: '#A3B18A',
    lineWidth: 0.5,
};
const backBtn = {
    x: pauseContainer.x + 30,
    y: pauseContainer.y + 170 + replayBtn.height,
    width: pauseContainer.width - 30 * 2,
    height: 100,
    text: 'Back',
    fill: '#2D6A4F',
    font: 'bold 40px Arial',
    fillWord: '#FFFFFF',
    strokeFill: '#A3B18A',
    lineWidth: 0.5,
};
const timerContainer = {
    x: 900,
    y: 70,
    font: 'bold 60px Arial',
    fill: '#DAD7CD',
};
const alertInPause = {
    x: pauseContainer.x + 110,
    y: pauseContainer.y + 80,
    font: 'bold 30px Arial',
    strokeFill: '#151414',
    lineWidth: 2,
};
const titleGame = {
    x: 600,
    y: 120,
    font: 'bold 80px Arial',
    fill: '#DAD7CD',
    strokeFill: '#0F2E23',
    lineWidth: 5,
    text: 'Shooting range',
};
const gunsContainer = {
    x: 200,
    y: levelsContainer.y + 200,
    width: 1400,
    height: 150,
    fill: '#143D2E',
};
const gunContainer = {
    width: 300,
    height: 120,
    fill: '#2D6A4F',
};
const rulesContainer = {
    x: 20,
    y: 55,
    font: 'bold 20px Arial',
    fill: '#DAD7CD',
};
const toMenuContainer = {
    x: 1550,
    y: 20,
    width: 120,
    height: 40,
    text: 'To menu',
    fill: '#2D6A4F',
    font: 'bold 20px Arial',
    fillWord: '#FFFFFF',
};
const ammoContainer = {
    x: 230,
    y: 50,
    font: 'bold 20px Arial',
    fill: '#DAD7CD',
};
export {
    target,
    score,
    levelsContainer,
    levelContainer,
    pauseContainer,
    replayBtn,
    backBtn,
    timerContainer,
    alertInPause,
    titleGame,
    gunsContainer,
    gunContainer,
    antiTarget,
    rulesContainer,
    toMenuContainer,
    ammoContainer,
};
