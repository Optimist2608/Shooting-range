import {
    backBtn,
    replayBtn,
    score,
    target,
    timerContainer,
    toMenuContainer,
    ammoContainer,
} from '../../../setting/items.js';
import clearScreen from '../update/clearScreen.js';
import replayAudio from '../audioPlay/replayAudio.js';
import data from '../../../data/data.js';
import updateLevel from '../update/updateLevel.js';
import updateGun from '../update/updateGun.js';
import updateScore from '../update/updateScore.js';
import stopStart from './stopStart.js';
import setting from '../../../setting/setting.js';
import {
    drawGunContainer,
    drawLevelContainer,
    drawScore,
    drawPause,
    drawAmmoContainer,
} from '../create/draw.js';
import flags from '../../flags.js';
import levels from '../../../setting/levels.js';
import guns from '../../../setting/guns.js';
import { stopGameIntervals } from './play.js';
import updateLimitAmmo from '../update/updateLimitAmmo.js';
function checkTarget(event, target) {
    const clickX = event.clientX;
    const clickY = event.clientY;
    const betwenLeftRight = clickX >= target.x && clickX <= target.x + target.width;
    const betwenUpDown = clickY >= target.y && clickY <= target.y + target.height;
    return betwenLeftRight && betwenUpDown;
}
function finishGame(isWin) {
    flags.isWin = isWin;
    flags.isStart = false;

    stopGameIntervals();
    clearScreen();
    drawPause();
    updateLimitAmmo();
}
document.addEventListener('click', (event) => {
    // Проверка на попадание в ловушку

    data.antiTargets.forEach((el) => {
        if (
            checkTarget(event, el) &&
            flags.isStart &&
            data.ammo > 0 &&
            !flags.isShoting &&
            !flags.isReloading
        ) {
            flags.isPopal = true;
            clearScreen(0, timerContainer.y + 10, setting.width, setting.height); // очистка экрана главного
            clearScreen(score.x, score.y + 4, 200, -30); // очистка score
            data.score--;
            drawScore(data.level.limitScore);
        }
    });

    // Проверка на попадание в цель

    if (
        checkTarget(event, target) &&
        !flags.isPopal &&
        flags.isStart &&
        data.ammo > 0 &&
        !flags.isShoting &&
        !flags.isReloading
    ) {
        flags.isPopal = true;
        clearScreen(0, timerContainer.y + 10, setting.width, setting.height); // очистка экрана главного
        clearScreen(score.x, score.y + 4, 200, -30); // очистка score

        data.score += data.gun.scoreBuster;
        if (data.score >= data.level.limitScore) {
            data.score = data.level.limitScore;
            finishGame(true);
            replayAudio(data.gun.audioShot);
            return;
        }
        drawScore(data.level.limitScore);
    }
    // Проверка на наличие патронов и выстрел

    if (
        data.ammo > 0 &&
        flags.isStart &&
        !checkTarget(event, toMenuContainer) &&
        !flags.isShoting &&
        !flags.isReloading
    ) {
        flags.isShoting = true;
        setTimeout(() => {
            flags.isShoting = false;
        }, data.gun.shotDelay);
        data.ammo--;
        clearScreen(ammoContainer.x, ammoContainer.y + 4, 200, -30); // очистка ammo
        drawAmmoContainer(data.ammo, data.ammoLimit);
        replayAudio(data.gun.audioShot);
    } else if (
        data.ammo === 0 &&
        flags.isStart &&
        !checkTarget(event, toMenuContainer) &&
        !flags.isReloading
    ) {
        replayAudio(data.audioEmptyAmmo);
    }

    // Проверка на выбор уровня и оружия

    levels.forEach((el, i) => {
        if (checkTarget(event, drawLevelContainer(i, false)) && flags.isLevels) {
            updateLevel(i);
        }
    });

    guns.forEach((el, i) => {
        if (checkTarget(event, drawGunContainer(i, guns[i].src, false)) && flags.isLevels) {
            updateGun(i);
            replayAudio(data.audioEquip);
        }
    });

    // Проверка на кнопки

    function updateGameOptions(isStart, isWin) {
        flags.isStart = isStart;
        flags.isWin = isWin;
        updateScore();
        stopStart();
        updateLimitAmmo();
    }

    if (checkTarget(event, replayBtn) && !flags.isStart) {
        updateGameOptions(true, false);
    }
    if (checkTarget(event, backBtn) && !flags.isStart) {
        updateGameOptions(false, false);
    }

    if (checkTarget(event, toMenuContainer) && flags.isStart) {
        updateGameOptions(false, false);
    }
});

// Проверка на перезарядку

document.addEventListener('keyup', (event) => {
    if ((event.key === 'r' || event.key === 'к') && !flags.isReloading && flags.isStart) {
        flags.isReloading = true;
        replayAudio(data.gun.audioReload);
        setTimeout(() => {
            data.ammo = data.ammoLimit;
            clearScreen(ammoContainer.x, ammoContainer.y + 4, 200, -30); // очистка ammo
            drawAmmoContainer(data.ammo, data.ammoLimit);

            flags.isReloading = false;
        }, data.gun.reloadTime);
    }
});
