'use client'
import { useAppSelector } from "@/store";
import { SimpleWidget } from "./SimpleWidget"
import { IoCartOutline } from "react-icons/io5";

export const WidgetsGrid = () => {
  const inCart = useAppSelector((state) => state.counter.count);
  return (
    <div className="flex flex-wrap items-center justify-center p-2">
      <SimpleWidget
        title={`${inCart}`}
        href="/dashboard/counter"
        // subTitle="productos agregados"
        label="Contador"
        icon={<IoCartOutline size={40} className="text-blue-600"  />}
      />
    </div>
  )
}
