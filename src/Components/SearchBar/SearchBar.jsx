import FilterBar from './FilterBar/FilterBar';
import ResetSearchButton from './ResetSearchButton/ResetSearchButton';
import SearchInput from './SearchInput/SearchInput';
import { SearchBarStyled, SearchButtonsContainer } from './SearchBarStyles';

const SearchBar = ({setSearchedName, setPageNumber, setFilteredGender, setFilteredStatus, setFilteredSpecies}) =>{

    const handleReset = () =>{
        setFilteredSpecies("");
        setFilteredStatus("");
        setFilteredGender("");
        setSearchedName(""); 
    }

    return (
        <>
        <SearchBarStyled>
            <SearchInput setSearchedName={setSearchedName} setPageNumber={setPageNumber} />
            <SearchButtonsContainer>
                <FilterBar setFilteredGender={setFilteredGender} setFilteredStatus={setFilteredStatus} setFilteredSpecies={setFilteredSpecies} setSearchedName={setSearchedName} />
                <ResetSearchButton onReset={() => handleReset()}/>
            </SearchButtonsContainer>
        </SearchBarStyled>
        </>
    )

    }

export default SearchBar