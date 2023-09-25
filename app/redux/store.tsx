import { configureStore } from "@reduxjs/toolkit";

import trendingNumberReducer, {
  nextNumber,
} from "../features/trending-number/trendingNumberSlice";
import { socketMiddleware } from "./socketMiddleware";
import Socket from "../lib/socket";

// we have a circular dependency here
// we don't know the type of the store yet as it is inferred after it is configured
// but we need to call dispatch on it
// so we put the store in a variable with some basic typing
let fwdStore: { dispatch: ({}) => void } | null = null;
const socketNextNumberHandler = (n: number) => {
  if (fwdStore) fwdStore.dispatch(nextNumber(n));
};

// configure the redux store, plugging in our custom middleware
const store = configureStore({
  reducer: { trendingNumber: trendingNumberReducer },
  middleware: (gDM) =>
    gDM().concat(socketMiddleware(new Socket(), socketNextNumberHandler)),
});

// initiallise the variable used by the middleware callback
fwdStore = store;

export default store;

// following redux recommendations here

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
