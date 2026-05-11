import guns from '../../../setting/guns.js';
import data from '../../../data/data.js';
import updateLimitAmmo from './updateLimitAmmo.js';
export default function updateGun(index) {
    data.gun = guns[index];
    updateLimitAmmo();
}
