import guns from '../setting/guns.js';

export default {
    score: 0,
    level: undefined,
    gun: guns[0],
    antiTargets: [],
    audioEquip: './audio/equip.mp3',
    audioEmptyAmmo: './audio/emptyAmmo.mp3',
    ammoLimit: guns[0].ammo,
    ammo: guns[0].ammo,
};
