import React, { useEffect, useState } from 'react';
import { fetchBobas } from '../services/bobaService';

const BobaList = ({ refresh }) => {
    const [bobas, setBobas] = useState([]);

    useEffect(() => {
        const getBobas = async () => {
            try {
                const bobas = await fetchBobas();
                if (Array.isArray(bobas)) {
                    setBobas(bobas);
                } else {
                    console.error('Bobas data is not an array:', bobas);
                }
            } catch (error) {
                console.error('Failed to fetch bobas:', error);
            }
        };

        getBobas();
    }, [refresh]);

    return (
        <div>
            <h2>Boba Menu</h2>
            <ul>
                {bobas.map(boba => (
                    <li key={boba._id}>{boba.name} - ${boba.price.toFixed(2)}</li>
                ))}
            </ul>
        </div>
    );
};

export default BobaList;
