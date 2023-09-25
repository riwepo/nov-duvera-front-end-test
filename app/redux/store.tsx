import { configureStore } from "@reduxjs/toolkit";

import trendingNumberReducer, {
  nextNumber,
} from "../features/trending-number/trendingNumberSlice";
import { socketMiddleware } from "./socketMiddleware";
import Socket from "../lib/socket";

// we have a bit of a circular dependency here
// we don't know the type of the store yet as it is inferred after it is created
// but we need to call dispatch on it
//let fwdStore: { dispatch: ({ type: string, payload: number }) => void };
let fwdStore: { dispatch: ({}) => void };
const socketNextNumberHandler = (n: number) => {
  fwdStore.dispatch({ type: "trendingNumber/nextNumber", payload: n });
};

const store = configureStore({
  reducer: { trendingNumber: trendingNumberReducer },
  middleware: (gDM) =>
    gDM().concat(socketMiddleware(new Socket(), socketNextNumberHandler)),
});

fwdStore = store;

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
