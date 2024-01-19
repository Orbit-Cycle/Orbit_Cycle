ServerEvents.recipes((e) =>
    e.custom({
        type: "occultism:ritual",
        ritual_type: "occultism:familiar",
        activation_item: {
            item: "occultism:book_of_binding_bound_djinni",
        },
        pentacle_id: "occultism:possess_djinni",
        duration: 30,
        entity_to_sacrifice: {
            tag: "forge:horses",
            display_name: "ritual.occultism.sacrifice.horses",
        },
        entity_to_summon: "occultism:fairy_familiar",
        ritual_dummy: {
            item: "occultism:ritual_dummy/familiar_fairy",
        },
        ingredients: [
            {
                item: "allthemodium:allthemodium_apple",
            },
            {
                item: "allthemodium:allthemodium_apple",
            },
            {
                item: "reliquary:void_tear",
            },
            {
                item: "ars_nouveau:fire_essence",
            },
            {
                item: "ars_nouveau:fire_essence",
            },
            {
                item: "ars_nouveau:fire_essence",
            },
            {
                item: "apotheosis:infused_breath",
            },
        ],
        result: {
            item: "occultism:spawn_egg/familiar_fairy",
            nbt: {
                display: {
                    Lore: [
                        '[{"translate":"item.occultism.ritual_dummy.familiar_fairy.tooltip"}]',
                    ],
                    Name: '[{"translate":"item.occultism.ritual_dummy.familiar_fairy"}]',
                },
            },
        },
    })
);
