ServerEvents.recipes((e) => {
    e.recipes.create
        .mixing(Fluid.of("orbitcycle:superheated_chocolate_vapor", 500), [
            Fluid.lava(250),
            Fluid.of("create:chocolate", 250),
        ])
        .superheated()
        .processingTime(1000);
});
