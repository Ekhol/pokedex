import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

function Pokedex(props) {
    return (
        <div className="Pokedex">
            <h1 className="Pokedex-title">Pokedex</h1>
            <div className="Pokedex-cards">
                {props.pokemon.map(p => (
                    <Pokecard
                        id={p.id}
                        name={p.name}
                        type={p.type}
                        exp={p.base_experience}
                    />
                ))}
            </div>
            <h3>Total experience: {props.exp}</h3>
        </div>
    );
}

export default Pokedex;