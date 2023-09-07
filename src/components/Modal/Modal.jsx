import { ModalContainer, Overlay } from './Modal.styled';

function Modal({ largeImg, tag, handleCloseModal }) {
  return (
    <Overlay onClick={handleCloseModal}>
      <ModalContainer>
        <img src={largeImg} alt={tag} />
      </ModalContainer>
    </Overlay>
  );
}

export default Modal;
