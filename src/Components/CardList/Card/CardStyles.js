import styled from "styled-components";

export const CardStyled = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 15%;

  & img{
		width: 100%;
		max-height: 200px; 
		object-fit: cover;
		border-radius: 4px;
  }
`;

