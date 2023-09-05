import { Btn } from './Button.styled';

function Button({ onClick }) {
  return <Btn onClick={onClick}>Load More</Btn>;
}

export default Button;
