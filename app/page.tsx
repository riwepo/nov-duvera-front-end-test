"use client";

import { useState } from "react";

import TrendingNumber from "./components/TrendingNumber";

import useWebSocketNumberListener from "./hooks/useWebSocketNumberListener";

import config from "../config.json";

const webSocketUrl = config.SERVER_URL;

export default function Home() {
  // store the older number at index 1
  // store the newer number at index 0
  const [currNumbers, setCurrNumbers] = useState<(number | null)[]>([
    null,
    null,
  ]);
  const newNumberHandler = (newNumber: number) => {
    setCurrNumbers((state) => {
      // create a new array with the numbers shuffled
      const newState = [newNumber, state[0]];
      return newState;
    });
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
