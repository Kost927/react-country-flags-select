import { countryCodeToPascalCase } from "../utils";

describe("countryCodeToPascalCase", () => {
  it("returns a country code to pascal case", () => {
    expect(countryCodeToPascalCase("GB")).toEqual("Gb");
  });
});
