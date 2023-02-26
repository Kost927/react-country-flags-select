import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import {
  SearchableSelectInput,
  SearchableSelectInputProps,
} from "../SearchableSelectInput";

describe("SearchableSelectInput", () => {
  const props: SearchableSelectInputProps = {
    searchTerm: "",
    classes: {},
    inputRef: React.createRef<HTMLInputElement>(),
    fullWidth: false,
    selectWidth: 200,
    selectHeight: 40,
    selected: null,
    selectedSize: 16,
    disabled: false,
    searchPlaceholder: "search",
    handleToggleSelect: jest.fn(),
    handleSearch: jest.fn(),
  };

  it("renders the input with the correct props", () => {
    render(
      <SearchableSelectInput {...props} searchPlaceholder="test placeholder" />
    );
    const input = screen.getByTestId("searchable-input");

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "test placeholder");
    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveAttribute("value", "");
    expect(input).toHaveAttribute("tabIndex", "-1");
    expect(input).toHaveAttribute("autoComplete", "off");
    expect(input).toHaveStyle({ width: "200px", height: "40px" });
  });

  it("calls the handleToggleSelect prop when clicked", () => {
    render(<SearchableSelectInput {...props} />);
    const input = screen.getByTestId("searchable-input");

    fireEvent.click(input);
    expect(props.handleToggleSelect).toHaveBeenCalled();
  });

  it("calls the handleSearch prop when changed", () => {
    render(<SearchableSelectInput {...props} />);
    const input = screen.getByTestId("searchable-input");

    fireEvent.change(input, { target: { value: "test" } });
    expect(props.handleSearch).toHaveBeenCalled();
  });

  it("disables the input when the disabled prop is true", () => {
    render(<SearchableSelectInput {...props} disabled />);
    const input = screen.getByTestId("searchable-input");

    expect(input).toBeDisabled();
  });
});
