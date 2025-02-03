"use client";
import { useState } from "react";
import { useTheme } from "./component/ThemeContext";
import Form from "./component/form";
import Link from "next/link";
export default function Home() {
  const { setForm } = useTheme();
  const [data, setdata] = useState({
    bg: "",
    text: "",
    heart:"opacity-0 z-[-1]",
  });
  return (
    <div
      className={` ${data.bg} font-Line relative flex flex-col justify-center items-center h-screen w-screen overflow-hidden duration-500 ease-in-out `}
    >
      <div className={`${data.heart} w-[100px] h-[100px] bg-hearts bg-cover bg-center bg-no-repeat absolute duration-1000 right-[50px] ease-in-out animate-up max-[767px]:hidden`}></div>
      <div className={`${data.heart} w-[100px] h-[100px] bg-hearts bg-cover bg-center bg-no-repeat  absolute duration-1000 left-[50px] ease-in-out animate-up max-[767px]:hidden`}></div>
      <div className={`${data.heart} w-[100px] h-[100px] bg-hearts bg-cover bg-center bg-no-repeat  absolute duration-1000 top-[50px] ease-in-out animate-up`}></div>
      <div className={`${data.heart} w-[100px] h-[100px] bg-hearts bg-cover bg-center bg-no-repeat  absolute duration-1000 bottom-[50px] ease-in-out animate-up`}></div>
      <Form />
      <h1 className="text-[80px] text-[#ffff] max-[425px]:text-[50px]">
        Valenthuy
      </h1>
      <Link
        href={"/start"}
        className="bg-[#b06767] py-2 px-4 rounded-2xl text-[20px] hover:scale-105 duration-500 hover:text-[#ffff]"
        onMouseMove={() => setdata({heart:"opacity-1",text:"text-[#fff]",bg:"bg-[#5c0629]"})}
        onMouseLeave={() => setdata({heart:"opacity-0 z-[-1]",text:"",bg:""})}
      >
        Start
      </Link>
      <button
        onClick={() => setForm()}
        className={`${data.text} absolute top-5 right-5 text-[20px] hover:scale-105 duration-500 hover:text-[#ffff]`}
      >
        Setting
      </button>
      <div className={` ${data.text} text-[16px] font-Line absolute bottom-3  hover:text-[#ffff] duration-300 ease-linear cursor-default `}>
        Created by
        <Link
          href={"https://github.com/pisitponjanton"}
          className="hover:text-[#d45151]"
          target="_bank"
        >
          {"Lone's"}
        </Link>
        IT KMITL
      </div>
    </div>
  );
}
