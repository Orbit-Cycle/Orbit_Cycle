// Register Damage Type
ServerEvents.highPriorityData((event) => {
    event.addJson('orbitcycle:damage_type/chocolatevaper', {
        'effects': ['burning', 'nausea'],
        'exhaustion': 0.5,
        'message_id': 'chocolatevaperKill',
        'scaling': 'when_caused_by_living_non_player',
    });
    event.addJson('orbitcycle:damage_type/agustusgloop', {
        'effects': 'burning',
        'exhaustion': 0.5,
        'message_id': 'agustusgloopKill',
        'scaling': 'when_caused_by_living_non_player',
    });
});
