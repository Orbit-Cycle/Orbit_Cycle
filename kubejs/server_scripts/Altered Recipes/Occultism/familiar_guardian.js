ServerEvents.recipes((e) =>
    e.custom({
        type: "occultism:ritual",
        ritual_type: "occultism:familiar",
        activation_item: {
            item: "occultism:book_of_binding_bound_afrit",
        },
        pentacle_id: "occultism:possess_afrit",
        duration: 60,
        entity_to_sacrifice: {
            tag: "occultism:humans",
            display_name: "ritual.occultism.sacrifice.humans",
        },
        entity_to_summon: "occultism:guardian_familiar",
        ritual_dummy: {
            item: "occultism:ritual_dummy/familiar_guardian",
        },
        ingredients: [
            {
                item: "undergarden:shiverstone_bricks",
            },
            {
                item: "undergarden:shiverstone_bricks",
            },
            {
                item: "undergarden:shiverstone_bricks",
            },
            {
                item: "ars_nouveau:source_gem_block",
            },
            {
                item: "ars_nouveau:source_gem_block",
            },
            {
                item: "ars_nouveau:source_gem_block",
            },
            {
                item: "allthemodium:allthemodium_apple",
            },
            {
                item: "allthemodium:allthemodium_apple",
            },
        ],
        result: {
            item: "occultism:spawn_egg/familiar_guardian",
            nbt: {
                display: {
                    Lore: [
                        '[{"translate":"item.occultism.ritual_dummy.familiar_guardian.tooltip"}]',
                    ],
                    Name: '[{"translate":"item.occultism.ritual_dummy.familiar_guardian"}]',
                },
            },
        },
    })
);
