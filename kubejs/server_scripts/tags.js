
ServerEvents.tags("block", event => {
    // event.add("botania_evolved:b_side_soil", 'minecraft:warped_nylium')
    // event.add("botania_evolved:b_side_soil", 'minecraft:crimson_nylium')
    // Block.of("#botania:mystical_flowers").itemIds.forEach(flower => {

    // event.removeAll("minecraft:small_flowers")
    // event.removeAll("minecraft:flowers")
    // const flowers = Ingredient.of("#botania:mystical_flowers")
    // // console.log("flowers", flowers);
    // event.remove('forge:cobblestone', ['minecraft:mossy_cobblestone'])
    // for (let flower of flowers.itemIds) {
    //     console.log(flower);

    //     event.remove("minecraft:small_flowers", flower)
    //     event.remove("minecraft:flowers", flower)
    // }

    // flowers.forEach(flower => {
    // })
})

ServerEvents.tags("item", event => {
    event.add("botania_evolved:b_side_soil", 'minecraft:warped_nylium')
    event.add("botania_evolved:b_side_soil", 'minecraft:crimson_nylium')
    // event.remove('forge:cobblestone', 'minecraft:mossy_cobblestone')
    // console.log(botania_mushrooms.itemIds);
    var colors = [
        "black",
        "red",
        "green",
        "brown",
        "blue",
        "purple",
        "cyan",
        "light_gray",
        "gray",
        "pink",
        "lime",
        "yellow",
        "light_blue",
        "magenta",
        "orange",
        "white",
    ]
    
    const botania_mushrooms = Ingredient.of("#botania:shimmering_mushrooms")
    for (let item of botania_mushrooms.itemIds) {
        event.removeAllTagsFrom([item])
    }
    for (let color of colors) {
        var item_names = [
            `botania:${color}_petal_block`, 
            `botania:${color}_petal`, 
            `botania:${color}_mystical_flower`
        ]
        event.add(`botania_${color}_items`, item_names)
    }
    
})

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event

    event.register(
        Commands.literal('give_tag')
            .then(
                Commands.argument('tag', Arguments.RESOURCE_LOCATION.create(event))
                    .executes(ctx => {
                        const player = ctx.source.player
                        const tagId = Arguments.RESOURCE_LOCATION.getResult(ctx, 'tag')

                        const items = Ingredient.of(`#${tagId}`).itemIds

                        for (const item of items) {
                            player.give(Item.of(item))
                        }

                        return items.length
                    })
            )
    )
})
