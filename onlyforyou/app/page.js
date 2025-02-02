"use client";
import { useTheme } from "./component/ThemeContext";
import Form from "./component/form";
import Link from "next/link";
export default function Home() {
  const { setForm } = useTheme();

  return (
    <div className="font-Line relative flex flex-col justify-center items-center h-screen w-screen overflow-hidden bg-[#ea50fb]">
      <Form />
      <h1 className="text-[80px] text-[#ffff] max-[425px]:text-[50px]">
        Valenthuy
      </h1>
      <Link
        href={"/start"}
        className="bg-[#b06767] py-2 px-4 rounded-2xl text-[20px] hover:scale-105 duration-500 hover:text-[#ffff]"
      >
        Start
      </Link>
      <button
        onClick={() => setForm()}
        className="absolute top-5 right-5 text-[20px] hover:scale-105 duration-500 hover:text-[#ffff]"
      >
        Setting
      </button>
    </div>
  );
}
