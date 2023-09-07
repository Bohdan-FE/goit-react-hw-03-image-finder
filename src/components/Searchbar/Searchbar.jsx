import { Component } from 'react';
import { Header } from './Searchbar.styled';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  state = {
    input: '',
  };

  handleChange = ({ target }) => {
    this.setState({ input: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
  };

  render() {
    return (
      <Header>
        <form type="submit" onSubmit={this.handleSubmit}>
          <button>
            <span>Search</span>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.input}
          />
        </form>
      </Header>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
