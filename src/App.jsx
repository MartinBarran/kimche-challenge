import FilterBar from './Components/FilterBar/FilterBar';
import SearchBar from './Components/SearchBar/SearchBar';
import CardsList from './Components/CardList/CardList';
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from './Data/queries';

const App = () => {

    //Estados para almacenar data de personajes, num de página y string buscado
    const [characters, setCharacters] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [searchedName,setSearchedName] = useState("");


  //Realizamos consulta GraphQL con useQuery y pasamos variables
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: {
      page: pageNumber, 
      nameFilter: searchedName, 
    },
  });


  //Atualizamos el estado local cuando cambian los datos de la consulta
  useEffect(() => {
    if (data && data.characters) {
      setCharacters(data.characters.results);
    }
  }, [data]);
  


  return (
    <>
      <SearchBar setSearchedName={setSearchedName} />
      <FilterBar />
      <CardsList characters={characters} />
    </>
  );
};

export default App;
