import { useState, useEffect } from "react";

const isRunningInBrowser = typeof window !== "undefined";

// export enum SocketState {
//   Connecting = 1,
//   Open,
//   Closing,
//   Closed,
// }

export default function useWebSocketNumberListener(
  url: string,
  onNewNumber: (num: number) => void
) {
  const [wsInstance] = useState<WebSocket | null>(() =>
    isRunningInBrowser ? new WebSocket(url) : null
  );

  const openEventListener = () => console.log("web socket opened");
  const closeEventListener = () => console.log("web socket closed");
  const messageEventListener = (messageEvent: MessageEvent) => {
    //console.log(`web socket message received '${messageEvent.data}'`);
    const newNumber = messageEvent.data;
    onNewNumber(newNumber);
  };

  function addEventListeners(wsInstance: WebSocket | null) {
    if (wsInstance) {
      wsInstance.addEventListener("open", openEventListener);
      wsInstance.addEventListener("close", closeEventListener);
      wsInstance.addEventListener("message", messageEventListener);
    }
  }

  function removeEventListeners(wsInstance: WebSocket | null) {
    if (wsInstance) {
      wsInstance.removeEventListener("open", openEventListener);
      wsInstance.removeEventListener("close", closeEventListener);
      wsInstance.removeEventListener("message", messageEventListener);
    }
  }

  useEffect(() => {
    addEventListeners(wsInstance);
    return () => {
      if (wsInstance) {
        removeEventListeners(wsInstance);
      }
    };
  }, []);
}
