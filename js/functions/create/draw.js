import { canvas } from '../../script.js';
import data from '../../../data/data.js';
import {
    alertInPause,
    antiTarget,
    backBtn,
    gunContainer,
    gunsContainer,
    levelContainer,
    levelsContainer,
    pauseContainer,
    replayBtn,
    rulesContainer,
    score,
    target,
    timerContainer,
    titleGame,
    toMenuContainer,
    ammoContainer,
} from '../../../setting/items.js';
import flags from '../../flags.js';
import levels from '../../../setting/levels.js';
import guns from '../../../setting/guns.js';

function drawRectAndText(
    config,
    isRect = true,
    isText = true,
    isStroke = false,
    text = '',
    xParam = undefined,
    yParam = undefined
) {
    if (isRect) {
        canvas.fillStyle = config.fill;
        canvas.fillRect(config.x, config.y, config.width || 0, config.height || 0);
    }
    if (isText) {
        canvas.font = config.font;
        canvas.fillStyle = config.fillWord || config.fill;
        const xText = xParam !== undefined ? xParam : config.x;
        const yText = yParam !== undefined ? yParam : config.y;
        canvas.fillText(text || config.text, xText, yText);
        if (isStroke) {
            canvas.strokeStyle = config.strokeFill;
            canvas.lineWidth = config.lineWidth;
            canvas.strokeText(text || config.text, xText, yText);
        }
    }
}

function drawTitleGame() {
    drawRectAndText(titleGame, false, true, true);
}
function drawTarget(x, y) {
    target.x = x;
    target.y = y;
    drawRectAndText(target, true, false);
}
function drawAntiTarget(x, y) {
    antiTarget.x = x;
    antiTarget.y = y;
    drawRectAndText(antiTarget, true, false);
}
function drawScore(text = '', x = score.x, y = score.y) {
    const outText = text !== '' ? ' / ' + text : '';
    drawRectAndText(score, false, true, true, 'Score: ' + data.score + outText, x, y);
}

function drawLevelsContainer() {
    drawRectAndText(levelsContainer, true, false);
}

function drawLevelContainer(index = 1, needDraw = true) {
    const x = levelsContainer.x + (levelContainer.width + 10) * index;
    const y = levelsContainer.y + 20;
    if (needDraw) {
        drawRectAndText(
            {
                fill: levelContainer.fill,
                x: x,
                y: y,
                width: levelContainer.width,
                height: levelContainer.height,
                font: levelContainer.font,
                fillWord: levelContainer.fillWord,
                strokeFill: levelContainer.strokeFill,
                lineWidth: levelContainer.lineWidth,
            },
            true,
            true,
            true,
            'Level #' + index,
            levelsContainer.x + (levelContainer.width + 10) * index + 12,
            levelsContainer.y + 52
        );
    } else {
        return {
            x: x,
            y: y,
            width: levelContainer.width,
            height: levelContainer.height,
        };
    }
}

function drawPauseContainer() {
    drawRectAndText(pauseContainer, true, false);
}

function drawReplayBtn() {
    drawRectAndText(
        replayBtn,
        true,
        true,
        true,
        replayBtn.text,
        replayBtn.x + 50,
        replayBtn.y + 60
    );
}
function drawBackBtn() {
    drawRectAndText(backBtn, true, true, true, backBtn.text, backBtn.x + 65, backBtn.y + 60);
}

function drawAlertInPause() {
    if (!flags.isWin) {
        drawRectAndText(
            {
                fill: '#d41818',
                font: alertInPause.font,
                strokeFill: alertInPause.strokeFill,
                lineWidth: alertInPause.lineWidth,
            },
            false,
            true,
            true,
            'Lose!',
            alertInPause.x,
            alertInPause.y
        );
    } else {
        drawRectAndText(
            {
                fill: '#30941e',
                font: alertInPause.font,
                strokeFill: alertInPause.strokeFill,
                lineWidth: alertInPause.lineWidth,
            },
            false,
            true,
            true,
            'Win!',
            alertInPause.x,
            alertInPause.y
        );
    }
}

function drawTimer(time) {
    drawRectAndText(
        { font: timerContainer.font, fill: timerContainer.fill },
        false,
        true,
        false,
        time,
        timerContainer.x,
        timerContainer.y
    );
}
function drawGunsContainer() {
    drawRectAndText(gunsContainer, true, false);
}
function drawGunContainer(index = 0, src = '', needDraw = true) {
    const x = gunsContainer.x + 90 + (gunContainer.width + 10) * index;
    const y = gunsContainer.y + 15;
    if (needDraw) {
        drawRectAndText(
            {
                fill: gunContainer.fill,
                x: x,
                y: y,
                width: gunContainer.width,
                height: gunContainer.height,
            },
            true,
            false,
            false
        );
        if (src) {
            const gunImage = new Image();
            gunImage.onload = function () {
                canvas.drawImage(gunImage, x, y, gunContainer.width, gunContainer.height);
            };
            gunImage.src = src;
        }
    } else {
        return {
            x: x,
            y: y,
            width: gunContainer.width,
            height: gunContainer.height,
        };
    }
}
function drawRulesContainer() {
    const rules = [
        `Подсказки:`,
        '1) Нужно попадать в золотые цели',
        '2) Избегайте серых целей',
        '3) Перезарядка - клавиша R,',
        '4) За каждое оружие даются свои баллы,',
        '5) Желательное разрешение 1600x900 px, ',
        'при 1920px увеличьте сайт до 110%,',
        'при 2560px увеличьте сайт до 150%',
    ];
    rules.forEach((rule, i) => {
        drawRectAndText(
            {
                font: rulesContainer.font,
                fill: rulesContainer.fill,
            },
            false,
            true,
            true,
            rule,
            rulesContainer.x,
            rulesContainer.y + 30 * i
        );
    });
}
function drawToMenuContainer() {
    drawRectAndText(
        toMenuContainer,
        true,
        true,
        false,
        toMenuContainer.text,
        toMenuContainer.x + 18,
        toMenuContainer.y + 28
    );
}
function drawAmmoContainer(ammo, ammoLimit) {
    drawRectAndText(
        ammoContainer,
        false,
        true,
        false,
        `Ammo: ${ammo} / ${ammoLimit}`,
        ammoContainer.x,
        ammoContainer.y
    );
}
function drawPause() {
    drawPauseContainer();
    drawScore('', pauseContainer.x + 85, pauseContainer.y + 40);
    drawAlertInPause();
    drawReplayBtn();
    drawBackBtn();
}

function drawMenu() {
    drawTitleGame();
    drawLevelsContainer();
    levels.forEach((level, i) => {
        drawLevelContainer(i);
    });
    drawGunsContainer();
    guns.forEach((gun, i) => {
        drawGunContainer(i, gun.src);
    });

    drawRulesContainer();
}

export {
    drawTarget,
    drawScore,
    drawLevelsContainer,
    drawLevelContainer,
    drawMenu,
    drawPause,
    drawTimer,
    drawGunContainer,
    drawAntiTarget,
    drawToMenuContainer,
    drawAmmoContainer,
};
