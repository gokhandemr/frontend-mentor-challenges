// Styled
import {TitleContainer, TitleH1} from './index.styled';
// Types
import {TitleTypes} from '../../types';

export default function Title({text}: TitleTypes) {
  return (
    <TitleContainer>
      <TitleH1>{text}</TitleH1>
    </TitleContainer>
  );
}