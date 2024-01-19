// priority: 3
const agustusid = global.Config['ID'] + ':' + 'scalding';
/* Register effects */
StartupEvents.registry('mob_effect', (event) => {
    let effect = event // Effect Builder
        .create(agustusid)
        .displayName(Component.darkRed('Agustus Gloop'))
        .effectTick((entity, lvl) => global.agustusGloopEffect(entity, lvl)) // Set a tick event to apply the action
        .color(Color.BROWN_DYE);

    effect.harmful();
    //if (element['beneficial']) effect.beneficial();

    if (global.Config.DEBUG) console.log(`Effect ${effect.id}: ` + effect); // DEBUG
});

const AGUSTUS_DAMAGE_TYPE = $ResourceKey.createRegistryKey('damage_type');

global.agustusGloopEffect = (entity, lvl) => {
    if (global.Config.DEBUG) console.log('Creating Damage Source: ' + global.scaldingEffectID + '\nLevel: ' + entity.level());
    const agustusdamagesource = getDamageSource(entity.level(), 'orbitcycle:agustusgloop');
    if (entity.level.clientSide) return; // Check if the global is run on the client. If so, return

    entity.attack(agustusdamagesource, lvl + 1);
    entity.setRemainingFireTicks(25);
};

function getDamageSource(/** @type {Internal.Level}*/ level, /** @type {Internal.DamageType_}*/ damageType) {
    console.log('damage: ' + AGUSTUS_DAMAGE_TYPE);
    const resourceKey = $ResourceKey.create(AGUSTUS_DAMAGE_TYPE, Utils.id(damageType));
    console.log(resourceKey);
    const holder = level.registryAccess().registryOrThrow(AGUSTUS_DAMAGE_TYPE).getHolderOrThrow(resourceKey);
    return new DamageSource(holder);
}
