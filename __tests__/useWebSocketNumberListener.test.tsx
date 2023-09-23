import { renderHook, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import useWebSocketNumberListener from "@/app/hooks/useWebSocketNumberListener";

import config from "../config.json";
const webSocketUrl = config.SERVER_URL;

describe("TrendingNumber component test suite", () => {
  it("call back gets called if we wait a little", async () => {
    const onNewNumber = jest.fn();
    renderHook(() => {
      useWebSocketNumberListener(webSocketUrl, onNewNumber);
    });
    await new Promise((r) => setTimeout(r, 200));
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
