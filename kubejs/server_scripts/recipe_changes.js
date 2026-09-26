// priority: 0

const { $BlockPos$MutableBlockPos } = require("java:net/minecraft/core");

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.recipes(event => {
    // You can replace `event` with any name you like, as
    // long as you change it inside the callback too!

    // This part, inside the curly braces, is the callback.
    // You can modify as many recipes as you like in here,
    // without needing to use ServerEvents.recipes() again.
    event.remove({ id: 'botania:elven_trade/elementium' })
    event.custom({
        type: "botania:elven_trade",
        "ingredients": [
            {
                "tag": "botania:manasteel_ingots"
            },
            {
                "item": 'minecraft:amethyst_shard'

            }
        ],
        "output": [
            {
                "item": "botania:elementium_ingot"
            }
        ]
    })
    
    console.log('Hello! The recipe event has fired!')
})

BlockEvents.rightClicked(event => {
    const {player, server, block, item} = event
    var level = block.level
    if (item === "minecraft:stick") {
        const block_pos = block.getPos()
        for (let i = 0; i < 10; i++) {
            var x_offset = Math.round(Math.random() * 7) - 3
            var z_offset = Math.round(Math.random() * 7) - 3
            var cur_pos = new BlockPos(block_pos.x + x_offset, block_pos.y + 1, block_pos.z + z_offset)
            if(level.getBlock(cur_pos) == "minecraft:air") {
                level.getBlock(cur_pos).set("botania:white_mystical_flower")
            }
        }
        event.item.count--
    }
})