ServerEvents.recipes((e) => {
    e.recipes.create
        .compacting(Fluid.of("orbitcycle:superheated_chocolate", 250), [
            Fluid.of("orbitcycle:superheated_chocolate_vapor", 500),
        ])
        .superheated()
        .processingTime(2000);
});
