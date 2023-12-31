import Card from "./Card/Card";
import CardListStyled from "./CardListStyles";
import Pagination from "./Pagination/Pagination";


// Recibimos un array de objetos y creamos una card por cada objeto. Añadimos, además, el componente de paginación 
const CardList = ({ characters, openModal, maxPages, setPageNumber, pageNumber }) => {
  //console.log(openModal)
  return (
    <CardListStyled>
      {characters.map((character) => (
        <Card key={character.id} character={character} openModal={openModal} />
      ))}
       <Pagination maxPages={maxPages} setPageNumber = {setPageNumber} pageNumber = {pageNumber}/> 
    </CardListStyled>
  );
};

export default CardList;
