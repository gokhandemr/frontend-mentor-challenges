// Styled
import {StatsContainer} from './index.styled';
// Types
import {StatsTypes} from '../../types';
// Components
import Stat from './stat';
// Images
import patternChar from '../../assets/images/pattern-character-count.svg';
import patternWord from '../../assets/images/pattern-word-count.svg';
import patternSentence from '../../assets/images/pattern-sentence-count.svg';

export default function Stats({textAreaValue, excludeSpaces}: StatsTypes) {
  const stats = [
    {
      title: `Total Characters${excludeSpaces ? ' (no space)' : ''}`,
      value: excludeSpaces ? textAreaValue.replace(/ /g, '').length : textAreaValue.length,
      background: 'var(--purple-400)',
      image: patternChar,
    },
    {
      title: 'Word Count',
      value: textAreaValue
        .trim()
        .split(' ')
        .filter((c) => c.match(/[^\s|\s$]/)).length,
      background: 'var(--yellow-500)',
      image: patternWord,
    },
    {
      title: 'Sentence Count',
      value: textAreaValue.trim() !== '' ? textAreaValue.trim().split(/[.!?]\s+/).length : 0,
      background: 'var(--orange-500)',
      image: patternSentence,
    },
  ];

  return (
    <StatsContainer>
      {stats.map((item, index) => (
        <Stat
          key={index}
          value={item.value}
          text={item.title}
          background={item.background}
          image={item.image}
        />
      ))}
    </StatsContainer>
  );
}
