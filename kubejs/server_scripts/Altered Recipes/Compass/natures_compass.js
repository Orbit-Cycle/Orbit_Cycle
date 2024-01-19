ServerEvents.recipes((e) => {
    e.shaped("naturescompass:naturescompass", ["AWU", "WCW", "EWD"], {
        W: { tag: "minecraft:logs" },
        A: Ingredient.of([
            "ars_nouveau:purple_archwood_sapling",
            "ars_nouveau:blue_archwood_sapling",
            "ars_nouveau:green_archwood_sapling",
            "ars_nouveau:red_archwood_sapling",
        ]).toJson(),

        U: { item: "undergarden:smogstem_sapling" },
        E: { item: "deeperdarker:echo_sapling" },
        D: { item: "occultism:otherworld_sapling_natural" },
        C: { item: "minecraft:compass" },
    });
});
