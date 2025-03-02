// Mock data for demonstration purposes
let shoppingList = [
    { id: 1, name: 'Milk', quantity: 2 },
    { id: 2, name: 'Bread', quantity: 1 },
    { id: 3, name: 'Eggs', quantity: 12 }
];

// Controller functions
const getAll = (req, res) => {
    res.json(shoppingList);
};

export default {
    getAll
};
