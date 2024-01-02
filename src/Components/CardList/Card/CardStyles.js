import styled from "styled-components";

export const CardStyled = styled.div`
  position: relative;
  border: 1px solid #ccc;
  border-radius: 8px;  
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 15%;
  margin: 2px;
  overflow: hidden; 

  & img {
    width: 100%;
    height: 100%;
    max-height: 200px; 
    border-radius: 4px;
  }

  & p {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.7); 
    margin: 0; 
    color: white;
    font-size: 14px;
    text-align: center;
  }
`;
