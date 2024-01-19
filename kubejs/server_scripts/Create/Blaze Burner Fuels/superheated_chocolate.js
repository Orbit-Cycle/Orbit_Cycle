ServerEvents.recipes((e) => {
    e.custom({
        type: "createaddition:liquid_burning",
        input: {
            fluid: "orbitcycle:superheated_chocolate",
            amount: 1000,
        },
        burnTime: 4500,
        superheated: true,
    });
});
