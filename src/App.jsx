
import CardsList from './Components/CardList/CardList';
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from './Data/queries';
import Modal from './Components/Modal/Modal';
import SearchBar from './Components/SearchBar/SearchBar';



const App = () => {

    //Estados para almacenar data de personajes, num de página, string buscado, modal (abierto/cerrado e info relevante), y máximo de páginas según API
    const [characters, setCharacters] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [searchedName,setSearchedName] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCharacterData, setSelectedCharacterData] = useState(null);
    const [maxPages, setMaxPages] = useState(1);
    const [filteredGender, setFilteredGender] = useState("")
    const [filteredSpecies, setFilteredSpecies] = useState("")
    const [filteredStatus, setFilteredStatus] = useState("")
    


    //Realizamos consulta GraphQL con useQuery y pasamos variables
    const { loading, error, data } = useQuery(GET_CHARACTERS, {
      variables: {
        page: pageNumber, 
        searchedName: searchedName, 
        filteredGender: filteredGender,
        filteredSpecies: filteredSpecies,
        filteredStatus: filteredStatus,
      },
    });
    

    //Funciones para manejar lógica del modal, seteando su estado
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
        setMaxPages(data.characters.info.pages)
      }
    }, [data]);

    //logCharacters();


    return (
      <>
        <SearchBar setSearchedName={setSearchedName} setPageNumber={setPageNumber} setFilteredGender={setFilteredGender} setFilteredStatus={setFilteredStatus} setFilteredSpecies={setFilteredSpecies}/>
        <CardsList characters={characters} openModal={openModal} maxPages={maxPages} setPageNumber={setPageNumber} pageNumber={pageNumber}/>
         {isModalOpen && (
        <Modal characterData={selectedCharacterData} closeModal={closeModal} />
      )}

      </>
  );
};

export default App;
