// priority: 0

const { $BlockPos$MutableBlockPos } = require("java:net/minecraft/core");
const { $GameEvent } = require("java:net/minecraft/world/level/gameevent");

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

    global.hidden_pure_daisy_recipes = []
    const pure_daisy_with_function = (input, output, mc_func, is_hidden) => {
        if (is_hidden === undefined) {
            is_hidden = false
        }

        const input_name = input.split(":")[1]
        const output_name = output.split(":")[1]
        const mc_func_name = mc_func.split(":")[1]

        const recipe_name = `botania_evolved:${input_name}_${output_name}_${mc_func_name}`
        event.custom({
            "type": "botania:pure_daisy",
            "input": {
                "type": "block",
                "block": input
            },
            "output": {
                "name": output
            },
            "success_function": mc_func
        }).id(recipe_name)
        if (is_hidden) {
            global.hidden_pure_daisy_recipes.push(recipe_name)
        }
    }


    event.remove({ id: /botania:mushroom_\d\d?/ })
    event.remove({ output: "botania:mana_powder" })
    event.replaceInput({ type: "botania:runic_altar" }, "minecraft:sugar_cane", "minecraft:kelp")
    event.replaceInput({ output: "botania:hydroangeas" }, "botania:blue_petal", "botania:light_blue_petal")
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
    event.recipes.botania.runic_altar("botania:fertilizer",
        [
            'botania:black_petal_block', 
            'botania:red_petal_block', 
            'botania:green_petal_block', 
            'botania:brown_petal_block', 
            'botania:blue_petal_block', 
            'botania:purple_petal_block', 
            'botania:cyan_petal_block', 
            'botania:light_gray_petal_block', 
            'botania:gray_petal_block', 
            'botania:pink_petal_block', 
            'botania:lime_petal_block', 
            'botania:yellow_petal_block', 
            'botania:light_blue_petal_block', 
            'botania:magenta_petal_block', 
            'botania:orange_petal_block', 
            'botania:white_petal_block'
        ],
        250000
    )

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

    event.remove({ id: /botania:petal_.+_double/ })
    event.remove({ id: "botania:petal_apothecary/jaded_amaranthus" })

    event.shaped("minecraft:obsidian", ["XX", "XX"], {
        X: "botania:black_petal"
    })

    event.shaped("botania:cyan_petal", ["XX", "XX"], {
        X: "minecraft:sculk"
    })
    event.shaped("2x botania:purple_petal", ["XX", "X "], {
        X: "minecraft:amethyst_shard"
    })
    event.shaped("botania:gray_petal", ["XXX", "X Y", "YYY"], {
        X : "botania:white_petal",
        Y : "botania:black_petal"
    })
    event.remove({ output: "waystones:warp_stone" })
    event.shapeless("waystones:warp_stone", ["botania:purple_petal_block", "botania:green_petal_block"])
    
    event.remove({ id: "botania:petal_apothecary/pure_daisy" })
    event.shapeless("4x botania:white_petal", ["botania:pure_daisy"])
    event.shapeless("4x botania:light_gray_petal", ["botania:light_gray_double_flower"])
    event.shapeless("4x botania:black_petal", ["botania:black_double_flower"])
    event.shapeless("3x botania:orange_petal", ["minecraft:honeycomb", "minecraft:honeycomb"])
    event.shapeless("minecraft:sniffer_egg", ["minecraft:egg", "botania:brown_petal", "botania:green_petal"])

    pure_daisy_with_function("botania:red_petal_block", "minecraft:air", "botania_evolved:prime_tnt", true)
    pure_daisy_with_function("botania:purple_petal_block", "minecraft:air", "botania_evolved:spawn_shulker", false)

    event.remove({ output: "botania:cell_block" })
    event.remove({ output: "botania:thermalily" })
    event.remove({ output: "botania:narslimmus" })
    event.remove({ output: "botania:dandelifeon" })
    event.remove({ output: "quark:iron_rod" })
    event.recipes.botania.mana_infusion("quark:iron_rod", "minecraft:iron_bars", 10000)
    event.recipes.botania.mana_infusion("botania:blue_petal", "botania:manasteel_ingot", 1000)
    event.recipes.botania.mana_infusion("botania:brown_petal", "#minecraft:logs", 1000)
    
    event.custom({
        "type": "botania:petal_apothecary",
        "ingredients": [
            {
                "tag": "botania:petals/red"
            },
            {
                "tag": "botania:petals/yellow"
            },
            {
                "tag": "botania:petals/yellow"
            }
        ],
        "output": {
            "item": "botania:thermalily"
        },
        "reagent": {
            "tag": "botania:seed_apothecary_reagent"
        }
    })
    event.custom({"type":"botania:petal_apothecary","ingredients":[{"item":"botania:rune_water"},{"item":"botania:rune_fire"},{"item":"botania:rune_earth"},{"item":"botania:rune_air"},{"item":"botania:redstone_root"}],"output":{"item":"botania:dandelifeon"},"reagent":{"tag":"botania:seed_apothecary_reagent"}})
    event.custom({
        "type": "botania:petal_apothecary",
        "ingredients": [
            {
                "tag": "botania:petals/lime"
            },
            {
                "tag": "botania:petals/lime"
            },
            {
                "tag": "botania:petals/green"
            },
            {
                "tag": "botania:petals/green"
            },
            {
                "tag": "botania:petals/black"
            }
        ],
        "output": {
            "item": "botania:narslimmus"
        },
        "reagent": {
            "tag": "botania:seed_apothecary_reagent"
        }
    })



    // event.recipes.botania.pure_daisy()
    console.log('Hello! The recipe event has ended!')
})





