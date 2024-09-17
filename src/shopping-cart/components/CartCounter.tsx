'use client'
import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounterState, substractOne } from "@/store/counter/counterSlice";
import { useEffect } from "react";


interface CounterResponse {
  method: string;
  count: number;
};

const getApiCounter = async(): Promise<CounterResponse> =>{
  const data = await fetch('/api/counter').then( res => res.json())
  return data
}

export const CartCounter = () => {
  const count = useAppSelector((state) => state.counter.count);
  const dispach = useAppDispatch();

  // useEffect(() => {
  //   dispach( initCounterState(value) )
  // }, [dispach, value]);

  useEffect(() => {
    getApiCounter().then( ({ count }) => dispach( initCounterState(count) ))
  }, [dispach]);

  return (
    <>
    <span className="text-9xl">{count}</span>
      <div className="flex">
        <button 
         onClick={() => dispach( addOne() )}
        className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">+1</button>
        <button 
          onClick={() =>dispach( substractOne() )}
        className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] ">-1</button>
      </div>
    </>
  )
}
