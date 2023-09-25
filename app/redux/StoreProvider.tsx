"use client";

import store from "./store";
import { Provider } from "react-redux";

// when used to wrap components it provides the redux store
// we implement this separately because we only want it to be defined on the client
export function StoreProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
