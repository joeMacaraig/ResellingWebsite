import mongoose from "mongoose";
const { Schema } = mongoose;

const InventorySchema = new Schema(
  {
    id: {
        type: String, 
        required: true
    },
    brand: {
        type: String, 
        required: true
    },
    category: {
        type: String, 
    },
    colorway: {
        type: String, 
    },
    description: {
        type: String, 
    }, 
    images: {
        type: Object, 
    }, 
    name: {
        type: String, 
    },
    price: {
        type: Number,
    },
    releaseDate: {
        type: String, 
    },
    shoeType: {
        type: String 
    }, 
    featured: {
        type: String
    },
    visible: {
        type: Boolean, 
    }
  },
  { strict: false }
);

export const Inventory = mongoose.model("inventories", InventorySchema);