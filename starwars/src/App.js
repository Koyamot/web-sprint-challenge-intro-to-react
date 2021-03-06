import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import Footer from './components/Footer';
import Header from './components/Header';
import styled from 'styled-components';

const CardStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Button = styled.button`
  border: none;
  border-radius: 4px;
  height: 48px;
  width: 72px;
  margin: 24px 12px;
  font-style: bold;
  color: white;
  background: rgba(0, 0, 0, 0.75);
  text-decoration: none;
  
`;

const H1 = styled.h1`
  color: white;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [swData, setswData] = useState([]);
  const [swSearch, setswSearch] = useState('people');
  const [pgNum, setPgNum] = useState(1);




  useEffect(() => {
      // 4. the effect fn is pulled from the waiting room and fired!
      
      axios
          .get(`https://swapi.py4e.com/api/${swSearch}/?page=${pgNum}`)
          .then(response => {
            // 5. STATE CHANGE! update films to Array of film objs
            setswData(response.data.results) // response.data = Array[film objs]
            console.log('success!', response.data.results)
          }) 
          .catch(error => {
            console.log('error', error)
          })
    }, [swSearch, pgNum]);

    console.log(swData)



  return (
    <div className="App">
      <Header /> 
      <H1 className="Header">Star Wars Characters</H1>
      <input id='search' type="search" name="search" value={swSearch} onChange={e => setswSearch(e.target.value)} />
      <CardStyle>
        {swData.map(character => {
              return <Character 
                character={character}
                name={character.name}
                height={character.height}
                gender={character.gender}
                films={character.films}
                bday={character.birth_year}
                starships={character.starships}
                vehicles={character.vehicles}
                key={character.name}  
                  />;
              })}  
      </CardStyle>
      <Button onClick={() => setPgNum(pgNum === 1 ? pgNum : pgNum-1)}> Back </Button> 
      <Button onClick={() => setPgNum(pgNum+1)}> Next </Button>
      <Footer />
    </div>
  );
}

export default App;
