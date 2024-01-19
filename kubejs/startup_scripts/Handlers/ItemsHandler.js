// priority: 3
StartupEvents.registry('item', (event) => {
    Object.values(global.ItemsList).forEach((element) => {
        const id = element['id']; // Item ID
        const itemid = global.Config['ID'] + ':' + id; // Item Mod ID

        var item = event // Item Builder
            .create(itemid)
            .texture(`${global.Config['ItemTextureLocation']}/${id}`) // This texture would be located at kubejs/assets/orbitcycle/textures/item/element["id"]
            .displayName(element['display_name']);

        // Boolean Attributes
        if (element['unstackable']) item.unstackable();
        if (element['glow']) item.glow(true);

        // Other Attributes
        if (element['damage'] !== undefined) item.damage(element['damage']);
        if (element['stackSize'] !== undefined) item.maxStackSize(element['stackSize']);
        if (element['food'] !== undefined) item.food((food) => foodManager(food, element['food']));

        global.itemsToAddToCreative.push(id); // Add Item To Creative Menu
    });
});

/**
 * Manages the food builder
 *
 * @param {Internal.FoodBuilder} food Food Builder
 */
function foodManager(food, element) {
    food.hunger(element['hunger']).saturation(element['saturation']);

    let effect = element['effect'];
    if (effect) food.effect(effect['type'], effect['length'], effect['strength'], effect['visible']);
    if (element['removeEffect']) food.removeEffect(element['removeEffect']);

    if (element['fastToEat']) food.fastToEat(true);
    if (element['meat']) food.meat(true);

    food.eaten((ctx) => element['eatenFunction'](ctx));
}
