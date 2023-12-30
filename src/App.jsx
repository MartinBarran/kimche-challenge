

import FilterBar from './Components/FilterBar/FilterBar'
import SearchBar from './Components/SearchBar/SearchBar'
import CardsList from './Components/CardList/CardList'
import React, { useState, useEffect } from 'react';

const App = () => {
  
  //Estado para manejar datos de los personajes
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // DATA de API simulada provisoriamente para desarrollo de interfaz
    const falseApidData = [
      { id: 1, name: 'Rick Sanchez', status: 'Alive', species: 'Human', genre:"Male", image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg' },
      { id: 2, name: 'Morty Smith', status: 'Alive', species: 'Human', genre:"Male", image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg' },
      { id: 3, name: 'Ethan', status: 'Unknown', species: 'Human', genre:"Male", image: 'https://rickandmortyapi.com/api/character/avatar/114.jpeg' },
      { id: 4, name: 'Hookah Alien', status: 'Alive', species: 'Alien', genre:"Male", image: 'https://rickandmortyapi.com/api/character/avatar/158.jpeg' },
      { id: 1, name: 'Rick Sanchez', status: 'Alive', species: 'Human', genre:"Male", image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg' },
      { id: 2, name: 'Morty Smith', status: 'Alive', species: 'Human', genre:"Male", image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg' },
      { id: 3, name: 'Ethan', status: 'Unknown', species: 'Human', genre:"Male", image: 'https://rickandmortyapi.com/api/character/avatar/114.jpeg' },
      { id: 4, name: 'Hookah Alien', status: 'Alive', species: 'Alien', genre:"Male", image: 'https://rickandmortyapi.com/api/character/avatar/158.jpeg' },
      
    ];

    //Actualizamos estado de datos de personajes
    setCharacters(falseApidData);
  }, []);

  //Devolvemos todos los componentes: Barra buscadora, Filtros, y Tarjetas
  return (
    <>
     <SearchBar />
     <FilterBar />
     <CardsList characters={characters}/>
    </>
  )
}

export default App
