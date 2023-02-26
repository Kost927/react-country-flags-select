import { Countries } from "../types";

export const getCountryLabel = (
  countryCode: string,
  customLabelOptions: Countries,
  allCountries: Countries,
  labelWithCountryCode: boolean,
  labelOnlyCountryCode: boolean
): string => {
  if (labelOnlyCountryCode) {
    return countryCode;
  }

  if (labelWithCountryCode) {
    return `${
      customLabelOptions?.[countryCode] || allCountries[countryCode]
    } (${countryCode})`;
  }
  return customLabelOptions?.[countryCode] || allCountries[countryCode];
};

export const countryCodeToPascalCase = (countryCode: string): string => {
  const codeArray = countryCode.split("");
  return `${codeArray[0]}${codeArray[1].toLowerCase()}`;
};
