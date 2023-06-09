import mongoose from "mongoose";
const { Schema } = mongoose;

const SneakerSchema = new Schema(
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
    visible: {
        type: Boolean, 
    }
  },
  { strict: false }
);

export const dbSneaker = mongoose.model("sneakers", SneakerSchema);