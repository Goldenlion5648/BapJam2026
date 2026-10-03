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
    event.shaped("2x botania:purple_petal", ["XX","X "], {
        X : "minecraft:amethyst_shard"
    })
    event.remove({id: "botania:petal_apothecary/pure_daisy"})
    event.shapeless("4x botania:white_petal", ["botania:pure_daisy"])
    pure_daisy_with_function("botania:red_petal_block", "minecraft:air", "botania_evolved:prime_tnt", true)
    pure_daisy_with_function("botania:purple_petal_block", "minecraft:air", "botania_evolved:spawn_shulker", true)

    

    // event.recipes.botania.pure_daisy()
    console.log('Hello! The recipe event has ended!')
})





