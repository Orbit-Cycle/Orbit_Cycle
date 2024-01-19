

JEIEvents.addItems(e => {
	for (let index = 0; index < global.ItemsList.length; index++) {
		const element = global.ItemsList[index]
		e.add(Item.of(element["id"]))
	}
})

JEIEvents.addFluids(e => {
  	for (let index = 0; index < global.FluidsList.length; index++) {
		const element = FluidsList[index]
		e.add(Fluid.of(element["id"]))
	}
})