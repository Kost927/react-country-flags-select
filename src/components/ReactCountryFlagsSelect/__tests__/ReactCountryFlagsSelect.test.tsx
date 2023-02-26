import { render, fireEvent, screen } from "@testing-library/react";

import ReactCountryFlagsSelect, { Props } from "../index";

describe("ReactSelectFlags", () => {
  const mockOnSelect = jest.fn();

  const props: Props = {
    onSelect: mockOnSelect,
    selected: null,
    searchable: true,
    customCountries: {
      AF: "Afghanistan",
      AL: "Albania",
      DZ: "Algeria",
      // Add more countries as needed
    },
    classes: {},
    customLabelOptions: { US: "America" },
    labelWithCountryCode: false,
    labelOnlyCountryCode: false,
    searchPlaceholder: "Search",
    selectPlaceholder: "Select a country",
    clearIcon: true,
    selectWidth: 250,
    selectHeight: 30,
    optionSize: 16,
    selectedSize: 16,
    fullWidth: false,
    optionsListMaxHeight: 300,
    disabled: false,
    id: "select-flags",
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders without errors", () => {
    render(<ReactCountryFlagsSelect {...props} />);
  });

  it("filters options based on search term", () => {
    render(<ReactCountryFlagsSelect {...props} />);
    const input = screen.getByTestId("searchable-input");

    fireEvent.change(input, { target: { value: "Alb" } });
    const option = screen.getByText("Albania");

    expect(option).toBeInTheDocument();
  });

  it("clears search term and selected country when clear icon is clicked", () => {
    render(
      <ReactCountryFlagsSelect
        {...props}
        selected={{ label: "Albania", countryCode: "AL" }}
      />
    );
    const clearIcon = screen.getByTestId("clear-icon");

    fireEvent.click(clearIcon);
    expect(mockOnSelect).toHaveBeenCalledWith(null);

    const input = screen.getByTestId("searchable-input");

    expect(input).toHaveValue("");
  });

  it("displays selected country", () => {
    render(
      <ReactCountryFlagsSelect
        {...props}
        selected={{ label: "Algeria", countryCode: "DZ" }}
      />
    );
    const input = screen.getByTestId("searchable-input");
    expect(input).toHaveValue("Algeria");
  });

  it("does not render options list by default", () => {
    render(<ReactCountryFlagsSelect {...props} />);
    const dropdown = screen.queryByRole("listbox");

    expect(dropdown).not.toBeInTheDocument();
  });

  it("opens and closes the select", () => {
    render(<ReactCountryFlagsSelect {...props} />);
    const select = screen.getByTestId("searchable-input");

    fireEvent.click(select);
    const dropdown = screen.getByTestId("options-wrapper");
    expect(dropdown).toBeInTheDocument();

    fireEvent.click(select);
    expect(dropdown).not.toBeInTheDocument();
  });

  it("renders the flag SVG of each country option", () => {
    render(<ReactCountryFlagsSelect {...props} />);
    const select = screen.getByTestId("searchable-input");
    fireEvent.click(select);

    const flag = screen.getAllByTestId("country-flag");
    expect(flag[0].nodeName).toBe("svg");
  });
});
