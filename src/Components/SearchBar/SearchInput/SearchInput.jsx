import { SearchInputStyled } from "./SearchInputStyles"


//Componente de barra de búsqueda, con input
const SearchInput = ({setSearchedName, setPageNumber}) =>{

    //Al modificarse el valor en el input, se actualiza el estado searchedName y se setea el número de página en 1
    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setSearchedName(newValue);
        setPageNumber(1);
      };

    return(
        <SearchInputStyled 
        type="text"
        onChange={handleInputChange}
        placeholder="Search..."        
        />
    )
}

export default SearchInput