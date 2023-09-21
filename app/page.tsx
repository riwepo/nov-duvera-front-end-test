"use client";

import { useState } from "react";

import DynamicNumber from "./components/DynamicNumber";

import useWebSocketNumberListener from "./hooks/useWebSocketNumberListener";

export default function Home() {
  const [currentNumber, setCurrentNumber] = useState<number>(0);
  const newNumberHandler = (newNumber: number) => {
    setCurrentNumber(newNumber);
  };
  useWebSocketNumberListener("ws://localhost:8080", newNumberHandler);

  return (
    <div className="bg-white h-screen grid grid-rows-[1fr_auto_1fr] grid-cols-[1fr_auto_1fr]">
      <div className="row-start-2 col-start-2 bg-transparent flex flex-col items-center">
        <h1 className="text-black py-10 font-bold text-xl">QUADRA TEST</h1>
        <div className="bg-gray-100 rounded-md p-10 font-normal text-2xl">
          <DynamicNumber number={currentNumber} colorClass="text-green-500" />
        </div>
      </div>
    </div>
  );
}
