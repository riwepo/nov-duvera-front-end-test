"use client";

import { useState, useEffect } from "react";

import DynamicNumber from "./components/DynamicNumber";

import {
  addEventListeners,
  removeEventListeners,
} from "./lib/web-socket-utils";

const isBrowser = typeof window !== "undefined";

export default function Home() {
  const [wsInstance] = useState<WebSocket | null>(() =>
    isBrowser ? new WebSocket("ws://localhost:8080") : null
  );

  useEffect(() => {
    addEventListeners(wsInstance);
    return () => {
      if (wsInstance) {
        removeEventListeners(wsInstance);
      }
    };
  }, []);

  return (
    <div className="bg-white h-screen grid grid-rows-[1fr_auto_1fr] grid-cols-[1fr_auto_1fr]">
      <div className="row-start-2 col-start-2 bg-transparent flex flex-col items-center">
        <h1 className="text-black py-10 font-bold text-xl">QUADRA TEST</h1>
        <div className="bg-gray-100 rounded-md p-10 font-normal text-2xl">
          <DynamicNumber number={6515646} colorClass="text-green-500" />
        </div>
      </div>
    </div>
  );
}
