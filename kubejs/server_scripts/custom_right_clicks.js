BlockEvents.rightClicked(event => {
    const { player, server, block, item } = event
    var level = block.level
    // server.runCommand(`tellraw ${player.username} "using on ${block.getTags()}"`);
    console.log("block", block);
    console.log("hasTag", block.hasTag("minecraft:dirt"));
    
    if (item === "kubejs:fertilizer" && block.hasTag("minecraft:dirt")) {
        // server.runCommand(`tellraw ${player.username} "using2"`);
        const block_pos = block.getPos()
        for (let i = 0; i < 4; i++) {
            var x_offset = Math.round(Math.random() * 7) - 3
            var z_offset = Math.round(Math.random() * 7) - 3
            var new_flower_pos = new BlockPos(block_pos.x + x_offset, block_pos.y + 1, block_pos.z + z_offset)
            if (level.getBlock(new_flower_pos).down.hasTag("minecraft:dirt") && level.getBlock(new_flower_pos) == "minecraft:air") {
                level.getBlock(new_flower_pos).set("botania:white_mystical_flower")
            }
        }
        event.item.count--
    }
})

ItemEvents.rightClicked("kubejs:secret1", event => {
    var player_name = event.player.displayName.string
    console.log(player_name);
    
    event.server.runCommand(`tellraw ${player_name} [{"text":"Note for Boss:\\n","color":"light_purple"},{"text":"Our experiments were a success. I made these Pure Daisies able to consume some of Red's block form, and leave behind some... ","color":"white"},{"text":"explosive ","color":"red","bold":true,"italic":true},{"text":"effects.","color":"white"}] `)

})