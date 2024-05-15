import { Boba } from '../models/bobaModel.js';

// Controller to get all boba drinks
export const getBobas = async (req, res) => {
    try {
        const bobas = await Boba.find();
        res.status(200).json(bobas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to add a new boba drink
export const addBoba = async (req, res) => {
    const { name, price } = req.body;

    const newBoba = new Boba({
        name,
        price,
    });

    try {
        await newBoba.save();
        res.status(201).json(newBoba);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
