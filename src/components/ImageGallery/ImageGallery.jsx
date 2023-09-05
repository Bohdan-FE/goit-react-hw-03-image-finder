import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageList } from './ImageGallery.styled';

function ImageGallery({ items }) {
  return (
    <ImageList>
      {items.map(item => (
        <ImageGalleryItem
          key={item.id}
          smallImage={item.webformatURL}
          largeImage={item.largeImageURL}
          tag={item.tag}
        />
      ))}
    </ImageList>
  );
}

export default ImageGallery;
