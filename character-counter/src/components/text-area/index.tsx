// React
import {useEffect, useState} from 'react';
// Styled
import {useTheme} from 'styled-components';
import {
  CharacterLimitInput,
  ErrorIcon,
  ErrorText,
  Input,
  Label,
  LabelText,
  OptionsContainer,
  ReadingTimeSpan,
  TextAreaContainer,
} from './index.styled';
// Icon
import infoIcon from '../../assets/images/icon-info.svg';
// Types
import {TextAreaTypes} from '../../types';

export default function TextArea({textAreaValue, setTextAreaValue, excludeSpaces, setExcludeSpaces}: TextAreaTypes) {
  const theme = useTheme();
  const [characterLimit, setCharacterLimit] = useState<boolean>(false);
  const [characterLimitValue, setCharacterLimitValue] = useState<string>('300');
  const [characterLimitError, setCharacterLimitError] = useState<boolean>(false);

  useEffect(() => {
    const textLength = excludeSpaces ? textAreaValue.replace(/ /g, '').length : textAreaValue.length;
    setCharacterLimitError(characterLimit && textLength > Number(characterLimitValue));
  }, [excludeSpaces, characterLimit, characterLimitValue, textAreaValue]);

  return (
    <>
      <TextAreaContainer
        placeholder='Start typing here… (or paste your text)'
        value={textAreaValue}
        onChange={(e) => setTextAreaValue(e.target.value)}
        style={theme.textArea}
        className={characterLimitError ? 'error' : ''}
      />
      {characterLimitError && (
        <ErrorText>
          <ErrorIcon
            src={infoIcon}
            alt='info icon'
          />
          {`Limit reached! Your text exceeds ${characterLimitValue} characters.`}
        </ErrorText>
      )}
      <OptionsContainer>
        <Label>
          <Input
            id='Exclude Spaces'
            checked={excludeSpaces}
            onClick={() => setExcludeSpaces(!excludeSpaces)}
            readOnly
          />
          <LabelText>Exclude Spaces</LabelText>
        </Label>

        <Label>
          <Input
            id='Set Character Limit'
            checked={characterLimit}
            onClick={() => setCharacterLimit(!characterLimit)}
            readOnly
          />
          <LabelText>Set Character Limit</LabelText>
          {characterLimit && (
            <CharacterLimitInput
              type='number'
              value={characterLimitValue}
              onChange={(e) => (/^[0-9]*$/.test(e.target.value) ? setCharacterLimitValue(e.target.value) : {})}
            />
          )}
        </Label>

        <ReadingTimeSpan>{`Approx. reading time: <${Math.ceil(textAreaValue.length / 1700)} minute`}</ReadingTimeSpan>
      </OptionsContainer>
    </>
  );
}
