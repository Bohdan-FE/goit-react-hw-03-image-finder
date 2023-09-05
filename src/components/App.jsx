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
    page: 19,
    loader: false,
    modal: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      try {
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
    this.setState(prevState => ({ page: prevState.page + 1, loader: true }));
  };

  scrollDown() {
    window.scrollBy({
      top: 1000,
      behavior: 'smooth',
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery items={this.state.items} />
        {this.state.loader && <Loader />}
        {this.state.items.length >= 20 && <Button onClick={this.handleClick} />}
        {this.state.modal && <Modal />}
      </div>
    );
  }
}
