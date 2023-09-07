import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageList } from './ImageGallery.styled';
import PropTypes from 'prop-types';

function ImageGallery({ items, handleZoom }) {
  return (
    <ImageList>
      {items.map(item => (
        <ImageGalleryItem
          key={item.id}
          smallImage={item.webformatURL}
          largeImage={item.largeImageURL}
          tag={item.tag}
          onClick={handleZoom}
        />
      ))}
    </ImageList>
  );
}

export default ImageGallery;

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      smallImage: PropTypes.string,
      largeImage: PropTypes.string,
      tag: PropTypes.string,
    })
  ),
  handleZoom: PropTypes.func,
};
