import styled from "styled-components";

const PaginationStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap:5px;
    width: 100%;
    padding: 20px;
    .selected {
        background-color: lightblue;
        color: black;
    };
    
    & button{
        border-color:lightblue;
     
        &:disabled {
          display: none;
    }
    };
    


    .disable{
        cursor: not-allowed;
        background-color: grey;
        display: none;
    }
    `;

export default PaginationStyled