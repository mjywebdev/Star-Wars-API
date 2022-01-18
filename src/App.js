import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';


const App = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect (() => {
    const fetchCharacters = async () => {
      const result = await axios (`https://akabab.github.io/starwars-api/api/all.json`)

      setCharacters(result.data);
      setIsLoading(false);
    }
    fetchCharacters();
  }, [query])
  
  return (
    <div className="container">
      <Header />
      <h2 className='headingtext'>A list of Characters from the Star Wars Universe</h2>
      <h3 className='headingtext'>Hover over an image to get a detailed desription of each character.</h3>
      {/* <Search getQuery={(q) => setQuery(q)} /> */}
      <CharacterGrid isLoading={isLoading} characters={characters} />
    </div>
  );
}

export default App;
