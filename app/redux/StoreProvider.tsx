"use client";

import store from "./store";
import { Provider } from "react-redux";

// when used to wrap components it provides the redux store
// we implement this in its own file because we only want it to be defined on the client
// see 'use client' above
export function StoreProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
