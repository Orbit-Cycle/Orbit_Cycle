const fluids = {
    'minecraft:lava': ['orbitcycle:superheated_chocolate'],
    'minecraft:water': [],
    'forge:gas': ['orbitcycle:superheated_chocolate_vapor'],
};
const items = { 'minecraft:lava': ['orbitcycle:superheated_chocolate'] };

ServerEvents.tags('fluid', (event) => {
    for (var key in fluids) {
        fluids[key].forEach((element) => {
            event.add(key, element);
            event.add(key, global.getFlowingFluid(element));
            if (global.Config.DEBUG) console.log('Added: ' + key + ' : ' + element); // DEBUG
        });
    }
    if (global.Config.DEBUG) console.log('Added fluid tags'); // DEBUG
});

ServerEvents.tags('item', (event) => {
    for (var key in items) {
        items[key].forEach((element) => {
            event.add(key, element);
            event.add(key, [element.slice(0, element.indexOf(':') + 1), 'flowing_', element.slice(element.indexOf(':') + 1)].join(''));
            if (global.Config.DEBUG) console.log('Added: ' + key + ' : ' + element); // DEBUG
        });
    }
});
