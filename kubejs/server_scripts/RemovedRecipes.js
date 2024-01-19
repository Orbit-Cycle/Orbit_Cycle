// priority: 0
const recipes_to_remove = [
    'occultism:ritual/familiar_fairy',
    'occultism:ritual/familiar_guardian',
    'naturescompass:natures_compass',
    'explorerscompass:explorers_compass',
    'allthemodium:allthemodium_hoe',
    'allthemodium:allthemodium_sword',
    'allthemodium:allthemodium_axe',
    'allthemodium:allthemodium_shovel',
    'allthemodium:allthemodium_pickaxe',
    'allthemodium:smithing/allthemodium_hoe_smithing',
    'allthemodium:smithing/allthemodium_sword_smithing',
    'allthemodium:smithing/allthemodium_axe_smithing',
    'allthemodium:smithing/allthemodium_shovel_smithing',
    'allthemodium:smithing/allthemodium_pickaxe_smithing',
];

ServerEvents.recipes((e) => {
    for (let recipe of recipes_to_remove) e.remove({ id: recipe });
});
