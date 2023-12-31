import  {ModalStyled, ModalContent, ModalStrings, ModalInfo, ModalCloseButton } from "./ModalStyles";

const Modal = ({ characterData, closeModal }) => {
    console.log(characterData)
  return (
    <ModalStyled>
        <ModalContent>
            <ModalInfo>
                <img src={characterData.image} alt={characterData.name}/>
                <ModalStrings>
                    <h2>{characterData.name}</h2>
                    <h4>Status: {characterData.status}</h4>
                    <h4>Specie: {characterData.species}</h4>
                    <h4>Gender: {characterData.gender}</h4>
                </ModalStrings>
            </ModalInfo>
            <ModalCloseButton onClick={closeModal}>
            X
            </ModalCloseButton>
        </ModalContent>
    </ModalStyled>
  );
};

  export default Modal;