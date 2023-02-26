import { getCountryLabel } from "../utils";

const allCountries = {
  US: "United States",
  CA: "Canada",
};

describe("getCountryLabel", () => {
  it("returns the country code if labelOnlyCountryCode is true", () => {
    expect(getCountryLabel("US", {}, allCountries, false, true)).toEqual("US");
  });

  it("returns the label with country code if labelWithCountryCode is true", () => {
    expect(
      getCountryLabel("US", { US: "USA" }, allCountries, true, false)
    ).toEqual("USA (US)");
    expect(
      getCountryLabel("CA", { US: "USA" }, allCountries, true, false)
    ).toEqual("Canada (CA)");
  });

  it("returns the custom label if available, otherwise the default label", () => {
    expect(
      getCountryLabel("US", { US: "America" }, allCountries, false, false)
    ).toEqual("America");
    expect(
      getCountryLabel("CA", { CA: "Canadian" }, allCountries, false, false)
    ).toEqual("Canadian");
  });
});
