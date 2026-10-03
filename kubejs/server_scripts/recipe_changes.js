// priority: 0

const { $BlockPos$MutableBlockPos } = require("java:net/minecraft/core");

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.recipes(event => {
    console.log('Hello! The recipe event has ended!')

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
    // event.recipes.botania.mana_infusion("botania:red_mushroom", "minecraft:crimson_fungus", 800)
    // event.shapeless('botania:red_petal', ['botania:red_mushroom'])
    event.remove({ output: "minecraft:tnt" })
    event.remove({ output: "botania:fertilizer" })
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
    }).id("botania_evolved:petal_to_tnt")

    event.remove({ id: /botania:mushroom_\d\d?/ })
    event.remove({ output: "botania:mana_powder" })
    event.replaceInput({ type: "botania:runic_altar" }, "minecraft:sugar_cane", "minecraft:kelp")
    // event.remove({ id: "botania:runic_altar/spring" })
    // event.custom({
    //     "type": "botania:runic_altar",
    //     "ingredients": [
    //         { "item": "botania:rune_water" },
    //         { "item": "botania:rune_fire" },
    //         { "tag": "minecraft:saplings" },
    //         { "tag": "minecraft:saplings" },
    //         { "tag": "minecraft:saplings" },
    //         { "item": "minecraft:wheat" }
    //     ],
    //     "mana": 8000,
    //     "output": { "item": "botania:rune_spring" }
    // })
    let runes = [
        'botania:rune_air', 
        'botania:rune_earth', 
        'botania:rune_fire', 
        'botania:rune_water'
    ]
    for (let rune of runes) {
        event.remove({ output: rune })
    }
    event.recipes.botania.runic_altar("botania:rune_air",
        [
            "botania:white_petal",
            "botania:light_blue_petal"
        ],
        8000
    ).id("botania:runic_altar/air")
    event.recipes.botania.runic_altar('botania:rune_earth',
        [
            "botania:green_petal",
            "botania:brown_petal"
        ],
        8000
    ).id("botania:runic_altar/earth")
    event.recipes.botania.runic_altar('botania:rune_fire',
        [
            "botania:red_petal",
            "botania:yellow_petal"
        ],
        8000
    ).id("botania:runic_altar/fire")
    event.recipes.botania.runic_altar('botania:rune_water',
        [
            "botania:blue_petal",
            "botania:cyan_petal"
        ],
        8000
    ).id("botania:runic_altar/water")

    event.remove({id: /botania:petal_.+_double/})
    event.remove({id: "botania:petal_apothecary/jaded_amaranthus"})
    event.shaped("minecraft:obsidian", ["XX","XX"], {
        X : "botania:black_petal"
    })
    event.remove({id: "botania:petal_apothecary/pure_daisy"})
    event.shapeless("4x botania:white_petal", ["botania:pure_daisy"])

    // event.recipes.botania.pure_daisy()
    console.log('Hello! The recipe event has ended!')
})


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


