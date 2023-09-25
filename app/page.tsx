"use client";

import { useAppDispatch, useAppSelector } from "./redux/hooks";

import TrendingNumber from "./features/trending-number/TrendingNumber";

import { useEffect } from "react";

export default function Home() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch({ type: "socket/connect" });
    return () => {
      dispatch({ type: "socket/disconnect" });
    };
  }, []);
  const trendingNumber = useAppSelector((state) => state.trendingNumber);

  return (
    <div className="bg-black h-screen grid grid-rows-[1fr_auto_1fr] grid-cols-[1fr_auto_1fr]">
      <div className="row-start-2 col-start-2 bg-transparent flex flex-col items-center">
        <h1 className="text-white py-10 font-bold text-xl">QUADRA TEST</h1>
        <div className="bg-gray-500 rounded-md p-10 font-normal text-2xl">
          <TrendingNumber
            older={trendingNumber.prevNumber}
            newer={trendingNumber.currNumber}
            className="font-mono"
          />
        </div>
      </div>
    </div>
  );
}
