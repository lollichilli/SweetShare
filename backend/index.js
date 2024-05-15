// backend/index.js
import express from "express";
import mongoose from "mongoose";
import { PORT, MONGODBURL } from "./config.js";
import bobaRoutes from "./routes/bobaRoutes.js";

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
   res.status(200).send('Welcome to Sweetshare');
});

// Use boba routes
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
