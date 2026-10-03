EntityEvents.spawned(event => {
    if(event.entity.type == "minecraft:shulker_bullet") {
        const {entity, server} = event
        // var motion = {
        //     x : entity.motionX,
        //     y : entity.motionY,
        //     z : entity.motionZ
        // }
        // const new_pos = {
        //     x: entity.x + entity.motionX ** 2 + entity.motionY ** 2,
        //     y: entity.y + entity.motionY,
        //     z: entity.z + entity.motionZ*3
        // }
        var x_add = 0
        var z_add = 0
        if(entity.motionX > entity.motionZ) {
            x_add = 1
        } else {
            z_add = 1
        }
        
        if (Math.random() < .3) {
            server.runCommandSilent(`summon item ${Math.round(entity.x)} ${Math.round(entity.y)} ${Math.round(entity.z)} {Item:{id:"botania:pink_petal",Count:1b}}`)
        }
    }
})