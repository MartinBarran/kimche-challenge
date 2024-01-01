import { FilterStyled } from "./FilterStyles";

// Componente filtro; recibe props y desestructura
const Filter = ({ label, options, selectedValue, onChange }) => {
  return (
    <>
    <FilterStyled>
      <label htmlFor={label}>{label}</label>
      <select name={label} id={label} value={selectedValue} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FilterStyled>
    </>
  );
};

export default Filter;
