const sword_element = {
    output: "allthemodium:allthemodium_sword",
    id: `${global.Config["ID"]}:allthemodium_sword`,
    items: {
        P: { item: "allthemodium:allthemodium_plate" },
        R: { item: "allthemodium:allthemodium_rod" },
        I: { item: "allthemodium:allthemodium_ingot" },
    },
};

ServerEvents.recipes((e) => {
    e.remove(sword_element["output"]);
    e.recipes.create
        .mechanical_crafting(
            sword_element["output"],
            [
                "    P    ",
                "   PIP   ",
                "   PIP   ",
                "   PIP   ",
                "  PPIPP  ",
                " PIPRPIP ",
                "  PPRPP  ",
                "   PRP   ",
                "    P    ",
            ],
            sword_element["items"]
        )
        .id(sword_element["id"]);
});
