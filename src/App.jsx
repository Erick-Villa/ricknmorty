import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import { Box } from '@mui/material';
import './App.css'

const API_CHARACTERS = `https://rickandmortyapi.com/api/character/`;

//function to consume the API and return the data

function App() {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const response = await fetch(API_CHARACTERS);
    const data = await response.json();
    console.log(data);
    setCharacters(data.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={viteLogo} className="App-logo" alt="logo" />
        <img src={reactLogo} className="App-logo" alt="logo" />
        <button onClick={getCharacters}>Get Characters</button>
        <ul>
          {characters.map((character) => (
            <li key={character.id}>Name: {character.name}<br/>Status: {character.status}<br/>Species: {character.species}<br/>Gender: {character.gender}<hr /><img src={character.image} alt="" /></li>
          ))}
        </ul>
      </header>
    </div>
  )
}

export default App