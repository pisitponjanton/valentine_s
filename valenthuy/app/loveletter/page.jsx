"use client";
import { useEffect, useState } from "react";
import BoxImage from "../component/boximage";
import Link from "next/link";
const Page = () => {
  const [data, setData] = useState({
    isPlaying: false,
    youUrl: "",
    page1: "opacity-0 z-[-10] top-0 translate-y-[-100px]",
    page2: "",
    page3: "opacity-0 z-[-11] translate-y-[100px]",
    buttonback:"opacity-0",
    feelings:""
  });

  useEffect(() => {
    const youdata = localStorage.getItem("youtubeUrl");
    const feeling = localStorage.getItem("feelings");
    setData({ ...data, youUrl: youdata ,feelings:feeling});
  }, []);

  const onClickpage = () => {
    setData({
      ...data,
      page1: "",
      page2: "opacity-0 z-[-10]",
      page3: "opacity-1 z-[20]",
      isPlaying: true,
      buttonback:"opacity-1",
    });
  };
  return (
    <div className={`duration-700 ease-in-out relative font-Line flex flex-col justify-center items-center w-screen h-screen overflow-hidden`}>
      {data.isPlaying && (
        <iframe
          width="0"
          height="0"
          src={`https://www.youtube.com/embed/${data.youUrl}?autoplay=1&mute=0&controls=0&loop=1&playlist=${data.youUrl}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
      <Link href={"/"} className={`${data.buttonback} absolute top-3 right-3 hover:scale-110 hover:text-[#ffff] duration-700 ease-in-out`}>Back</Link>
      <div
        onClick={onClickpage}
        className={`${data.page2} cursor-pointer z-[11] drop-shadow-2xl hover:shadow-2xl hover:shadow-[#fbc9d5] hover:skew-y-[2deg] animate-opacity absolute flex justify-center items-center w-[580px] h-[350px] overflow-hidden bg-[#fbc9d5] rounded-2xl max-[600px]:scale-[0.55] max-[320px]:scale-[0.5] duration-700 ease-in-out`}
      >
        <div className=" absolute w-[600px] h-[600px] rotate-45 bg-[#fbc9d5] border-[10px] left-[-500px] top-[-120px] rounded-2xl"></div>
        <div className=" absolute w-[600px] h-[600px] rotate-45 bg-[#fbc9d5] border-[10px] right-[-500px] top-[-120px] rounded-2xl"></div>
        <div className=" absolute w-[600px] h-[600px] rotate-45 bg-[#fbc9d5] border-[10px] left-[-8px] top-[200px] rounded-2xl"></div>
        <div className=" absolute w-[600px] h-[600px] rotate-45 bg-[#fbc9d5] border-[10px] left-[-8px] top-[-450px] rounded-2xl"></div>
        <div className=" absolute text-[#256265265] text-center p-5 text-[16px]">{data.feelings}</div>
      </div>

      <div
        className={`${data.page1} z-[10] duration-700 absolute flex justify-center items-center w-[580px] h-[700px] rounded-2xl overflow-hidden max-[600px]:scale-[0.55] max-[320px]:scale-[0.5] drop-shadow-2xl `}
      >
        <div className=" absolute w-[600px] h-[600px] rotate-45 bg-[#fbc9d5] border-[10px] top-[196px] rounded-2xl "></div>
        <div className=" absolute w-full h-[350px] bg-[#fbc9d5] bottom-0 overflow-hidden rounded-2xl">
          <div className=" absolute w-[600px] h-[600px] rotate-45 bg-[#fbc9d5] border-[10px] left-[-500px] top-[-120px] rounded-2xl"></div>
          <div className=" absolute w-[600px] h-[600px] rotate-45 bg-[#fbc9d5] border-[10px] right-[-500px] top-[-120px] rounded-2xl"></div>
          <div className=" absolute w-[600px] h-[600px] rotate-45 bg-[#fbc9d5] border-[10px] left-[-8px] top-[200px] rounded-2xl"></div>
        </div>
      </div>
      <div
        className={`${data.page3} duration-[1s] ease-in-out max-[600px]:scale-[1] min-[600px]:scale-[1.5]`}
      >
        <BoxImage />
      </div>
    </div>
  );
};
export default Page;
