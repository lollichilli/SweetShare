import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 5555;
export const MONGODBURL = process.env.MONGODB_URL;
