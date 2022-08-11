import React, { useState } from 'react';

import "./Livros.css"
import minhaImagem from '../assets/IMG.svg'

export default function Livros() {

    const [livros] = useState([
        { id: 1, footer: 'Nota: 5/5' },
        { id: 2, footer: 'Nota: 5/5' },
        { id: 3, footer: 'Nota: 5/5' },
        { id: 4, footer: 'Nota: 5/5' }
    ]);


    return (
        <div className="livros-container">
            <ul>
                {livros.map((elemento) => (
                    <li className='Livros-card' key={elemento.id} >
                        <img src={minhaImagem} alt="" />

                        <h2>{elemento.footer}</h2>

                    </li>
                ))}
            </ul>
        </div>
    );
}