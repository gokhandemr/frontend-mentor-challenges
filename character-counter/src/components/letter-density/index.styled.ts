import styled from 'styled-components';

export const Title = styled.h5`
  font: var(--text-preset-2);
  color: ${(props) => props.theme.color};
  margin-bottom: 20px;
`;
export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  font: var(--text-preset-4);
  transition: all .2s;
  & > p:first-child {
    width: 16px;
  }
  & > .bar {
    width: 86.88%;
    height: 12px;
    background: ${(props) => props.theme.progressBar.background};
    border-radius: 999px;
    @media (max-width: 1023px) {
      width: 81.5%;
    }
    @media (max-width: 767px) {
      width: 62%;
    }
  }
  & > .bar span {
    height: 12px;
    background: var(--purple-400);
    border-radius: 999px;
    display: flex;
  }
  & > p:last-child {
    width: 100px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: right;
  }
  &:last-of-type {
    margin-bottom: 20px;
  }

&:hover> .bar{
  transform: scale(1.01);
  transition: all .2s;
  cursor: pointer;
}
`;

export const ToogleSeeButton = styled.button`
  font: var(--text-preset-3);
  display: flex;
  align-items: center;
  cursor: pointer;
  background: transparent;
  border: none;
  color: ${(props) => props.theme.color};
  margin-bottom: 32px;

  &.see-less:after {
    content: '>';
    font-size: 16px;
    margin-left: 8px;
    transform: rotate(-90deg);
  }
  &:after {
    content: '>';
    font-size: 16px;
    margin-left: 8px;
    transform: rotate(90deg);
  }
  &:hover {
    color: var(--purple-400);
  }
`;

export const EmptyListText = styled.p`
  font: var(--text-preset-4);
  margin-bottom: 20px;
`;