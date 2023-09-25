import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import trendingNumberReducer from "../features/trending-number/trendingNumberSlice";
import { socketMiddleware } from "./socketMiddleware";
import Socket from "../lib/socket";

const store = configureStore({
  reducer: { trendingNumber: trendingNumberReducer },
  middleware: (gDM) => gDM().concat(socketMiddleware(new Socket())),
});

export default store;
