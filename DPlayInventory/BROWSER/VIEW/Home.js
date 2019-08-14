DPlayInventory.Home = CLASS({

	preset : () => {
		return VIEW;
	},

	init : (inner, self) => {
		
		let inventoryStore = DPlayInventory.STORE('inventoryStore');
		
		let lastTab = inventoryStore.get('lastTab');
		
		DELAY(() => {
			GO(lastTab === undefined ? 'game' : lastTab);
		});
	}
});