'use client';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const BoxImage = () => {
  const [goneImages, setGoneImages] = useState([]);
  const [outputimaga, setOutputImage] = useState([]);

  const handleDragEnd = (index, offsetX) => {
    if (Math.abs(offsetX) > 150) {
      setGoneImages((prev) => [...prev, index]); // เพิ่ม index ของรูปที่ถูกลากไปแล้ว
    }
  };

  useEffect(() => {
    const storedOutput = localStorage.getItem("output");
    if (storedOutput) {
      setOutputImage(JSON.parse(storedOutput));
    }
  }, []);
  return (
    <div className="w-full h-full relative flex justify-center items-center">
  {outputimaga.length > 0 &&
    outputimaga
      .slice()
      .reverse()
      .map(
        (imageId, index) =>
          !goneImages.includes(index) && ( // ตรวจสอบว่าไม่อยู่ในรายชื่อรูปที่หายไป
            <motion.div
              key={index}
              drag="x"
              dragConstraints={{ left: -200, right: 200 }}
              onDragEnd={(event, info) =>
                handleDragEnd(index, info.offset.x)
              }
              initial={{ opacity: 1 }}
              animate={{
                opacity: goneImages.includes(index) ? 0 : 1,
                x: goneImages.includes(index) ? 300 : 0,
              }}
              transition={{ duration: 0.5 }}
              className="absolute w-[200px] h-[200px] cursor-grab flex justify-center items-center"
              style={{
                pointerEvents: goneImages.includes(index) ? "none" : "auto", // ป้องกันการลากเมื่อรูปหายไป
                zIndex: goneImages.includes(index) ? -1 : 1, // ให้รูปที่หายไปอยู่ด้านหลัง
              }}
            >
              <motion.div
                style={{ pointerEvents: "none" }} // ป้องกันไม่ให้สามารถคลิกที่รูปได้ขณะลาก
                className="flex justify-center items-center relative"
              >
                <Image
                  src={`https://drive.google.com/uc?export=view&id=${imageId}`}
                  width={200}
                  height={200}
                  alt={`Description ${index}`}
                  className="rounded-lg"
                />
              </motion.div>
            </motion.div>
          )
      )}
</div>

  );
};
export default BoxImage;
