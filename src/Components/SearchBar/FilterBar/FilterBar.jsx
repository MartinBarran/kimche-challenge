

import Filter from './Filter/Filter';
import { FilterBarStyled } from './FilterBarStyles';
//import ResetFiltersButton from '../ResetFiltersButton/ResetFIltersButton';

//Componente que devuelve los selects del filtro y el borón para resetearlos.
const FilterBar = ({setFilteredGender, setFilteredSpecies, setFilteredStatus, setSearchedName}) => {

  const handleChange = (key, value) => {
    if (key === "gender") {
      setFilteredGender(value);
      console.log(value);
    } else if (key === "species") {
      setFilteredSpecies(value);
      console.log("no era gender");
    } else if (key === "status"){
      setFilteredStatus(value);
    }else{
      setFilteredSpecies(value);
      setFilteredStatus(value);
      setFilteredGender(value);
      setSearchedName(value); 
    }
  };


  // Opciones de filtro hardcodeadas
  const statusOptions = [
    { value: 'alive', label: 'Alive' },
    { value: 'dead', label: 'Dead' },
    { value: 'unknown', label: 'Unknown' },
    { value: '', label: 'All' },

  ];

  const speciesOptions = [
    { value: 'human', label: 'Human' },
    { value: 'alien', label: 'Alien' },
    { value: 'humanoid', label: 'Humanoid' },
    { value: 'animal', label: 'Animal' },
    { value: 'robot', label: 'Robot' },
    { value: 'cronenberg', label: 'Cronenberg' },
    { value: 'mytholog', label: 'Mytholog' },
    { value: 'desease', label: 'Desease' },
    { value: 'poopybutthole', label: 'Poopybutthole' },
    { value: 'unknown', label: 'Unknown' },
    { value: '', label: 'All' },
  ];

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'genderless', label: 'Genderless' },
    { value: 'unknown', label: 'Unknown' },
    { value: '', label: 'All' },
  ];

  return (
    <FilterBarStyled>
      <Filter label="Status..." options={statusOptions} selectedValue="" onChange={(value) => handleChange("status", value)} />
      <Filter label="Species..." options={speciesOptions} selectedValue="" onChange={(value) => handleChange("species", value)} />
      <Filter label="Gender..." options={genderOptions} selectedValue="" onChange={(value) => handleChange("gender", value)} />
    </FilterBarStyled>
  );
};

export default FilterBar;
