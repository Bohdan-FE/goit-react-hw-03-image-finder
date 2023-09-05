function ImageGalleryItem({ smallImage, tag }) {
  return (
    <li>
      <img src={smallImage} alt={tag} loading="lazy" />
    </li>
  );
}

export default ImageGalleryItem;
