import { render, screen } from "@testing-library/react";
import TrendingNumber from "../app/components/TrendingNumber";
import "@testing-library/jest-dom";

describe("TrendingNumber component test suite", () => {
  const older = 1234;
  const newer = 5678;
  it("displays the newer number", () => {
    render(<TrendingNumber older={older} newer={newer} />);
    const newerNumberElement = screen.getByText(newer);
    expect(newerNumberElement).toBeInTheDocument();
  });
});
