"use client";
import { useState } from "react";
import { useTheme } from "../component/ThemeContext";
const Form = () => {
  const { form, setForm } = useTheme();
  const [inputimage, setInputImage] = useState([]);
  const [data, setData] = useState({
    name: "",
    youUrl: "",
    form2: "",
    form3: "hidden",
  });

  const onChangeImage1 = (e) => {
    const url = e.target.value;
    const id = url.split("/")[5];
    setInputImage((prevImage1) => [...prevImage1, id]);
  };

  const onChangeName = (e) => {
    setData({
      ...data,
      name: e.target.value,
    });
  };

  const onSubmitImage1 = () => {
    localStorage.setItem("output", JSON.stringify(inputimage));
    localStorage.setItem("name", data.name);
    localStorage.setItem("youtubeUrl", data.youUrl);
  };

  const convertYouTubeLink = (e) => {
    const url = e.target.value;
    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1].split("?")[0];
      setData({
        ...data,
        youUrl: videoId,
      });
    }
  };

  return (
    <form
      onSubmit={onSubmitImage1}
      className={`z-[20] font-Line absolute flex flex-col justify-center gap-4 items-center bg-[#255d6e] w-[300px] h-[420px] max-[320px]:scale-[0.85] p-2 pt-[30px] ${form} rounded-2xl`}
    >
      <div
        onClick={() => setForm("hidden")}
        className=" absolute cursor-pointer right-5 top-5 text-[#ffff]"
      >
        Close
      </div>
      <div
        className={`flex flex-col justify-center gap-4 items-center p-2 rounded-2xl w-[100%] ${data.form2}`}
      >
        <input
          type="text"
          onChange={onChangeName}
          className=" rounded-2xl w-[70%] p-2  outline-none"
          placeholder="Name"
        ></input>
        <input
          type="text"
          onChange={onChangeImage1}
          className=" rounded-2xl w-[70%] p-2  outline-none"
          placeholder="Link from Google Drive"
        ></input>
        <input
          type="text"
          onChange={onChangeImage1}
          className=" rounded-2xl w-[70%] p-2  outline-none"
          placeholder="Link from Google Drive"
        ></input>
        <input
          type="text"
          onChange={onChangeImage1}
          className=" rounded-2xl w-[70%] p-2  outline-none"
          placeholder="Link from Google Drive"
        ></input>
        <input
          type="text"
          onChange={onChangeImage1}
          className=" rounded-2xl w-[70%] p-2  outline-none"
          placeholder="Link from Google Drive"
        ></input>
        <div
          onClick={() => {
            setData({ ...data, form2: "hidden", form3: "" });
          }}
          className="rounded-lg bg-[#ff6262] p-1 mt-4 cursor-pointer"
        >
          Next
        </div>
      </div>
      <div
        className={`flex flex-col justify-center gap-4 items-center p-2 rounded-2xl w-[100%] ${data.form3}`}
      >
        <input
          type="text"
          onChange={onChangeImage1}
          className=" rounded-2xl w-[70%] p-2  outline-none"
          placeholder="Link from Google Drive"
        ></input>
        <input
          type="text"
          onChange={onChangeImage1}
          className=" rounded-2xl w-[70%] p-2  outline-none"
          placeholder="Link from Google Drive"
        ></input>
        <input
          type="text"
          onChange={onChangeImage1}
          className=" rounded-2xl w-[70%] p-2  outline-none"
          placeholder="Link from Google Drive"
        ></input>
        <input
          type="text"
          onChange={onChangeImage1}
          className=" rounded-2xl w-[70%] p-2  outline-none"
          placeholder="Link from Google Drive"
        ></input>
        <input
          type="text"
          onChange={convertYouTubeLink}
          className=" rounded-2xl w-[70%] p-2  outline-none"
          placeholder="Link from Youtube"
        ></input>
        <button type="submit" className=" rounded-lg bg-slate-500 p-1 mt-4">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
