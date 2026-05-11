import { canvas } from '../../script.js';

export default function debug(x, y, w, h) {
    canvas.fillStyle = 'blue';
    canvas.fillRect(x, y, w, h);
}
