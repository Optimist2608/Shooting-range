import flags from '../../flags.js';
import data from '../../../data/data.js';
import clearScreen from '../update/clearScreen.js';
import randomInt from '../support/randomInt.js';
import createAntiTargetArray from '../create/createAntiTargetArray.js';
import {
    drawAntiTarget,
    drawPause,
    drawScore,
    drawTarget,
    drawTimer,
    drawToMenuContainer,
    drawAmmoContainer,
} from '../create/draw.js';
import setting from '../../../setting/setting.js';
import { target, timerContainer } from '../../../setting/items.js';

let startTimer = null;
let renderPos = null;

export function stopGameIntervals() {
    if (startTimer !== null) {
        clearInterval(startTimer);
        startTimer = null;
    }

    if (renderPos !== null) {
        clearInterval(renderPos);
        renderPos = null;
    }
}

export function play(level) {
    stopGameIntervals();
    let timeLeft = level.time;

    function gameOver() {
        if (!flags.isStart) {
            stopGameIntervals();
            return true;
        }
        if (timeLeft <= 0 && data.score < level.limitScore) {
            clearScreen(); // очистка всего экрана
            flags.isWin = false;
            flags.isStart = false;
            drawPause();
            stopGameIntervals();
            return true;
        }
        return false;
    }
    function drawAllTargets() {
        flags.isPopal = false;
        drawTarget(
            randomInt(0, setting.width - target.width),
            randomInt(timerContainer.y + 4, setting.height - target.height)
        );
        // Рендер ловушек
        const antiTargets = createAntiTargetArray();
        antiTargets.forEach((el) => {
            drawAntiTarget(el.x, el.y);
        });
        drawScore(data.level.limitScore);
    }

    clearScreen(); // очистка всего экрана
    drawTimer(timeLeft);
    drawToMenuContainer();
    drawAllTargets();
    drawAmmoContainer(data.ammo, data.ammoLimit);
    // Таймер

    startTimer = setInterval(() => {
        if (gameOver()) return; // проверка на окончание игры
        gameOver();
        clearScreen(timerContainer.x - 5, timerContainer.y - 50, 76, 60); // очистка таймера
        timeLeft--;
        drawTimer(timeLeft);
    }, 1000);

    // Рендер целей

    renderPos = setInterval(() => {
        if (gameOver()) return; // проверка на окончание игры
        gameOver();
        clearScreen(0, timerContainer.y + 4, setting.width, setting.height); // очистка поля
        drawAllTargets();
    }, level.speed);
}
