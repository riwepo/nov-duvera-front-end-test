import { render, screen } from "@testing-library/react";
import DynamicNumber from "../app/components/DynamicNumber";
import "@testing-library/jest-dom";

describe("DynamicNumber component test suite", () => {
  const number = 1234;
  const colorClass = "text-green-500";
  it("number with classes", () => {
    render(<DynamicNumber number={number} colorClass={colorClass} />);
    const numberElement = screen.getByText(number);
    expect(numberElement).toBeInTheDocument();
    expect(numberElement).toHaveClass(colorClass);
  });
});
