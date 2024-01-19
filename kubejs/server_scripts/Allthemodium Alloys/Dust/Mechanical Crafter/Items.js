let AllTheModiumDustRecipes = {
    va: {
        output: "allthemodium:vibranium_allthemodium_alloy_dust",
        id: `${global.Config["ID"]}:vibranium_allthemodium_alloy_dust`,
        items: {
            A: { tag: "forge:dusts/allthemodium" },
            U: { tag: "forge:dusts/vibranium" },
            Z: { tag: "forge:dusts/blaze_gold" },
            H: { item: "allthemodium:piglich_heart" },
            T: { item: "minecraft:nether_star" },
        },
    },

    ua: {
        output: "allthemodium:unobtainium_allthemodium_alloy_dust",
        id: `${global.Config["ID"]}:unobtainium_allthemodium_alloy_dust`,
        items: {
            U: { tag: "forge:dusts/unobtainium" },
            A: { tag: "forge:dusts/allthemodium" },
            Z: { tag: "forge:dusts/azure_silver" },
            H: { item: "allthemodium:piglich_heart" },
            T: { item: "allthemodium:vibranium_allthemodium_alloy_dust" },
        },
    },
    uv: {
        output: "allthemodium:unobtainium_vibranium_alloy_dust",
        id: `${global.Config["ID"]}:unobtainium_vibranium_alloy_dust`,
        items: {
            A: { tag: "forge:dusts/unobtainium" },
            U: { tag: "forge:dusts/vibranium" },
            Z: { tag: "forge:dusts/starmetal" },
            H: { item: "allthemodium:piglich_heart" },
            T: { item: "allthemodium:unobtainium_allthemodium_alloy_dust" },
        },
    },
};

ServerEvents.recipes((e) => {
    Object.values(AllTheModiumDustRecipes).forEach((element) => {
        e.recipes.create
            .mechanical_crafting(
                element["output"],
                ["  T  ", " UZA ", "UZHZA", " UZA "],
                element["items"]
            )
            .id(element["id"]);
    });
});
