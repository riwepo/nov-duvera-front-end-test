// a little wrapper class around a WebSocket
class Socket {
  socket: WebSocket | null;
  messageCallback: ((event: MessageEvent) => void) | null;
  constructor() {
    this.socket = null;
    this.messageCallback = null;
  }

  connect(url: string) {
    if (!this.socket) {
      console.log("creating new web socket");
      this.socket = new WebSocket(url);
    }
  }

  disconnect() {
    if (this.socket) {
      console.log("destroying web socket");
      if (this.messageCallback) {
        this.socket.removeEventListener("message", this.messageCallback);
      }
      this.socket.close();
      this.socket = null;
    }
  }

  addMessageListener(callback: (event: MessageEvent) => void) {
    if (this.socket) {
      this.socket.addEventListener("message", callback);
      this.messageCallback = callback;
    }
  }
}

export default Socket;
