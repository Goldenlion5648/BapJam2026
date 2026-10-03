
JEIEvents.information(event => {
    console.log("jei information");
    event.addItem('minecraft:tnt', ["This recipe has been lost", "to time..."])
})

JEIEvents.removeRecipes(event => {
    console.log("jei removing");
    event.remove('botania:pure_daisy', ['botania_evolved:petal_to_tnt'])
})

JEIEvents.hideItems(event => {
    console.log("hiding fertilizer");

    event.hide("botania:fertilizer")
})


ItemEvents.tooltip(event => {
    console.log("jei tooltip");
    event.add("minecraft:tnt", ["This recipe has been lost", "to time..."])
})