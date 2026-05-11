import data from '../../../data/data.js';
import randomInt from '../support/randomInt.js';
import { antiTarget, target, timerContainer } from '../../../setting/items.js';
import setting from '../../../setting/setting.js';

export default function createAntiTargetArray() {
    const out = [];
    for (let i = 0; i < data.level.antiTargetCount; i++) {
        let x, y;
        do {
            x = randomInt(0, setting.width - antiTarget.width);
            y = randomInt(timerContainer.y + 4, setting.height - antiTarget.height);
        } while (
            (x >= target.x - antiTarget.width && x <= target.x + target.width) ||
            (y >= target.y - antiTarget.height && y <= target.y + target.height)
        );

        out.push({
            x: x,
            y: y,
            width: antiTarget.width,
            height: antiTarget.height,
        });
    }
    data.antiTargets = out;
    return out;
}
