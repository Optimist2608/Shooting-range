import stopStart from '../game/stopStart.js';
import data from '../../../data/data.js';
import flags from '../../flags.js';
import levels from '../../../setting/levels.js';

export default function updateLevel(levelNum) {
    data.level = levels.get(levelNum);
    flags.isStart = true;
    stopStart();
    return levelNum;
}
