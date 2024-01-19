ServerEvents.recipes((e) => {
    e.remove("create:compacting/blaze_cake");
    e.recipes.create
        .compacting("create:blaze_cake_base", [
            { tag: "forge:eggs" },
            { tag: "forge:sugar" },
            "create:cinder_flour",
            Fluid.of("create:chocolate", 125),
        ])
        .heated();
});
