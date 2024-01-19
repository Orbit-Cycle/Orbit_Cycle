// priority: 1
StartupEvents.registry('creative_mode_tab', (e) => {
    e.create(global.Config['ID'] + ':items')
        .icon(() => 'allthemodium:vibranium_allthemodium_alloy_dust')
        .content(() => global.itemsToAddToCreative)
        .displayName('§dThe Ones That Knew It All');
});
