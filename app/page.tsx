"use client";

import { useReducer } from "react";

import TrendingNumber from "./components/TrendingNumber";

import useWebSocketNumberListener from "./hooks/useWebSocketNumberListener";

import config from "../config.json";

const webSocketUrl = config.SERVER_URL;

function currNumbersReducer(
  state: (number | null)[],
  action: { newNumber: number }
): (number | null)[] {
  const newState = [action.newNumber, state[0]];
  return newState;
}

export default function Home() {
  // store the older number at index 1
  // store the newer number at index 0
  const [currNumbers, dispatch] = useReducer(currNumbersReducer, [null, null]);

  const newNumberHandler = (newNumber: number) => {
    dispatch({ newNumber: newNumber });
  };

  // list for a new random number on a web socket
  useWebSocketNumberListener(webSocketUrl, newNumberHandler);

  return (
    <div className="bg-black h-screen grid grid-rows-[1fr_auto_1fr] grid-cols-[1fr_auto_1fr]">
      <div className="row-start-2 col-start-2 bg-transparent flex flex-col items-center">
        <h1 className="text-white py-10 font-bold text-xl">QUADRA TEST</h1>
        <div className="bg-gray-500 rounded-md p-10 font-normal text-2xl">
          <TrendingNumber
            older={currNumbers[1]}
            newer={currNumbers[0]}
            className="font-mono"
          />
        </div>
      </div>
    </div>
  );
}
