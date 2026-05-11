import data from '../../../data/data.js';

export default function updateLimitAmmo() {
    data.ammoLimit = data.gun.ammo;
    data.ammo = data.ammoLimit;
}
