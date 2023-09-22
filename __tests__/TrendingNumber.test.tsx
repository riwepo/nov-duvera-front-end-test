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
  it("appends any classNames passed in", () => {
    const older = 1;
    const newer = 2;
    const passedInClassName = "passed-in-class-name";
    render(
      <TrendingNumber
        older={older}
        newer={newer}
        className={passedInClassName}
      />
    );
    const newerNumberElement = screen.getByText(newer);
    expect(newerNumberElement).toHaveClass("text-green-600");
    expect(newerNumberElement).toHaveClass(passedInClassName);
  });
  it("displays dashes if newer is null", () => {
    const older = 1;
    const newer = null;
    render(<TrendingNumber older={older} newer={newer} />);
    const newerNumberElement = screen.getByText("-------");
    expect(newerNumberElement).toBeInTheDocument();
  });
  it("displays newer even if older is null", () => {
    const older = null;
    const newer = 1234;
    render(<TrendingNumber older={older} newer={newer} />);
    const newerNumberElement = screen.getByText(newer);
    expect(newerNumberElement).toBeInTheDocument();
  });
  it("displays in white if older is null", () => {
    const older = null;
    const newer = 1234;
    render(<TrendingNumber older={older} newer={newer} />);
    const newerNumberElement = screen.getByText(newer);
    expect(newerNumberElement).toHaveClass("text-white");
  });
  it("displays in white if newer is null", () => {
    const older = 1234;
    const newer = null;
    render(<TrendingNumber older={older} newer={newer} />);
    const newerNumberElement = screen.getByText("-------");
    expect(newerNumberElement).toHaveClass("text-white");
  });
});
