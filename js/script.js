import stopStart from './functions/game/stopStart.js';
import setting from '../setting/setting.js';

const mainCanvas = document.querySelector('#canvas');
const canvas = mainCanvas.getContext('2d');
mainCanvas.width = setting.width;
mainCanvas.height = setting.height;
mainCanvas.style.backgroundColor = setting.background;

stopStart();

export { canvas };
