// React
import {useState} from 'react';
// Styled
import {EmptyListText, ListItem, Title, ToogleSeeButton} from './index.styled';

export default function LetterDensity({textAreaValue}: {textAreaValue: string}) {
  const [listCount, setListCount] = useState<number>(5);

  const chars =
    textAreaValue
      .trim()
      .toUpperCase()
      .match(/[^.,\s]/g) || [];

  const uniqueChars = [...new Set(chars)];

  const charStats = uniqueChars
    .map((char) => ({
      value: char,
      count: chars?.filter((c) => c === char).length,
      percent: (((chars?.filter((c) => c === char).length ?? 0) / chars.length) * 100).toFixed(2),
    }))
    .sort((a, b) => (b.count ?? 0) - (a.count ?? 0));

  return (
    <div>
      <Title>Letter Density</Title>
      {charStats.length > 0 ? (
        <>
          {charStats.slice(0, listCount).map((char, index) => (
            <ListItem key={index}>
              <p>{char.value}</p>
              <div className='bar'>
                <span style={{width: `${char.percent || 0}%`}}></span>
              </div>

              <p>{`${char.count} (${char.percent}%)`}</p>
            </ListItem>
          ))}
          {charStats.length > 5 && (
            <ToogleSeeButton
              className={listCount === charStats.length ? 'see-less' : ''}
              onClick={() => setListCount(listCount === charStats.length ? 5 : charStats.length)}
            >
              {listCount < charStats.length ? `See more` : `See less`}
            </ToogleSeeButton>
          )}
        </>
      ) : (
        <EmptyListText>No characters found. Start typing to see letter density.</EmptyListText>
      )}
    </div>
  );
}
