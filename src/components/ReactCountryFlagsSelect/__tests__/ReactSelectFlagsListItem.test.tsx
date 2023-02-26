import { render, fireEvent, screen } from "@testing-library/react";

import { Country } from "../../../types";
import {
  ReactSelectFlagsListItem,
  ReactSelectFlagsListItemProps,
} from "../ReactSelectFlagsListItem";

const props: ReactSelectFlagsListItemProps = {
  option: { label: "United States", countryCode: "US" } as Country,
  optionSize: 20,
  classes: {},
  selected: null,
  handleOptionClick: jest.fn(),
  handleSelectWithKeyboard: jest.fn(),
};

describe("ReactSelectFlagsListItem", () => {
  it("should render the component with the correct props", () => {
    render(<ReactSelectFlagsListItem {...props} />);

    expect(screen.getByText("United States")).toBeInTheDocument();

    expect(screen.getByTestId("country-flag")).toBeInTheDocument();
  });

  it("should call the handleOptionClick function when clicked", () => {
    render(<ReactSelectFlagsListItem {...props} />);

    fireEvent.click(screen.getByText("United States"));

    expect(props.handleOptionClick).toHaveBeenCalledWith({
      label: "United States",
      countryCode: "US",
    });
  });

  it("should call the handleSelectWithKeyboard function when a key is pressed", () => {
    render(<ReactSelectFlagsListItem {...props} />);

    fireEvent.keyUp(screen.getByText("United States"), { key: "Enter" });

    expect(props.handleSelectWithKeyboard).toHaveBeenCalledWith(
      expect.anything(),
      {
        label: "United States",
        countryCode: "US",
      }
    );
  });
});
