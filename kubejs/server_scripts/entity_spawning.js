EntityEvents.spawned(event => {
    if(event.entity.type == "minecraft:slime") {
        event.cancel()
    }
})