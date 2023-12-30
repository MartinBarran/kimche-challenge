import Card from "./Card/Card";
import CardListStyled from "./CardListStyles";


// Recibimos un array de objetos y creamos una card por cada objeto. Añadimos, además, el componente de paginación (comentado)
const CardList = ({ characters }) => {
  return (
    <CardListStyled>
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
      {/* <Pagination /> */}
    </CardListStyled>
  );
};

export default CardList;
