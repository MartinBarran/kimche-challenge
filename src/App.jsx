import FilterBar from './Components/FilterBar/FilterBar';
import SearchBar from './Components/SearchBar/SearchBar';
import CardsList from './Components/CardList/CardList';
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from './Data/queries';
import Modal from './Components/Modal/Modal';

const App = () => {

    //Estados para almacenar data de personajes, num de página, string buscado y modal
    const [characters, setCharacters] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [searchedName,setSearchedName] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCharacterData, setSelectedCharacterData] = useState(null);

    //Realizamos consulta GraphQL con useQuery y pasamos variables
    const { loading, error, data } = useQuery(GET_CHARACTERS, {
      variables: {
        page: pageNumber, 
        nameFilter: searchedName, 
      },
    });

    const openModal = (characterData) => {
      setSelectedCharacterData(characterData);
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };

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
        <CardsList characters={characters} openModal={openModal} />
         {isModalOpen && (
        <Modal characterData={selectedCharacterData} closeModal={closeModal} />
      )}

      </>
  );
};

export default App;
