import { render, fireEvent, screen } from "@testing-library/react";
import { ToggleIcons } from "../ToggleIcons";

describe("ToggleIcons component", () => {
  const props = {
    isOpen: true,
    disabled: false,
    CustomOpenIcon: false,
    CustomCloseIcon: false,
    classes: {},
    handleToggleSelect: jest.fn(),
  };

  it("renders the open icon when isOpen is true", () => {
    render(<ToggleIcons {...props} />);
    expect(screen.getByTestId("open-icon")).toBeInTheDocument();
  });

  it("renders the close icon when isOpen is false", () => {
    render(<ToggleIcons {...props} isOpen={false} />);
    expect(screen.getByTestId("close-icon")).toBeInTheDocument();
  });

  it("calls handleToggleSelect when the open icon is clicked", () => {
    render(
      <ToggleIcons
        {...props}
        isOpen={true}
        handleToggleSelect={props.handleToggleSelect}
      />
    );

    fireEvent.click(screen.getByTestId("open-icon"));
    expect(props.handleToggleSelect).toHaveBeenCalled();
  });

  it("calls handleToggleSelect when the close icon is clicked", () => {
    render(
      <ToggleIcons
        {...props}
        isOpen={false}
        handleToggleSelect={props.handleToggleSelect}
      />
    );

    fireEvent.click(screen.getByTestId("close-icon"));
    expect(props.handleToggleSelect).toHaveBeenCalled();
  });
});
