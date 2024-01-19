const CHOCOLATE = 'orbitcycle:superheated_chocolate';
const VAPOR = 'orbitcycle:superheated_chocolate_vapor';
const vaping = false;

PlayerEvents.tick((event) => {
    event.server.scheduleInTicks(20, (callback) => {
        let chocolate = Fluid.of(global.getFlowingFluid(CHOCOLATE)).fluid;
        let chocolate_flowing = Fluid.of(CHOCOLATE).fluid;
        let chocolate_vapor = Fluid.of(global.getFlowingFluid(VAPOR)).fluid;
        let chocolate_vapor_flowing = Fluid.of(VAPOR).fluid;
        const playerAt = event.getPlayer().getLevel().getFluidState(event.getPlayer().blockPosition());

        //if (global.Config.DEBUG) console.log('player: ' + playerAt.is(CHOCOLATE)); // SPAMMY DEBUG

        let potionEffects = event.player.potionEffects;
        if (playerAt.is(chocolate) || playerAt.is(chocolate_flowing)) {
            potionEffects.add('orbitcycle:scalding', 25, 2, false, false);
        } else if (playerAt.is(chocolate_vapor) || playerAt.is(chocolate_vapor_flowing)) {
            event.server.scheduleInTicks(60, () => {
                potionEffects.add('orbitcycle:vaper', 25, 2, false, false);
            });
        }
    });
});
