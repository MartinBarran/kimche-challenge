import { SearchBarStyled, SearchInputStyled } from "./SearchBarStyles"


//Componente de barra de búsqueda, con input y botón
const SearchBar = () =>{

    return(
        <SearchBarStyled>
            <SearchInputStyled
              type="text"
              //value={searchTerm}
              //onChange={handleInputChange}
              placeholder="Search..."
            />
            <button /*onClick={handleSearch}*/>Search</button>
        </SearchBarStyled>
    )
}

export default SearchBar