// priority: 50
let ID = 'orbitcycle';
global.Config = {
    DEBUG: true,
    ID: ID,
    ItemTextureLocation: ID + ':item',
    MobEffectTextureLocation: ID + ':mob_effect',
    FluidTextureLocation: ID + ':fluid',
};

if (global.Config.DEBUG) console.log('Config Loaded,  ' + global.Config); // DEBUG
