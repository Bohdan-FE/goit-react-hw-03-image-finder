import { ModalContainer, Overlay } from './Modal.styled';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.props.handleCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.handleCloseModal);
  }

  render() {
    const { largeImg, tag, handleCloseModal } = this.props;
    return (
      <Overlay onClick={handleCloseModal}>
        <ModalContainer>
          <img src={largeImg} alt={tag} />
        </ModalContainer>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  largeImg: PropTypes.string,
  tag: PropTypes.string,
  handleCloseModal: PropTypes.func,
};
