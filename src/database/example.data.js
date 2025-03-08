import ItemService from "../services/item.service.js";

const defaultData = [{
    items: [
        {
            name: "Apple",
            quantity: 10,
            unit: "kg",
            expiration_date: new Date("2025-06-01"),
            storage: null,
            shoppingList: null
        },
        {
            name: "Banana",
            quantity: 5,
            unit: "pieces",
            expiration_date: new Date("2025-04-26"),
            storage: null,
            shoppingList: null
        }
    ],
    storages: [
        {
            name: "Fridge",
            location: "Kitchen",
            items: []
        },
        {
            name: "Pantry",
            location: "Kitchen",
            items: []
        }
    ],
    shoppingLists: [
        {
            name: "dm",
            items: []
        },
        {
            name: "Aldi",
            items: []
        }
    ]
}]

function loadExampleData() {
    for (const data of defaultData) {
        for (const item of data.items) {
            ItemService.create(item);
        }

        // for (const storage of data.storages) {
        //     StorageService.create(storage);
        // }
        //
        // for (const shoppingList of data.shoppingLists) {
        //     ShoppingListService.create(shoppingList);
        // }
    }
}

export default loadExampleData;