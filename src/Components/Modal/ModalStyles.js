import styled from "styled-components";

export const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  `;

  export const ModalCloseButton = styled.button`
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 10px;
    color: black;
    border-radius: 100px;
    background-color: white;
  `;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    background: black;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    width: 70%;
    height: 50%;
    overflow-y: auto;
    position: relative;
    color: white;
    gap: 2px;
`;
export const ModalInfo= styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    & image{
        object-fit:fill
    }
`;

export const ModalStrings= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    
`;

