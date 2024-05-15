// backend/index.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, MONGODBURL } from "./config.js";
import bobaRoutes from "./routes/bobaRoutes.js";

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS
app.use(cors());

app.get('/', (req, res) => {
   res.status(200).send('Welcome to Sweetshare');
});

app.use('/api/bobas', bobaRoutes);

mongoose
    .connect(MONGODBURL)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
