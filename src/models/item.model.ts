import mongoose, {model, Schema} from "mongoose";

const itemSchema = new Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  unit: { type: String, required: true },
  expiration_date: { type: Date, required: false },
  storage: { type: mongoose.Schema.Types.ObjectId, ref: "Storage" },
  shoppingList: { type: mongoose.Schema.Types.ObjectId, ref: "ShoppingList" }
});

const Item = model("Item", itemSchema);

export default Item;