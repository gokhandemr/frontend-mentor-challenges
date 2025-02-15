// Styled
import {StatContainer} from './index.styled';
// Types
import {StatTypes} from '../../types';

export default function Stat({value, text, background, image}: StatTypes) {
  return (
    <StatContainer style={{background: `url(${image}) no-repeat 120% ${background}`}}>
      <h4>{value.toString().padStart(2, '0')}</h4>
      <p>{text}</p>
    </StatContainer>
  );
}