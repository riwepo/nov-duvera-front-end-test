import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { StoreProvider } from "../app/redux/StoreProvider";
import Home from "../app/page";
import {
  NUMBER_SERVER_DIGITS,
  NUMBER_SERVER_PERIOD_MS,
} from "@/app/lib/constants";

describe("Home page component test suite", () => {
  it("renders heading", () => {
    render(
      <StoreProvider>
        <Home />
      </StoreProvider>
    );
    const headingElement = screen.getByText("QUADRA TEST");
    expect(headingElement).toBeInTheDocument();
  });
  it("initially renders white dashes", () => {
    render(
      <StoreProvider>
        <Home />
      </StoreProvider>
    );
    const dashesElement = screen.getByText("-".repeat(NUMBER_SERVER_DIGITS));
    expect(dashesElement).toBeInTheDocument();
    expect(dashesElement).toHaveClass("text-white");
  });
  it("if we wait a little the dashes are gone", async () => {
    // note this test depends on the number server running
    render(
      <StoreProvider>
        <Home />
      </StoreProvider>
    );
    await new Promise((r) => setTimeout(r, NUMBER_SERVER_PERIOD_MS * 2));
    const dashesElement = screen.queryByText("-".repeat(7));
    expect(dashesElement).not.toBeInTheDocument();
  });
  it("the number is initially white then it changes color", async () => {
    // note this test depends on the number server running
    const { container } = render(
      <StoreProvider>
        <Home />
      </StoreProvider>
    );
    const pElement = container.querySelector("p");
    expect(pElement).toBeInTheDocument();
    expect(pElement).toHaveClass("text-white");
    await new Promise((r) => setTimeout(r, NUMBER_SERVER_PERIOD_MS * 4));
    expect(pElement).not.toHaveClass("text-white");
  });
});
