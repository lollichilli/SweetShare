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
        },
        description: {
            type: String
        },
        imageUrl: {
            type: String
        }
    }
);

export const Boba = mongoose.model('Boba', bobaSchema);
