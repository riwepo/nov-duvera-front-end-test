interface ITrendingNumberState {
  prevNumber: number | null;
  currNumber: number | null;
}

interface ITrendingNumberAction {
  type: string;
  payload: number;
}
const trendingNumberInitialState: ITrendingNumberState = {
  prevNumber: null,
  currNumber: null,
};
export default function trendingNumberReducer(
  currentState: ITrendingNumberState = trendingNumberInitialState,
  action: ITrendingNumberAction
): ITrendingNumberState {
  switch (action.type) {
    case "trendingNumber/next":
      const newState: ITrendingNumberState = {
        ...currentState,
        prevNumber: currentState.currNumber,
        currNumber: action.payload,
      };
      return newState;
    default:
      return currentState;
  }
}

export function nextNumber(n: number): ITrendingNumberAction {
  return { type: "trendingNumber/next", payload: n };
}
