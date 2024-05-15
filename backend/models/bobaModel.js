import mongoose from "mongoose";

const bobaSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }
);

export const Boba = mongoose.model('Boba', bobaSchema);
