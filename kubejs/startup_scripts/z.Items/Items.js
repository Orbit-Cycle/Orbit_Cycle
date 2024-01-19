// priority: 15
global.ItemsList = null;

const theAllKnowingTofuID = 'the_all_knowing_tofu';

global.ItemsList = {
    The_All_Knowing_Tofu: {
        id: theAllKnowingTofuID,
        display_name: '§6The All Knowing Tofu',
        food: {
            hunger: 4,
            saturation: 6,
            effect: null,
            removeEffect: null,
            alwaysEdible: false,
            fastToEat: true,
            meat: false,
            eatenFunction: global.theAllKnowingTofu,
        },
    },
};

global.itemsToAddToCreative = [];

if (global.Config.DEBUG) console.log('Items Loaded, ID: ' + global.Config['ID']); // DEBUG
