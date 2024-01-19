// priority: 0
const mods_to_remove = ['extendedcrafting'];

ServerEvents.recipes((e) => {
    for (let recipe of mods_to_remove) e.remove({ mod: recipe });
});
