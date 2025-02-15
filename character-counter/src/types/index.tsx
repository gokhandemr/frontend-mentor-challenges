export type HeaderTypes = {
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TitleTypes = {
  text: string;
};

export type TextAreaTypes = {
  textAreaValue: string;
  setTextAreaValue: React.Dispatch<React.SetStateAction<string>>;
  excludeSpaces: boolean;
  setExcludeSpaces: React.Dispatch<React.SetStateAction<boolean>>;
};

export type StatsTypes = {
  textAreaValue: string;
  excludeSpaces: boolean;
};

export type StatTypes = {
  value: number;
  text: string;
  background: string;
  image: string;
};
