"use client";
import { useEffect, useState } from "react";
import BoxImage from "../component/boximage";
const Page = () => {
  const [youUrl, setYouUrl] = useState("");
  useEffect(() => {
    const youdata = localStorage.getItem("youtubeUrl");
    setYouUrl(youdata);
  }, []);

  const [page1, setpage1] = useState("opacity-0 z-[-10] top-0 translate-y-[-100px]");
  const [page2, setpage2] = useState("");
  const [page3, setpage3] = useState("opacity-0 z-[-11] translate-y-[100px]");

  const onClickpage = () => {
    setpage1("");
    setpage2("opacity-0 z-[-10]");
    setpage3("opacity-1 z-[20]");
  };
  return (
    <div className=" relative font-Line flex flex-col justify-center items-center w-screen h-screen overflow-hidden">
      <iframe
        width="0"
        height="0"
        src={`https://www.youtube.com/embed/${youUrl}?autoplay=1&mute=0&controls=0&loop=1&playlist=${youUrl}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <div
        className={`${page2} z-[11] drop-shadow-2xl hover:shadow-2xl hover:shadow-white hover:skew-y-[1deg] animate-opacity absolute flex justify-center items-center w-[580px] h-[350px] overflow-hidden bg-[#ffffff] rounded-2xl max-[600px]:scale-[0.55] max-[320px]:scale-[0.5] duration-700 ease-in-out`}
      >
        <div
          onClick={onClickpage}
          className="text-[80px] cursor-pointer drop-shadow-2xl "
        >
          💖
        </div>
      </div>

      <div className={`${page1} z-[10] duration-700 absolute flex justify-center items-center w-[580px] h-[700px] rounded-2xl overflow-hidden max-[600px]:scale-[0.55] max-[320px]:scale-[0.5] drop-shadow-2xl `}>
        <div className=" absolute w-[600px] h-[600px] rotate-45 bg-[#fff] top-[196px] rounded-2xl "></div>
        <div className=" absolute w-full h-[350px] bg-[#ffff] bottom-0 overflow-hidden rounded-2xl">
          <div className=" absolute w-[600px] h-[600px] rotate-45 bg-[#b390b5] left-[-500px] top-[-120px] rounded-2xl"></div>
          <div className=" absolute w-[600px] h-[600px] rotate-45 bg-[#756677] right-[-500px] top-[-120px] rounded-2xl"></div>
          <div className=" absolute w-[600px] h-[600px] rotate-45 bg-[#826682] left-[-8px] top-[200px] rounded-2xl"></div>
        </div>
      </div>
      {/* <div className="w-[100px] h-[100px] bg-black rounded-full animate-up z-[10] absolute"></div>
      <div className="w-[100px] h-[100px] bg-black rounded-full animate-up z-[10] absolute left-[500px]"></div> */}

      <div
        className={`${page3} min-[1000px]:scale-[1.2] duration-700 ease-in-out max-[600px]:scale-[1]`}
      >
        <BoxImage />
      </div>
    </div>
  );
};
export default Page;
