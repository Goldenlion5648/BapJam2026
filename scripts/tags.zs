import crafttweaker.api.tag.MCTag;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.ingredient.IIngredient;
import crafttweaker.api.item.ItemDefinition;
import stdlib.List;


for block in <tag:blocks:botania:mystical_flowers> {
    <tag:blocks:minecraft:flowers>.remove(block);
    <tag:blocks:minecraft:small_flowers>.remove(block);
}

for block in <tag:blocks:botania:petals> {
    <tag:blocks:minecraft:flowers>.remove(block);
    <tag:blocks:minecraft:small_flowers>.remove(block);
}

for block in <tag:blocks:forge:mushrooms> {
    <tag:blocks:forge:mushrooms>.remove(block);
    <tag:blocks:botania:shimmering_mushrooms>.remove(block);
}

// var tags = [

// ]

// for item in <tag:item:botania:shimmering_mushrooms> {
//     item.removeAllTags();
// }
