// priority: 0
const to_remove = [
    'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot',
    'magistuarmory:steel_ingot_blasting',
    'magistuarmory:furnace/steel_ingot_blasting',
    'tiab:time_in_a_bottle',
    'tempad:tempad',
    'hyperbox:hyperbox',

];

ServerEvents.recipes((e) => {
    for (let item of to_remove) e.remove({ id: item });
});
