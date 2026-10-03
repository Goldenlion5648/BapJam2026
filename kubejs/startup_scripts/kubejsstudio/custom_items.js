// kubejsstudio registry additions; re-apply merges by id
StartupEvents.registry('item', event => {
    event.create('kubejs:fertilizer').displayName('Floral Fertilizer (Weakened)').texture('botania:item/fertilizer').parentModel('botania:item/fertilizer')
    event.create('kubejs:secret1').displayName('Secret Note').texture('minecraft:item/paper').parentModel('minecraft:item/fertilizer')
})
