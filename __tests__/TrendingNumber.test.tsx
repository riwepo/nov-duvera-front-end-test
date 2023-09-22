import { render, screen } from "@testing-library/react";
import TrendingNumber from "../app/components/TrendingNumber";
import "@testing-library/jest-dom";

describe("TrendingNumber component test suite", () => {
  it("displays the newer number", () => {
    const older = 1234;
    const newer = 5678;
    render(<TrendingNumber older={older} newer={newer} />);
    const newerNumberElement = screen.getByText(newer);
    expect(newerNumberElement).toBeInTheDocument();
  });
  it("doesn't display the older number", () => {
    const older = 1234;
    const newer = 5678;
    render(<TrendingNumber older={older} newer={newer} />);
    const olderNumberElement = screen.queryByText(older);
    expect(olderNumberElement).not.toBeInTheDocument();
  });
  it("has white color if no change", () => {
    const older = 1234;
    const newer = 1234;
    render(<TrendingNumber older={older} newer={newer} />);
    const newerNumberElement = screen.getByText(newer);
    expect(newerNumberElement).toHaveClass("text-white");
  });
  it("has green color if newer > older", () => {
    const older = 1;
    const newer = 2;
    render(<TrendingNumber older={older} newer={newer} />);
    const newerNumberElement = screen.getByText(newer);
    expect(newerNumberElement).toHaveClass("text-green-600");
  });
  it("has red color if newer < older", () => {
    const older = 2;
    const newer = 1;
    render(<TrendingNumber older={older} newer={newer} />);
    const newerNumberElement = screen.getByText(newer);
    expect(newerNumberElement).toHaveClass("text-red-600");
  });
  it("adds any classNames passed in", () => {
    const older = 1;
    const newer = 2;
    const className = "some-class-name";
    render(
      <TrendingNumber older={older} newer={newer} className={className} />
    );
    const newerNumberElement = screen.getByText(newer);
    expect(newerNumberElement).toHaveClass(className);
  });
});
