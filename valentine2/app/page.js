"use client";
import { toBase64 } from "@/lib/base64";
import { extractGDriveId } from "@/lib/img";
import { useState } from "react";

export default function Home() {
  const input = `
    w-full rounded-md border border-pink-200 px-3 py-2 text-sm
    placeholder:text-pink-300 outline-none transition
    focus:border-pink-400 focus:ring-2 focus:ring-pink-200
    bg-white
  `;

  const [data, setData] = useState({
    from_name: "",
    to_name: "",
    main_img: "",
    img1: "",
    img2: "",
    desc: "",
  });

  const [genUrl, setGenUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const onSetValue = (value, e) => {
    setData((prev) => ({ ...prev, [e]: value }));
  };

  const onSetValueImg = (value, e) => {
    const id = extractGDriveId(value);
    setData((prev) => ({ ...prev, [e]: id }));
  };

  const onDone = () => {
    const imageKeys = ["main_img", "img1", "img2"];

    for (const [key, value] of Object.entries(data)) {
      if (imageKeys.includes(key)) {
        if (!value) {
          alert("Please provide a valid Google Drive image link.");
          return;
        }
        continue;
      }
      if (!value.trim()) {
        alert("Please fill in all required fields.");
        return;
      }
    }

    const base64 = toBase64(JSON.stringify(data));
    const url = `${window.location.origin}/views?d=${base64}`;
    setGenUrl(url);
    setCopied(false);
  };

  const onCopy = async () => {
    await navigator.clipboard.writeText(genUrl);
    setCopied(true);
  };

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-linear-to-br from-pink-50 to-rose-100 px-4">
      <div className="w-full max-w-md">
        <div className="rounded-xl bg-[#fffdfb] p-6 shadow-lg ring-1 ring-pink-200">
          {/* HEADER */}
          <div className="mb-6 text-center">
            <p className="text-[11px] tracking-widest text-pink-400 mb-2">
              CREATE LETTER
            </p>
            <h1 className="text-xl font-medium text-pink-700">
              Letter details
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              Fill in the information below
            </p>
          </div>

          {/* FORM */}
          <div className="flex flex-col gap-3">
            <input
              maxLength={20}
              placeholder="From (max 20 characters)"
              onChange={(e) => onSetValue(e.target.value, "from_name")}
              className={input}
            />
            <input
              maxLength={20}
              placeholder="To (max 20 characters)"
              onChange={(e) => onSetValue(e.target.value, "to_name")}
              className={input}
            />
            <input
              placeholder="Image 1 (Google Drive URL)"
              onChange={(e) => onSetValueImg(e.target.value, "main_img")}
              className={input}
            />
            <input
              placeholder="Image 2 (Google Drive URL)"
              onChange={(e) => onSetValueImg(e.target.value, "img1")}
              className={input}
            />
            <input
              placeholder="Image 3 (Google Drive URL)"
              onChange={(e) => onSetValueImg(e.target.value, "img2")}
              className={input}
            />
            <textarea
              rows={3}
              maxLength={200}
              placeholder="Message (max 200 characters)"
              onChange={(e) => onSetValue(e.target.value, "desc")}
              className={input + " resize-none"}
            />
          </div>

          {/* ACTION */}
          <button
            onClick={onDone}
            className="mt-6 w-full rounded-full border border-pink-400 py-2.5 text-sm text-pink-700 transition
                       hover:bg-pink-50 active:scale-95"
          >
            Generate link
          </button>

          {/* RESULT */}
          {genUrl && (
            <div className="mt-5 space-y-2">
              <input
                value={genUrl}
                readOnly
                onFocus={(e) => e.target.select()}
                className={input}
              />
              <button
                onClick={onCopy}
                className="w-full rounded-full border border-pink-300 py-2 text-sm text-pink-700 transition
                           hover:bg-pink-50"
              >
                {copied ? "Link copied" : "Copy link"}
              </button>
            </div>
          )}
        </div>
      </div>

      <footer className="py-4 text-xs text-gray-500">
        Built with care by{" "}
        <a
          href="https://www.tiktok.com/@buildifyx"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-gray-700 hover:opacity-70"
        >
          BuildifyX
        </a>
      </footer>
    </main>
  );
}
