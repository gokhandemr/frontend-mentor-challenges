import styled from 'styled-components';

export const TextAreaContainer = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 20px;
  margin-bottom: 16px;
  resize: none;
  font: var(--text-preset-3);
  border-radius: 8px;
  outline: none;
  &:focus {
    box-shadow: 0 0 8px 2px var(--purple-500);
    transition: box-shadow 0.3s ease;
  }
  &.error,
  &.error:focus {
    border-color: var(--orange-800) !important;
    box-shadow: 0 0 8px 2px var(--orange-800);
  }
`;

export const OptionsContainer = styled.div`
  width: 100%;
  height: 30px;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 48px;

  @media (max-width: 767px) {
    flex-direction: column;
    height: auto;
    align-items: flex-start;
    margin-bottom: 40px;
  }
`;

export const Label = styled.label`
  width: auto;
  height: 21px;
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  @media (max-width: 767px) {
    margin: 0 0 12px 0;
  }
`;

export const Input = styled.input.attrs({ type: 'checkbox' })`
  width: 16px;
  height: 16px;
  margin-right: 12px;
  appearance: none;
  border-radius: 4px;
  border: 1px solid var(--neutral-600);
  &[type='checkbox']:checked {
    background: url('../../../src/assets/images/icon-check.svg') no-repeat center var(--purple-400);
    border-color: transparent;
  }
  &[type='checkbox']:checked::after {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const LabelText = styled.span`
  font-size: 16px;
  margin-right: 24px;
`;

export const CharacterLimitInput = styled.input.attrs({ type: 'number' })`
  width: 60px;
  height: 100%;
  padding: 0 8px;
  text-align: center;
  outline: none;
  border-radius: 6px;
  appearance: none;
  background: transparent;
  border: 1px solid var(--neutral-600);
  color: ${(prop) => prop.theme.color};
  -moz-appearance: textfield;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ReadingTimeSpan = styled.span`
  position: absolute;
  right: 0;
  font: var(--text-preset-4);
  @media (max-width: 767px) {
    position: relative;
  }
`;

export const ErrorText = styled.p`
  font: var(--text-preset-4);
  color: var(--orange-500);
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const ErrorIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;
