const axe_element = {
    output: "allthemodium:allthemodium_axe",
    id: `${global.Config["ID"]}:allthemodium_axe`,
    items: {
        P: { item: "allthemodium:allthemodium_plate" },
        R: { item: "allthemodium:allthemodium_rod" },
        I: { item: "allthemodium:allthemodium_ingot" },
    },
};

ServerEvents.recipes((e) => {
    e.remove(axe_element["output"]);
    e.recipes.create
        .mechanical_crafting(
            axe_element["output"],
            [
                " P  P ",
                "PIPPRP",
                "PIIIRP",
                "PIIIRP",
                "PIPPRP",
                " P PRP",
                "   PRP",
                "   PRP",
                "    P ",
            ],
            axe_element["items"]
        )
        .id(axe_element["id"]);
});
