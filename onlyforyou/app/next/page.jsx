"use client";
import { useEffect, useState } from "react";
import BoxImage from "../component/boximage";
const Page = () => {
  const [youUrl, setYouUrl] = useState("");
  useEffect(() => {
    const youdata = localStorage.getItem("youtubeUrl");
    setYouUrl(youdata);
  }, []);
  return (
    <div className=" relative font-Line flex flex-col justify-center items-center w-screen h-screen overflow-hidden">
      <iframe
        width="0"
        height="0"
        src={`https://www.youtube.com/embed/${youUrl}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youUrl}&playsinline=1&modestbranding=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className=" animate-opacity absolute flex justify-center items-center w-[500px] h-[300px] overflow-hidden bg-[#ffffff] rounded-2xl max-[600px]:scale-[0.55] min-[1000px]:scale-[1.2] duration-500 ease-in-out">
        <div className="z-[10] absolute w-[500px] h-[500px] bg-[#bda9c3] rounded-2xl rotate-45 right-[420px]"></div>
        <div className="z-[10] absolute w-[500px] h-[500px] bg-[#cbb6d1] rounded-2xl rotate-45 left-[420px]"></div>
        <div className="z-[11] absolute w-[600px] h-[600px] bg-[#c4bbc6] rounded-2xl rotate-45  bottom-[-500px]"></div>
      </div>
      <div className="z-[12] min-[100px]:scale-[1.2]">
        <BoxImage />
      </div>
    </div>
  );
};
export default Page;
