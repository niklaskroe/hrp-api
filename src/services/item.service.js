import { Item}  from "../models/item.model.js"

class ItemService {
    async getAll() {
        const data = Item.find();
        console.log(data);
    }

    async create() {
        try {
            const newItem = await Item.create({
                name: "Apple",
                quantity: 10,
                unit: "kg",
                expiration_date: new Date("2025-03-01"),
                storage: null,
                shoppingList: null
            });

            console.log("Item created:", newItem);
            return true;
        } catch (error) {
            console.error("Error creating item:", error);
            return false;
        }
    }
}

export {ItemService}