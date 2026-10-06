ServerEvents.loaded(event => {
    if (event.server.persistentData.first_load_done) {
        console.log("persistentData", event.server.persistentData);

        return
    }

    event.server.runCommandSilent('gamerule doInsomnia false')
    event.server.runCommandSilent('gamerule doTraderSpawning false')
    event.server.runCommandSilent('gamerule doFireTick false')
    event.server.runCommandSilent('gamerule mobGriefing false')
    event.server.runCommandSilent('gamerule keepInventory true')
    event.server.runCommandSilent('gamerule lavaSourceConversion true')

    event.server.persistentData.first_load_done = true
})

PlayerEvents.loggedIn(event => {
    const { player, level } = event;
    const STARTING_ITEMS_STAGE = "granted_starting_items"
    if (player.stages.has(STARTING_ITEMS_STAGE)) {
        return;
    }
    player.give(Item.of('botania:lexicon', '{"botania:elven_unlock":1b}'))

    
    player.stages.add(STARTING_ITEMS_STAGE)
});