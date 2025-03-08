import Item from "../models/item.model.js"

async function test() {
    console.log("Testing ItemService");
}

async function getAll() {
    const data = Item.find();
    console.log(data);
}

async function getById(id) {
    const item = Item.findById(id, (err, item) => {
        if (err) {
            console.error("Error getting item by id:", err);
        }
    }, {runValidators: true});
    console.log(item);
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

async function update(id, item) {
    try {
        const updatedItem = await Item.findByIdAndUpdate(id, item, {new: true, runValidators: true});
    } catch (error) {
        console.error("Error updating item:", error);
    }
}

async function deleteById(id) {
    try {
        const deletedItem = await Item.findByIdAndDelete(id);
    } catch (error) {
        console.error("Error deleting item:", error);
    }
}

export default {test, getAll, getById, create, update, deleteById};