import PropTypes from 'prop-types';

import { Btn } from './Button.styled';

function Button({ onClick }) {
  return <Btn onClick={onClick}>Load More</Btn>;
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
};
