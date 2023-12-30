

//Componente filtro; recibe props y desestructura
const Filter = ({ label, options, selectedValue, onChange }) => {
  return (
        <select value={selectedValue} onChange={(e) => onChange(e.target.value)}>
        <option hidden value="">{label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
  );
};

export default Filter;
