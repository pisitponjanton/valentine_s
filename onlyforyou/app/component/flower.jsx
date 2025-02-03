"use client";
const Flower = () => {
  return (
    <div className="relative">
      <div className="absolute bg-[#5c3d3d] w-[15px] h-[250px] animate-stalk rounded-3xl origin-bottom"></div>
      <div className="absolute bg-[#f54d4d] w-[100px] h-[100px] rounded-full right-[5px] top-[-25px] animate-flower1 opacity-0"></div>
      <div className="absolute bg-[#f54d4d] w-[100px] h-[100px] rounded-full right-[-57px] top-[-90px] animate-flower1 opacity-0"></div>
      <div className="absolute bg-[#f54d4d] w-[100px] h-[100px] rounded-full left-[20px] top-[-25px] animate-flower1 opacity-0"></div>
      <div className="absolute bg-[#f54d4d] w-[100px] h-[100px] rounded-full right-[-57px] top-[30px] animate-flower2 opacity-0"></div>
      <div className="absolute bg-[#bd3131] w-[60px] h-[60px] rounded-full left-[-20px] top-[-10px] animate-flower opacity-0"></div>
    </div>
  );
};
export default Flower;
