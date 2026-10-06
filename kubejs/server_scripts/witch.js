EntityEvents.hurt(event => {
    const {entity} = event
    
    if(event.entity.type == "minecraft:witch" && event.damage > 2 && event.entity.health < 20) {
        event.server.runCommandSilent(`summon item ${Math.round(entity.x)} ${Math.round(entity.y)} ${Math.round(entity.z)} {Item:{id:"botania:magenta_petal",Count:1b}}`)
    }
})