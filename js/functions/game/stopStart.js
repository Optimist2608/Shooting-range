import { drawMenu } from '../create/draw.js';
import clearScreen from '../update/clearScreen.js';
import { play, stopGameIntervals } from './play.js';
import data from '../../../data/data.js';
import flags from '../../flags.js';

export default function stopStart() {
    stopGameIntervals();
    if (flags.isStart) {
        clearScreen();
        play(data.level);
        flags.isLevels = false;
    } else {
        clearScreen();
        flags.isLevels = true;
        drawMenu();
    }
}
