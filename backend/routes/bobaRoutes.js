// backend/routes/bobaRoutes.js
import express from 'express';
import { getBobas, addBoba } from '../controllers/bobaController.js';

const router = express.Router();

// Route to get all boba drinks
router.get('/', getBobas);

// Route to add a new boba drink
router.post('/', addBoba);

export default router;
