"use client";
import { useEffect, useState } from "react";
import Flower from "../component/flower";

const Page = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const namedata = localStorage.getItem("name");
    setName(namedata);

    const timer = setTimeout(() => {
        window.location.href = "/next";
      }, 7300);
  
      return () => clearTimeout(timer);

  }, []);
  return (
    <div className="relative flex flex-col justify-center items-center font-Line overflow-hidden w-screen h-screen">
      <div className="absolute">
        <div className=" translate-x-[400px] max-[1080px]:hidden">
          <Flower />
        </div>
        <Flower />
        <div className=" translate-x-[-400px] max-[1080px]:hidden">
          <Flower />
        </div>
      </div>
      <h1 className="text-[70px] relative top-[-200px] max-[425px]:text-[30px]">
        {name}
      </h1>
    </div>
  );
};
export default Page;
