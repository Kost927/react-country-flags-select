export type CountryCode = string;
export type Country = {
  label: string;
  countryCode: string;
};
export type Countries = Record<string, string>;
export type OnSelect = (country: Country | null) => void;
