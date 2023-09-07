import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageList } from './ImageGallery.styled';

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
