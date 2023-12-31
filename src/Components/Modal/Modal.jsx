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
                    <h4><span>Status:</span> {characterData.status}</h4>
                    <h4><span>Specie:</span> {characterData.species}</h4>
                    <h4><span>Gender:</span> {characterData.gender}</h4>
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