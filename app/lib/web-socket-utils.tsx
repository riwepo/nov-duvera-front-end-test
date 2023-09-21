export enum SocketState {
  Connecting = 1,
  Open,
  Closing,
  Closed,
}

const openEventListener = () => console.log("web socket opened");
const closeEventListener = () => console.log("web socket closed");
const messageEventListener = (messageEvent: MessageEvent) =>
  console.log(`web socket message received '${messageEvent.data}'`);

export function addEventListeners(wsInstance: WebSocket | null) {
  if (wsInstance) {
    wsInstance.addEventListener("open", openEventListener);
    wsInstance.addEventListener("close", closeEventListener);
    wsInstance.addEventListener("message", messageEventListener);
  }
}

export function removeEventListeners(wsInstance: WebSocket | null) {
  if (wsInstance) {
    wsInstance.removeEventListener("open", openEventListener);
    wsInstance.removeEventListener("close", closeEventListener);
    wsInstance.removeEventListener("message", messageEventListener);
  }
}
