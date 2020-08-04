// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: white;
    margin: 0 auto;
    width: 25%;
    border-radius: 3px;
    padding: 24px;
    margin-top: 24px;
`;

const CharCard = styled.div`

`;

    

const Character = ({character}) => {

    return (
      <Card className="fancy" key="key">
        <CharCard className="swcharacters" key="key">
            <h2>{character.name}</h2>
            <p>Birth Year: {character.birth_year}</p>
            <p>Height: {character.height}</p>
            <p>Gender: {character.gender}</p>
            <p>Movies: {character.films.length}</p>
            <p>Starships: {character.starships.length}</p>
            <p>Vehicles: {character.vehicles.length}</p>
        </CharCard>
        </Card>
      );
}



export default Character;


// name={data.name}
// films={data.films}
// starships={data.starships}
// vehicles={data.vehicles}