import { renderHook, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import useWebSocketNumberListener from "@/app/hooks/useWebSocketNumberListener";

import config from "../config.json";
import { NUMBER_SERVER_PERIOD_MS } from "@/app/lib/constants";
const webSocketUrl = config.SERVER_URL;

describe("TrendingNumber component test suite", () => {
  it("call back gets called if we wait a little", async () => {
    // note this test depends on the number server running
    const onNewNumber = jest.fn();
    renderHook(() => {
      useWebSocketNumberListener(webSocketUrl, onNewNumber);
    });
    await new Promise((r) => setTimeout(r, NUMBER_SERVER_PERIOD_MS * 2));
    expect(onNewNumber).toBeCalled();
  });
  it("throws if we pass in a url that doesn't start with 'ws'", async () => {
    const onNewNumber = jest.fn();
    // note the URL should start with "ws"
    const badUrl = "http://localhost:8080";
    expect(() => {
      renderHook(() => {
        useWebSocketNumberListener(badUrl, onNewNumber);
      });
    }).toThrow();
  });
});
