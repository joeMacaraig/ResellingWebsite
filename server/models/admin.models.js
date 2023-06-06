import mongoose from "mongoose";

const AdminSchema = new Schema({
    username: {
        type: String, 
        required: true,
        unique: true
    },
    email: {
        type: String, 
        required: true,
        unique: true
    }, 
    password: {
        type: String, 
        required: true
    }
});

export const Admin = mongoose.model('admins', AdminSchema)