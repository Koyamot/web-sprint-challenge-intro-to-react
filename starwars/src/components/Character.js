// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 0 auto;
    width: 25%;
    border-radius: 3px;
    padding: 24px;
    margin-top: 24px;
`;

const PlainCard = styled.div`

`;

const H2 = styled.h2`
  color: white;
`;

const P = styled.p`
  color: white;
`;

    

const Character = ({character}) => {

    return (
      <Card className="fancy" key="key">
        <PlainCard className="swcharacters" key="key">
            <H2>{character.name}</H2>
            <P>Birth Year: {character.birth_year}</P>
            <P>Height: {character.height}</P>
            <P>Gender: {character.gender}</P>
            <P>Movies: {character.films.length}</P>
            <P>Starships: {character.starships.length}</P>
            <P>Vehicles: {character.vehicles.length}</P>
        </PlainCard>
        </Card>
      );
}



export default Character;


// name={data.name}
// films={data.films}
// starships={data.starships}
// vehicles={data.vehicles}