import styled from "styled-components";

export const ResetSearchButtonStyled = styled.input`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  color: white; /* Añade color de texto */

  &:hover {
    background-color: #2a2a2a; /* Cambia el color de fondo al pasar el cursor sobre el botón */
    cursor: pointer; /* Cambia el cursor a una mano */
  }

  &:active {
    background-color: #0a0a0a; /* Cambia el color de fondo cuando se hace clic en el botón */
  }
`;