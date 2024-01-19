const pickaxe_element = {
    output: "allthemodium:allthemodium_pickaxe",
    id: `${global.Config["ID"]}:allthemodium_pickaxe`,
    items: {
        P: { item: "allthemodium:allthemodium_plate" },
        R: { item: "allthemodium:allthemodium_rod" },
        I: { item: "allthemodium:allthemodium_ingot" },
    },
};

ServerEvents.recipes((e) => {
    e.remove(pickaxe_element["output"]);
    e.recipes.create
        .mechanical_crafting(
            pickaxe_element["output"],
            [
                "    P    ",
                "  PPRPP  ",
                " PIIRIIP ",
                "PIPPRPPIP",
                " P PRP P ",
                "   PRP   ",
                "   PRP   ",
                "   PRP   ",
                "    P    ",
            ],
            pickaxe_element["items"]
        )
        .id(pickaxe_element["id"]);
});
