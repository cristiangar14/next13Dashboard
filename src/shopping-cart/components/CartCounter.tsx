'use client'
import { useState } from "react";
interface props {
  value: number;
}
export const CartCounter = ({ value = 0 }: props) => {
  const [count, setCount] = useState(value);

  const handleCount = (type: string) => {
    if (type === 'substrac' && count > 0) {
      setCount(count - 1);
    } 

    if (type === 'sum') {
      setCount(count + 1);
    }
  }
  return (
    <>
    <span className="text-9xl">{count}</span>
      <div className="flex">
        <button 
         onClick={() => handleCount('sum')}
        className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">+1</button>
        <button 
          onClick={() => handleCount('substrac')}
        className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] ">-1</button>
      </div>
    </>
  )
}
