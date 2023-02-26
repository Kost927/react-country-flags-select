import { render, fireEvent, screen } from "@testing-library/react";

import { Country } from "../../../types";
import {
  NonSearchableSelectButton,
  NonSearchableSelectButtonProps,
} from "../NonSearchableSelectButton";

describe("NonSearchableSelectButton", () => {
  const defaultProps: NonSearchableSelectButtonProps = {
    selectButtonPlaceholder: "Select Country",
    classes: {},
    fullWidth: false,
    selectWidth: 200,
    selectHeight: 40,
    selected: null,
    selectedSize: 16,
    disabled: false,
    handleToggleSelect: jest.fn(),
  };

  test("renders select button with placeholder text", () => {
    render(<NonSearchableSelectButton {...defaultProps} />);
    const button = screen.getByTestId("non-searchable-button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Select Country");
  });

  test("renders select button with selected label", () => {
    const selectedCountry: Country = {
      countryCode: "US",
      label: "United States",
    };
    render(
      <NonSearchableSelectButton {...defaultProps} selected={selectedCountry} />
    );
    const button = screen.getByTestId("non-searchable-button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("United States");
  });

  test("calls handleToggleSelect when button is clicked", () => {
    render(<NonSearchableSelectButton {...defaultProps} />);
    const button = screen.getByTestId("non-searchable-button");

    fireEvent.click(button);
    expect(defaultProps.handleToggleSelect).toHaveBeenCalled();
  });

  test("button is disabled when disabled prop is true", () => {
    render(<NonSearchableSelectButton {...defaultProps} disabled={true} />);
    const button = screen.getByTestId("non-searchable-button");

    expect(button).toBeDisabled();
  });
});
