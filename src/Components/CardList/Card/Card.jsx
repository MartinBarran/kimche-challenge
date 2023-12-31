import { CardStyled } from "./CardStyles";

//Creación de tarjeta individual de personaje; recibe objeto con propiedades y desestructura
const Card = ({ character, openModal }) => {
  const { name, status, species, gender, image } = character;
  
  const handleCardClick = () => {
    openModal && openModal(character);
    //console.log("Va")
  };

  return (
    <CardStyled onClick={handleCardClick}>
      <img src={image} alt={name} />
      {/*<h3>{name}</h3>
      <p>Status: {status}</p>
      <p>Species: {species}</p>
  <p>Gender: {gender}</p>*/}
    </CardStyled>
  );
};

export default Card;
