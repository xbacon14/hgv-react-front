import React, { useState, useEffect } from 'react';

import api from '../../services/api';

export default function Empresa() {
    const [empresas, setEmpresas] = useState([]);

    useEffect(() => {
        async function loadEmpresas() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/empresas', {
                headers: { user_id }
            });

            setEmpresas(response.data);

        }
        loadEmpresas();
    }, []);

    return (
        <>
            <ul className="empresa-list">
                {empresas.map(empresa => (
                    <li key={empresa._id}>
                        <header />
                        <strong>{empresa.razonSocial}</strong>
                        <span>{empresa.ruc}</span>
                    </li>
                ))}

            </ul>
        </>)
}