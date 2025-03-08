import Storage from "../models/storage.model";

async function test() {
    console.log("Testing StorageService");
}

async function getAll() {
    const data = Storage.find();
    console.log(data);
}

async function getById(id) {
    const storage = Storage.findById(id, (err, storage) => {
        if (err) {
            console.error("Error getting storage by id:", err);
        }
    }, {runValidators: true});
    console.log(storage);
}

async function create(storage) {
    try {
        const newStorage = await Storage.create(storage, {validateBeforeSave: true});

        console.log("Storage created:", newStorage);
        return true;
    } catch (error) {
        console.error("Error creating storage:", error);
        return false;
    }
}

async function update(id, storage) {
    try {
        const updatedStorage = await Storage.findByIdAndUpdate
            (id, storage, {new: true, runValidators: true});
    }
    catch (error) {
        console.error("Error updating storage:", error);
    }
}

async function deleteById(id) {
    try {
        const deletedStorage = await Storage.findByIdAndDelete(id);
    } catch (error) {
        console.error("Error deleting storage:", error);
    }
}

export default {test, getAll, getById, create, update, deleteById};