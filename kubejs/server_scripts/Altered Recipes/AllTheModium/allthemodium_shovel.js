const shovel_element = {
    output: "allthemodium:allthemodium_shovel",
    id: `${global.Config["ID"]}:allthemodium_shovel`,
    items: {
        P: { item: "allthemodium:allthemodium_plate" },
        R: { item: "allthemodium:allthemodium_rod" },
        I: { item: "allthemodium:allthemodium_ingot" },
    },
};

ServerEvents.recipes((e) => {
    e.remove(shovel_element["output"]);
    e.recipes.create
        .mechanical_crafting(
            shovel_element["output"],
            [
                "    P    ",
                "   PIP   ",
                "  PIIIP  ",
                " PIIIIIP ",
                "  PIRIP  ",
                "   PRP   ",
                "   PRP   ",
                "   PRP   ",
                "    P    ",
            ],
            shovel_element["items"]
        )
        .id(shovel_element["id"]);
});
