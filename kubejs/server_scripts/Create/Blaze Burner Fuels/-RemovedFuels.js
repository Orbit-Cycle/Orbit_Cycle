// priority: 0
const fuels_to_remove = ["forge:biofuel"];

ServerEvents.recipes((e) => {
    for (let item of fuels_to_remove) {
        e.remove({ type: "createaddition:liquid_burning", tag: item });
    }
});
