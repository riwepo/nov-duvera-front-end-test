import Socket from "../lib/socket";
import config from "../../config.json";
import { nextNumber } from "../features/trending-number/trendingNumberSlice";

export function socketMiddleware(socket: Socket) {
  return function (params) {
    return function (next) {
      return function (action: { type: string }) {
        switch (action.type) {
          case "socket/connect":
            socket.connect(config.SERVER_URL);
            socket.onMessage((event: MessageEvent<number>) => {
              params.dispatch(nextNumber(event.data));
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
