ServerEvents.loaded(event => {
    if (event.server.persistentData.first_load_done) {
        return
    }

    event.server.runCommandSilent('say First world load!')

    event.server.runCommandSilent('gamerule doDaylightCycle false')
    event.server.runCommandSilent('time set day')
    event.server.runCommandSilent('give @a minecraft:diamond 10')

    event.server.persistentData.first_load_done = true
})