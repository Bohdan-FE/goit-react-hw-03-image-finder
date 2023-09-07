import PropTypes from 'prop-types';

function ImageGalleryItem({ smallImage, tag, onClick }) {
  return (
    <li onClick={() => onClick(smallImage, tag)}>
      <img src={smallImage} alt={tag} loading="lazy" />
    </li>
  );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  smallImage: PropTypes.string,
  tag: PropTypes.string,
  onClick: PropTypes.func,
};
