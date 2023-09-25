import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../../redux/store";

interface ITrendingNumberState {
  prevNumber: number | null;
  currNumber: number | null;
}

const initialState: ITrendingNumberState = {
  prevNumber: null,
  currNumber: null,
};

const trendingNumberSlice = createSlice({
  name: "trendingNumber",
  initialState: initialState,
  reducers: {
    nextNumber(state, action: PayloadAction<number>) {
      // we are allowed to mutate state here
      // RTK makes it immuatable behind the scenes
      (state.prevNumber = state.currNumber),
        (state.currNumber = action.payload);
    },
  },
});

export default trendingNumberSlice.reducer;
export const nextNumber = trendingNumberSlice.actions.nextNumber;
export const selectTrandingNumber = (state: RootState) => state.trendingNumber;
