import { fetchItems } from 'api/api';
import SearchBar from './Searchbar/Searchbar';
import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';

export class App extends Component {
  state = {
    items: [],
    value: '',
    page: 1,
    loader: false,
    modal: {
      isActive: false,
      largeImg: '',
      tag: '',
    },
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      try {
        this.setState({ loader: true });
        const items = await fetchItems(this.state.value, this.state.page);
        this.setState({ items: items.hits });
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ loader: false });
      }
    }
    if (prevState.page !== this.state.page) {
      try {
        this.setState({ loader: true });
        const items = await fetchItems(this.state.value, this.state.page);
        this.setState({ items: [...prevState.items, ...items.hits] });
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ loader: false });
      }
    }
  }

  handleSubmit = value => {
    this.setState({ value, loader: true });
  };

  handleClick = () => {
    this.scrollDown();
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  scrollDown() {
    window.scrollBy({
      top: 1000,
      behavior: 'smooth',
    });
  }

  handleZoom = (url, tag) => {
    this.setState({
      modal: {
        isActive: true,
        largeImg: url,
        tag: tag,
      },
    });
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleCloseModal);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleCloseModal);
  }

  handleCloseModal = e => {
    // if (e.key === 'Escape') {
    //   this.setState({
    //     modal: {
    //       isActive: false,
    //       largeImg: '',
    //       tag: '',
    //     },
    //   });
    // }
    console.log(e.currentTarget);
    this.setState({
      modal: {
        isActive: false,
        largeImg: '',
        tag: '',
      },
    });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery items={this.state.items} handleZoom={this.handleZoom} />
        {this.state.loader && <Loader />}
        {this.state.items.length >= 20 && <Button onClick={this.handleClick} />}
        {this.state.modal.isActive && (
          <Modal
            largeImg={this.state.modal.largeImg}
            tag={this.state.modal.tag}
            handleCloseModal={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}
