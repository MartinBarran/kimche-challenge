import { ResetSearchButtonStyled } from "./ResetSearchButtonStyles";

//Botón para resetear filtros y searchedName, recibe función onReset como prop
const ResetSearchButton = ({ onReset }) => {
  return (
    <ResetSearchButtonStyled type="reset" value="Reset" onClick={onReset}/>
    

  );
};

export default ResetSearchButton;
