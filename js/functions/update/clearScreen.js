import { canvas } from '../../script.js';
import setting from '../../../setting/setting.js';

export default function clearScreen(x = 0, y = 0, width = setting.width, height = setting.height) {
    canvas.clearRect(x, y, width, height);
}
