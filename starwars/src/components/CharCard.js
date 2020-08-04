import React from 'react';
import styled from 'styled-components';
import App from 'starwars/src/App';



const CharCard = ({ character }) => {


return (
<div className="swData" key="key">
    <h2>{character.name}</h2>
    <p>Birth Year: {character.birth_year}</p>
    <p>Height: {character.height}</p>
    <p>Gender: {character.gender}</p>
    <p>Movies: {character.films.length}</p>
    <p>Starships: {character.starships.length}</p>
    <p>Vehicles: {character.vehicles.length}</p>
</div>

);
}

export default CharCard;