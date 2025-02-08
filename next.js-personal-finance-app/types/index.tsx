export interface Balance {
  current: number;
  income: number;
  expenses: number;
}

export interface Budgets {
  category: string;
  maximum: number;
  theme: string;
}

export interface Transactions {
  avatar: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  recurring: boolean;
  isPaid?: boolean | undefined;
}

export interface Pots {
  name: string;
  target: number;
  total: number;
  theme: string;
}

export interface DetailedSummary {
  paidBillsResult: number;
  paidBillsLength: number;
  totalResult: number;
  totalLength: number;
  dueSoonResult: number;
  dueSoonLength: number;
}

//! Table Input Fields Types
interface InputFieldsBase {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

interface InputFieldsWithSort extends InputFieldsBase {
  showDropdownSort: boolean;
  setSortValue: (value: string) => void;
}

interface InputFieldsWithoutSort extends InputFieldsBase {
  showDropdownSort?: false;
  setSortValue?: never;
}

interface InputFieldsWithCategory extends InputFieldsBase {
  showDropdownCategory: boolean;
  categoryNames: string[];
  setCategoryValue: (value: string) => void;
}

interface InputFieldsWithoutCategory extends InputFieldsBase {
  showDropdownCategory?: false;
  categoryNames?: never;
  setCategoryValue?: never;
}

export type InputFields = (InputFieldsWithSort | InputFieldsWithoutSort) &
  (InputFieldsWithCategory | InputFieldsWithoutCategory);
//! Table Input Fields Types
