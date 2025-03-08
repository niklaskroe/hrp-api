import ShoppingList from '../models/shoppingList.model.js';

async function test() {
    console.log("Testing ShoppingListService");
}

async function getAll() {
    const data = ShoppingList.find();
    console.log(data);
}

async function getById(id) {
    const shoppingList = ShoppingList.findById(id, (err, shoppingList) => {
        if (err) {
            console.error("Error getting shoppingList by id:", err);
        }
    }, {runValidators: true});
    console.log(shoppingList);
}

async function create(shoppingList) {
    try {
        const newShoppingList = await ShoppingList.create(shoppingList, {validateBeforeSave: true});

        console.log("ShoppingList created:", newShoppingList);
        return true;
    } catch (error) {
        console.error("Error creating shoppingList:", error);
        return false;
    }
}

async function update(id, shoppingList) {
    try {
        const updatedShoppingList = await ShoppingList.findByIdAndUpdate(id, shoppingList, {new: true, runValidators: true});
    } catch (error) {
        console.error("Error updating shoppingList:", error);
    }
}

async function deleteById(id) {
    try {
        const deletedShoppingList = await ShoppingList.findByIdAndDelete(id);
    } catch (error) {
        console.error("Error deleting shoppingList:", error);
    }
}

export default {test, getAll, getById, create, update, deleteById};