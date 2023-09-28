// Arrange
// Act
// Assert

import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";
describe("Greeting Component", () => {
  test("renders hello world as text", () => {
    // Arrange
    render(<Greeting />);
    // Act

    // Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders text when the button is not set", () => {
    // Arrange
    render(<Greeting />);
    // Act

    // Assert
    const outputElement = screen.getByText("It's good to see you", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders text when the button is  set", () => {
    // Arrange
    render(<Greeting />);
    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    // Assert
    const outputElement = screen.getByText("Changed", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });
  test("renders text when the button is set AND assures the previous text is not shown", () => {
    // Arrange
    render(<Greeting />);
    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    // Assert
    const visibleTextElement = screen.getByText("Changed", {
      exact: false,
    });
    const notVisibleTextElement = screen.queryByText("It's good to see you", {
      exact: false,
    });
    expect(visibleTextElement).toBeInTheDocument() &&
      expect(notVisibleTextElement).toBeNull();
  });
});
