// priority: 3
StartupEvents.registry('fluid', (event) => {
    Object.values(global.FluidsList).forEach((element) => {
        const id = element['id']; // Fluid ID
        const itemid = global.Config['ID'] + ':' + id; // Fluid Mod ID

        var fluid = event.create(itemid).displayName(element['displayName']); // Fluid Builder

        // Texture Manager
        switch (element['textureType']) {
            case 'thin':
                fluid.thinTexture(element['textureColor']);
                if (global.Config.DEBUG) console.log('thin Texture ' + element['textureColor']); // DEBUG
                break;
            case 'thick':
                fluid.thickTexture(element['textureColor']);
                if (global.Config.DEBUG) console.log('thick Texture ' + element['textureColor']); // DEBUG
                break;
            case 'custom':
                let location = global.Config['FluidTextureLocation'];
                fluid.stillTexture(`${location}/${id}`);
                fluid.flowingTexture(`${location}/${id}_flowing`);
                break;
        }

        // Bucket Builder
        let bucket = element['bucket'];
        if (bucket != undefined) {
            if (!bucket['item']) fluid.noBucket(); // Disables the bucket item, only fluid exists
            else {
                global.itemsToAddToCreative.push(itemid + '_bucket'); // Add Bucket Item To Creative Menu
                if (bucket['color'] !== undefined) fluid.bucketColor(bucket['color']); // the bucket color
                if (global.Config.DEBUG) console.log('Created bucket instance for fluid ' + id);
            }
        }

        // Boolean Attributes
        if (element['gaseous']) fluid.gaseous();
        if (element['translucent']) fluid.translucent();
        if (element['block'] === false) fluid.noBlock();
        //if (element['lighterThenAir']) fluid.createAttributes().isLighterThanAir();

        // Other Attributes
        if (element['viscosity'] !== undefined) fluid.viscosity(element['viscosity']);
        if (element['temperture'] !== undefined) fluid.temperature(element['temperture']);
        if (element['density'] !== undefined) fluid.density(element['density']);
        if (element['luminosity'] !== undefined) fluid.luminosity(element['luminosity']);

        //if (element['TranslationKey'] !== undefined) fluid.translationKey(element['TranslationKey']);

        if (global.Config.DEBUG) console.log(`Fluid ${fluid.id}: ` + fluid); // DEBUG
    });
});
