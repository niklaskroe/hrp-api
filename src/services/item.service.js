import Item from "../models/item.model.js"

const defaultData = [
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
]


async function getAll() {
    const data = Item.find();
    console.log(data);
}

async function create(item) {
    try {
        const newItem = await Item.create(item, {validateBeforeSave: true});

        console.log("Item created:", newItem);
        return true;
    } catch (error) {
        console.error("Error creating item:", error);
        return false;
    }
}

export default {getAll, create};