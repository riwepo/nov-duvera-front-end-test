import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";

import trendingNumberReducer from "../features/trending-number/trendingNumberSlice";
import { socketMiddleware } from "./socketMiddleware";
import Socket from "../lib/socket";

const rootReducer = combineReducers({ trendingNumber: trendingNumberReducer });

const store = createStore(
  rootReducer,
  applyMiddleware(socketMiddleware(new Socket()))
);

export default store;
