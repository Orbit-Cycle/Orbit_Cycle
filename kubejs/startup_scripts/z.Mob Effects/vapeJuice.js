// priority: 3
const vaperid = global.Config['ID'] + ':' + 'vaper';
/* Register effects */
StartupEvents.registry('mob_effect', (event) => {
    let effect = event // Effect Builder
        .create(vaperid)
        .displayName(Component.red('Vape Juice'))
        .effectTick((entity, lvl) => global.vapeJuiceEffect(entity, lvl)) // Set a tick event to apply the action
        .color(Color.RED);

    effect.harmful();
    //if (element['beneficial']) effect.beneficial();

    if (global.Config.DEBUG) console.log(`Effect ${effect.id}: ` + effect); // DEBUG
});

const VAPER_DAMAGE_TYPE = $ResourceKey.createRegistryKey('damage_type');

global.vapeJuiceEffect = (entity, lvl) => {
    if (global.Config.DEBUG) console.log('Creating Damage Source: ' + global.vaperEffectID + '\nLevel: ' + entity.level());
    const vapedamagesource = getDamageSource(entity.level(), 'orbitcycle:chocolatevaper');
    if (entity.level.clientSide) return; // Check if the global is run on the client. If so, return

    entity.attack(vapedamagesource, lvl + 1);
    entity.displayFireAnimation();

    if (entity.isPlayer()) {
        entity.potionEffects.add('minecraft:nausea', 200, 4, false, false);
    }
};

function getDamageSource(/** @type {Internal.Level}*/ level, /** @type {Internal.DamageType_}*/ damageType) {
    console.log('damage: ' + VAPER_DAMAGE_TYPE);
    const resourceKey = $ResourceKey.create(VAPER_DAMAGE_TYPE, Utils.id(damageType));
    const holder = level.registryAccess().registryOrThrow(VAPER_DAMAGE_TYPE).getHolderOrThrow(resourceKey);
    return new DamageSource(holder);
}
