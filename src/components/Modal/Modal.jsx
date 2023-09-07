import { ModalContainer, Overlay } from './Modal.styled';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  closeModal = e => {
    if (e.key === 'Escape' || e.currentTarget === e.target) {
      this.props.handleCloseModal();
    }
  };

  render() {
    const { largeImg, tag } = this.props;
    return (
      <Overlay onClick={this.closeModal}>
        <ModalContainer>
          <img src={largeImg} alt={tag} />
        </ModalContainer>
      </Overlay>
    );
  }
}

Modal.propType = {
  largeImg: PropTypes.string,
  tag: PropTypes.string,
  handleCloseModal: PropTypes.func,
};
