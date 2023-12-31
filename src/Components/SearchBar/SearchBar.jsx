import { SearchBarStyled, SearchInputStyled } from "./SearchBarStyles"


//Componente de barra de búsqueda, con input y botón
const SearchBar = ({setSearchedName}) =>{

    //Al modificarse el valor en el input, se actualiza el estado searchedName
    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setSearchedName(newValue);
      };

    return(
        <SearchBarStyled>
            <SearchInputStyled
              type="text"
              onChange={handleInputChange}
              placeholder="Search..."
            />
        </SearchBarStyled>
    )
}

export default SearchBar