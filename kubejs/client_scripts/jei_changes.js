
JEIEvents.information(event => {
  event.addItem('minecraft:tnt', ["This recipe has been lost", "to time..."])
})

RecipeView
JEIEvents.removeRecipes(event => {
  event.remove('botania:pure_daisy', ['botania_evolved:petal_to_tnt'])
})


ItemEvents.tooltip(event => {
    event.add("minecraft:tnt", ["This recipe has been lost", "to time..."])
})