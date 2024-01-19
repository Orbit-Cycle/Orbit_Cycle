ServerEvents.recipes((e) => {
    e.shaped("tiab:time_in_a_bottle", ["MBO", "SHS", "LED"], {
        M: { tag: "forge:ingots/manasteel" },
        B: { tag: "forge:ingots/brass" },
        O: { tag: "forge:ingots/ostrum" },
        S: { item: "mysticalagriculture:supremium_essence" },
        H: { item: "naturesaura:clock_hand" },
        L: { item: "bloodmagic:apprenticebloodorb" },
        E: Item.of("ars_nouveau:potion_flask_extend_time", "{Damage:8}"),
        D: { tag: "tombstone:decorative_grave_ingredients" },
    });
});
