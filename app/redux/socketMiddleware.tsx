import Socket from "../lib/socket";
import config from "../../config.json";

// here we implement some redux middleware
// we have a WebSocket
// this middleware resonds to actions 'connect' and 'disconnect'
// on receipt of a message, it calls the onMessage callback provided
// thanks to https://www.taniarascia.com/websockets-in-redux/ for some ideas
export function socketMiddleware(
  socket: Socket,
  onMessage: (data: number) => void
) {
  return function () {
    return function (next) {
      return function (action: { type: string }) {
        switch (action.type) {
          case "socket/connect":
            socket.connect(config.SERVER_URL);
            socket.addMessageListener((event: MessageEvent<number>) => {
              onMessage(event.data);
            });
            break;

          case "socket/disconnect":
            socket.disconnect();
            break;

          default:
            break;
        }

        return next(action);
      };
    };
  };
}
