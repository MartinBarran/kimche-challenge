
import Filter from './Filter/Filter';
import { FilterBarStyled } from './FilterBarStyles';
import ResetFiltersButton from './ResetFiltersButton/ResetFIltersButton';

//Componente que devuelve los selects del filtro y el borón para resetearlos.
const FilterBar = () => {
  // Opciones de filtro hardcodeadas
  const statusOptions = [
    { value: 'alive', label: 'Alive' },
    { value: 'dead', label: 'Dead' },
    { value: 'unknown', label: 'Unknown' },
  ];

  const speciesOptions = [
    { value: 'human', label: 'Human' },
    { value: 'alien', label: 'Alien' },
    { value: 'unknown', label: 'Unknown' },
  ];

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'unknown', label: 'Unknown' },
  ];

  return (
    <FilterBarStyled>
      <Filter label="Status..." options={statusOptions} selectedValue="" onChange={(value) => console.log(value)} />
      <Filter label="Specie..." options={speciesOptions} selectedValue="" onChange={(value) => console.log(value)} />
      <Filter label="Genre..." options={genderOptions} selectedValue="" onChange={(value) => console.log(value)} />
      <ResetFiltersButton onReset={() => console.log('Reset')} />
    </FilterBarStyled>
  );
};

export default FilterBar;
