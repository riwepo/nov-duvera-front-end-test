import Socket from "@/app/lib/socket";
import { SERVER_URL } from "../config.json";
import { NUMBER_SERVER_PERIOD_MS } from "../app/lib/constants";

describe("Socket class test suite", () => {
  it("will call the message callback after a little while", async () => {
    // note this test depends on the number server running
    const onMessage = jest.fn();
    const socket = new Socket();
    socket.connect(SERVER_URL);
    socket.addMessageListener(onMessage);
    await new Promise((r) => setTimeout(r, NUMBER_SERVER_PERIOD_MS * 2));
    expect(onMessage).toBeCalled();
  });
  it("will keep changing the number", async () => {
    // note this test depends on the number server running
    let lastNumber = 0;
    const onMessage = jest.fn((n) => (lastNumber = n));
    const socket = new Socket();
    socket.connect(SERVER_URL);
    socket.addMessageListener(onMessage);
    await new Promise((r) => setTimeout(r, NUMBER_SERVER_PERIOD_MS * 2));
    expect(lastNumber).not.toBe(0);
    const savedNumber = lastNumber;
    await new Promise((r) => setTimeout(r, NUMBER_SERVER_PERIOD_MS * 2));
    expect(lastNumber).not.toBe(savedNumber);
  });
  it("will call stop changing the number if we disconnect", async () => {
    // note this test depends on the number server running
    let lastNumber = 0;
    const onMessage = jest.fn((n) => (lastNumber = n));
    const socket = new Socket();
    socket.connect(SERVER_URL);
    socket.addMessageListener(onMessage);
    await new Promise((r) => setTimeout(r, NUMBER_SERVER_PERIOD_MS * 2));
    expect(lastNumber).not.toBe(0);
    socket.disconnect();
    const savedNumber = lastNumber;
    await new Promise((r) => setTimeout(r, NUMBER_SERVER_PERIOD_MS * 2));
    expect(lastNumber).toBe(savedNumber);
  });
});
