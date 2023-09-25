import { createSlice } from "@reduxjs/toolkit";

interface ITrendingNumberState {
  prevNumber: number | null;
  currNumber: number | null;
}

interface ITrendingNumberAction {
  type: string;
  payload: number;
}
const initialState = {
  prevNumber: null,
  currNumber: null,
};

const trendingNumberSlice = createSlice({
  name: "trendingNumber",
  initialState: initialState,
  reducers: {
    nextNumber(state, action) {
      // we are allowd to mutate state here
      // RTK makes it immuatable behind the scenes
      (state.prevNumber = state.currNumber),
        (state.currNumber = action.payload);
    },
  },
});

export default trendingNumberSlice.reducer;
export const nextNumber = trendingNumberSlice.actions.nextNumber;

// export default function trendingNumberReducer(
//   currentState: ITrendingNumberState = trendingNumberInitialState,
//   action: ITrendingNumberAction
// ): ITrendingNumberState {
//   switch (action.type) {
//     case "trendingNumber/next":
//       const newState: ITrendingNumberState = {
//         ...currentState,
//         prevNumber: currentState.currNumber,
//         currNumber: action.payload,
//       };
//       return newState;
//     default:
//       return currentState;
//   }
// }

// export function nextNumber(n: number): ITrendingNumberAction {
//   return { type: "trendingNumber/next", payload: n };
// }
