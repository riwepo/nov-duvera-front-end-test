interface ITrendingNumberState {
  prevNumber: number | null;
  currNumber: number | null;
}

interface IAction {
  type: string;
  payload: number;
}
const trendingNumberInitialState: ITrendingNumberState = {
  prevNumber: null,
  currNumber: null,
};
export default function trendingNumberReducer(
  currentState: ITrendingNumberState = trendingNumberInitialState,
  action: IAction
) {
  switch (action.type) {
    case "trendingNumber/next":
      const newState = {
        ...currentState,
        prevNumber: currentState.currNumber,
        currNumber: action.payload,
      };
      return newState;
    default:
      return currentState;
  }
}

export function nextNumber(n: number) {
  return { type: "trendingNumber/next", payload: n };
}
