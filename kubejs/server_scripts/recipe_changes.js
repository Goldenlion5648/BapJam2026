// priority: 0

const { $BlockPos$MutableBlockPos } = require("java:net/minecraft/core");

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.recipes(event => {
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
    event.recipes.botania.mana_infusion("botania:red_mushroom", "minecraft:crimson_fungus", 800)
    event.shapeless('botania:red_petal', ['botania:red_mushroom'])
    event.remove({ id: "minecraft:tnt"})
    event.custom({
        "type": "botania:pure_daisy",
        "input": {
            "type": "block",
            "block": "botania:red_petal_block"
        },
        "output": {
            "name": "minecraft:air"
        },
        "success_function": "botania_evolved:prime_tnt"
    })
    
    event.remove({ id: /botania:mushroom_\d\d?/})
    event.remove({ output: "botania:mana_powder"})
    event.replaceInput({ type: "botania:runic_altar"}, "minecraft:sugar_cane", "minecraft:kelp")
    // event.recipes.botania.pure_daisy()
    console.log('Hello! The recipe event has fired!')
})


BlockEvents.rightClicked(event => {
    const { player, server, block, item } = event
    var level = block.level
    // server.runCommand(`tellraw ${player.username} "using on ${block.getTags()}"`);
    if (item === "kubejs:fertilizer" && block.hasTag("minecraft:dirt")) {
        // server.runCommand(`tellraw ${player.username} "using2"`);
        const block_pos = block.getPos()
        for (let i = 0; i < 4; i++) {
            var x_offset = Math.round(Math.random() * 7) - 3
            var z_offset = Math.round(Math.random() * 7) - 3
            var new_flower_pos = new BlockPos(block_pos.x + x_offset, block_pos.y + 1, block_pos.z + z_offset)
            if (level.getBlock(new_flower_pos).down == "minecraft:dirt" && level.getBlock(new_flower_pos) == "minecraft:air") {
                level.getBlock(new_flower_pos).set("botania:white_mystical_flower")
            }
        }
        event.item.count--
    }
})


