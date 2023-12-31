import PaginationStyled from "./PaginationStyles";


//Recibimos la cantidad de páginas a mostrar, la página actual y la función para setearla
const Pagination = ({ maxPages, setPageNumber, pageNumber }) => {

  const handlePageClick = (page) => {
    setPageNumber(page);
    
  };

  // Lógica para determinar los botones de paginación que vamos a mostrar
  const getPageNumbers = () => {
    const totalPageButtons = 5;
    const halfButtons = Math.floor(totalPageButtons / 2);
    //console.log(maxPages)

    if (maxPages <= totalPageButtons) {
      // Si hay menos páginas que el total de botones que seteamos (totalPageButtons), mostramos todas las páginas
      return [...Array(maxPages).keys()].map((page) => page + 1);
    } else {
      // Si hay más páginas, determinamos el rango de páginas a mostrar
      let startPage = Math.max(1, pageNumber - halfButtons);
      let endPage = Math.min(maxPages, startPage + totalPageButtons - 1);//Se garantiza que mostramos 5 botones incluso cuando la startPage es menor a 3.

      startPage = Math.max(1, endPage - totalPageButtons + 1);//Ajustamos la startPage para garantizar los 5 botones incluso cuandoe stamos en las últimas páginas.
      //console.log(startPage, endPage)
      return [...Array(endPage - startPage + 1).keys()].map((page) => startPage + page);
    }
    
  };
  return (
    <PaginationStyled>
      <button onClick={() => handlePageClick(1)} disabled={pageNumber <= 2}>&lt;&lt;</button>
      <button onClick={() => handlePageClick(pageNumber - 1)} disabled={pageNumber === 1}>&lt;</button>

    {/*Obtenemos el rango de paginas a mostrar y renderizamos un botón por cada uno. Agregamos lógica de estilo*/}
      {getPageNumbers().map((page) => (
        <button key={page} onClick={() => handlePageClick(page)} className={`${page === pageNumber ? 'selected' : ''}`}>
          {page}
        </button>
      ))}

      <button onClick={() => handlePageClick(pageNumber + 1)} disabled={pageNumber === maxPages}>&gt;</button>
      <button onClick={() => handlePageClick(maxPages)} disabled={pageNumber >= maxPages-1}>&gt;&gt;</button>
    </PaginationStyled>
  );
};

export default Pagination;
