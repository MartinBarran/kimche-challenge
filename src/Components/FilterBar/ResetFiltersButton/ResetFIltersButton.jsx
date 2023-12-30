
//Botón para resetear filtros, recibe función onReset como prop
const ResetFiltersButton = ({ onReset }) => {
  return (
    <button className="reset-button" onClick={onReset}>
      Reset
    </button>
  );
};

export default ResetFiltersButton;
