// backend/routes/bobaRoutes.js
import express from 'express';
import { Boba } from '../models/bobaModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const bobas = await Boba.find({});
        res.json(bobas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const { name, price, description, imageUrl } = req.body;

    try {
        const newBoba = new Boba({
            name,
            price,
            description,
            imageUrl
        });

        const savedBoba = await newBoba.save();
        res.status(201).json(savedBoba);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;
