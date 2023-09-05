function Modal({ largeImg, tag }) {
  return (
    <div>
      <div>
        <img src={largeImg} alt={tag} />
      </div>
    </div>
  );
}

export default Modal;
