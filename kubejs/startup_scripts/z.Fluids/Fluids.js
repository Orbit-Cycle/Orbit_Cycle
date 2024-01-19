// priority: 15
/**
 * Textures Types: thin, custom
 * custom texture:
 * Texture: {still: "still texture location", flowing: "flowing texture location", color: }
 */

const superheatedChocolateVaporID = 'superheated_chocolate_vapor';
const superheatedChocolateID = 'superheated_chocolate';

global.FluidsList = {
    Superheated_Chocolate_Vapor: {
        id: superheatedChocolateVaporID,
        displayName: 'Chocolate Vapor',
        textureType: 'thin',
        textureColor: 0xcf783e,
        bucket: {
            item: true,
            color: 0xcf783e,
        },
        gaseous: true,
        viscosity: 3000,
        density: 5,
        temperture: 4000,
        translucent: true,
    },
    Superheated_Chocolate: {
        id: superheatedChocolateID,
        displayName: 'Superheated Chocolate',
        textureType: 'thick',
        textureColor: 0xbf4d00,
        bucket: {
            item: true,
            color: 0xbf4d00,
        },
        gaseous: false,
        viscosity: 5,
        density: 1000,
        temperture: 4000,
    },
};

if (global.Config.DEBUG) console.log('Fluids Loaded, ID: ' + global.Config['ID']); // DEBUG
