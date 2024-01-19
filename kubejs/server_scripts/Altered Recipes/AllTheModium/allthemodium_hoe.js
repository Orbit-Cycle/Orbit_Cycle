const hoe_element = {
    output: "allthemodium:allthemodium_hoe",
    id: `${global.Config["ID"]}:allthemodium_hoe`,
    items: {
        P: { item: "allthemodium:allthemodium_plate" },
        R: { item: "allthemodium:allthemodium_rod" },
        I: { item: "allthemodium:allthemodium_ingot" },
    },
};

ServerEvents.recipes((e) => {
    e.remove(hoe_element["output"]);
    e.recipes.create
        .mechanical_crafting(
            hoe_element["output"],
            [
                "    P ",
                "  PPRP",
                " PIIRP",
                "PIPPRP",
                " P PRP",
                "   PRP",
                "   PRP",
                "   PRP",
                "    P ",
            ],
            hoe_element["items"]
        )
        .id(hoe_element["id"]);
});
