"use client";

import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "./redux/hooks";

import TrendingNumber from "./features/trending-number/TrendingNumber";

export default function Home() {
  // get a hold of the strongly typed redux dispatch function
  const dispatch = useAppDispatch();

  // here we useEffect with dependencies of an empty array
  // which means it will run once when this component is mounted
  // it will cause the redux middleware to connect to the socket
  useEffect(() => {
    dispatch({ type: "socket/connect" });

    // the return value is a function called to cleanup when the component is unmounted
    // here we disconnect the socket
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
