ServerEvents.recipes((e) => {
    e.custom({
        type: "createaddition:liquid_burning",
        input: {
            fluid: "minecraft:lava",
            amount: 1000,
        },
        burnTime: 4500,
        superheated: false,
    });
});
