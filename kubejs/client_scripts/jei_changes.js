// priority: 1000

JEIEvents.information(event => {
    console.log("jei information");
    event.addItem('minecraft:tnt', ["This recipe has been lost", "to time..."])
    event.addItem("botania:purple_petal_block", ["Turns into a shulker mob using a pure daisy"])
})

JEIEvents.removeRecipes(event => {
    console.log("global.hidden_pure_daisy_recipes", global.hidden_pure_daisy_recipes);
    
    for (const recipe_name of global.hidden_pure_daisy_recipes) {
        console.log("jei removing", recipe_name);
        event.remove('botania:pure_daisy', [recipe_name])
    }
})

JEIEvents.hideItems(event => {
    // console.log("hiding fertilizer");

    // event.hide("botania:fertilizer")
})

ClientEvents.lang("en_us", event => {
    // event.renameItem()
})


ItemEvents.tooltip(event => {
    console.log("jei tooltip");
    event.add("kubejs:secret1", Text.lightPurple("Right click to read..."))
    event.add("botania:fertilizer", Text.lightPurple("==The Goal=="))

})