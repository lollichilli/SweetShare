import React, { useState } from 'react';
import { addBoba } from '../services/bobaService';

const AddBobaForm = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBoba = { name, price: parseFloat(price), description, imageUrl };
        try {
            await addBoba(newBoba);
            setName('');
            setPrice('');
            setDescription('');
            setImageUrl('');
            setMessage('Boba added successfully!');
            onAdd(); // Callback to refresh the list
        } catch (error) {
            console.error("Failed to add boba:", error);
            setMessage('Failed to add boba.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Price:</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div>
                <label>Description:</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label>Image URL:</label>
                <input
                    type="text"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
            </div>
            <button type="submit">Add Boba</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default AddBobaForm;
