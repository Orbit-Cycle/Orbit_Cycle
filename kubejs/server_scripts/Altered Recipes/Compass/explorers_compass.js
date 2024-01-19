ServerEvents.recipes((e) => {
    e.shaped("explorerscompass:explorerscompass", ["AWU", "WCW", "EWD"], {
        W: { tag: "minecraft:logs" },
        A: { item: "ad_astra:moon_stone" },
        U: { item: "ars_nouveau:sourcestone" },
        E: { item: "minecraft:blackstone" },
        D: { item: "minecraft:stone" },
        C: { item: "naturescompass:naturescompass" },
    });
});
