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
  border-radius: 4px;
  border: 1px solid var(--neutral-600);
  background: transparent;
  cursor: pointer;
  &[type="checkbox"]:checked {
    background-color: var(--purple-500);
    border: none;
  }
  &[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    margin: 0 10px 0 0;
    font: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 1px solid currentColor;
    border-radius: 0.15em;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
  }
  &[type="checkbox"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--form-control-color);
    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }
  &[type="checkbox"]:checked::before {
    transform: scale(1);
    background-color: CanvasText;
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
