// Styled
import {StatsContainer} from './index.styled';
// Types
import {StatsTypes} from '../../types';
// Components
import Stat from './stat';

export default function Stats({textAreaValue, excludeSpaces}: StatsTypes) {
  const stats = [
    {
      title: `Total Characters${excludeSpaces ? ' (no space)' : ''}`,
      value: excludeSpaces ? textAreaValue.replace(/ /g, '').length : textAreaValue.length,
      background: 'var(--purple-400)',
      image: '../src/assets/images/pattern-character-count.svg',
    },
    {
      title: 'Word Count',
      value: textAreaValue
        .trim()
        .split(' ')
        .filter((c) => c.match(/[^\s|\s$]/)).length,
      background: 'var(--yellow-500)',
      image: '../src/assets/images/pattern-word-count.svg',
    },
    {
      title: 'Sentence Count',
      value: textAreaValue.trim() !== '' ? textAreaValue.trim().split(/[.!?]\s+/).length : 0,
      background: 'var(--orange-500)',
      image: '../src/assets/images/pattern-sentence-count.svg',
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
