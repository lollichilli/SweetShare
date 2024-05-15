// frontend/src/services/bobaService.js
const API_URL = "http://localhost:5555/api/bobas";

export const fetchBobas = async () => {
    const response = await fetch(API_URL);
    return response.json();
};

export const addBoba = async (boba) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(boba),
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
};
