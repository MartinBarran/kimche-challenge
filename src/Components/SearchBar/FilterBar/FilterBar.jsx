

import { genderOptions, speciesOptions, statusOptions } from '../../../Data/filterOptions';
import Filter from './Filter/Filter';
import { FilterBarStyled } from './FilterBarStyles';

//Componente que devuelve los selects del filtro y el borón para resetearlos.
const FilterBar = ({setFilteredGender, setFilteredSpecies, setFilteredStatus, setSearchedName}) => {

  const handleChange = (key, value) => {
    switch (key) {
      case "gender":
        setFilteredGender(value);
        break;
      case "species":
        setFilteredSpecies(value);
        break;
      case "status":
        setFilteredStatus(value);
        break;
      // Puedes agregar más casos si es necesario
      default:
        break;
    }
  };

  return (
    <FilterBarStyled>
      <Filter label="Status:" options={statusOptions}  onChange={(value) => handleChange("status", value)} />
      <Filter label="Species:" options={speciesOptions} onChange={(value) => handleChange("species", value)} />
      <Filter label="Gender:" options={genderOptions} onChange={(value) => handleChange("gender", value)} />
    </FilterBarStyled>
  );
};

export default FilterBar;
