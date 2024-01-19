ServerEvents.recipes((e) => {
    e.shaped("tempad:tempad", ["RID", "OBM", "RID"], {
        M: { item: "rftoolsutility:environmental_controller" },
        B: { item: "ae2:quartz_vibrant_glass" },
        O: { tag: "simplylight:any_lamp_on" },
        D: { item: "minecraft:diamond_block" },
        I: { item: "minecraft:iron_block" },
        R: { item: "minecraft:redstone_block" },
    });
});
