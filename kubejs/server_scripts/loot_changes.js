LootJS.modifiers((event) => {
    [
        "#botania:generating_special_flowers", 
        "#botania:generating_floating_flowers"
    ].forEach(gen_flower_tag => {
        Ingredient.of(gen_flower_tag).itemIds.forEach(generating_flower => {
            event
                .addBlockLootModifier(generating_flower)
                .customFunction({
                    "function": "minecraft:copy_nbt",
                    "ops": [
                        {
                            "op": "replace",
                            "source": "ticksExisted",
                            "target": "BlockEntityTag.ticksExisted"
                        }
                    ],
                    "source": "block_entity"
                })
        })
    });
    // event.addBlockLootModifier("botania:cell_block").addLoot("botania:green_petal");
    const cellWhenSilkTouch = LootEntry.of("botania:cell_block").when((c) =>
        c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
    );
    event
        .addBlockLootModifier("botania:cell_block")
        .removeLoot(Ingredient.all)
        .addAlternativesLoot(cellWhenSilkTouch, "botania:green_petal");

    
});
