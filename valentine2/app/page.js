"use client";
import { toBase64 } from "@/lib/base64";
import { extractGDriveId } from "@/lib/img";
import { useState } from "react";

export default function Home() {
  const input = `
    w-full rounded-lg border border-pink-200 px-3 py-2 text-sm
    placeholder:text-pink-300 outline-none
    transition
    focus:border-pink-400 focus:ring-2 focus:ring-pink-200
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
    setData((prev) => ({
      ...prev,
      [e]: value,
    }));
  };

  const onSetValueImg = (value, e) => {
    const id = extractGDriveId(value);
    setData((prev) => ({
      ...prev,
      [e]: id,
    }));
  };

  const onDone = () => {
    const imageKeys = ["main_img", "img1", "img2"];

    for (const [key, value] of Object.entries(data)) {
      if (imageKeys.includes(key)) {
        if (!value) {
          alert(`${key} is required or Google Drive URL is invalid`);
          return;
        }
        continue;
      }

      if (!value.trim()) {
        alert(`${key} is required`);
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
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-linear-to-br from-pink-50 to-rose-100">
      <div className="w-full max-w-md px-4">
        <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-pink-200">
          <h1 className="text-xl font-semibold text-pink-700 mb-1">
            💌 Create View URL
          </h1>
          <p className="text-sm text-pink-400 mb-5">
            Fill in the details to generate a shareable link
          </p>

          <div className="flex flex-col gap-3">
            <input
              maxLength={20}
              placeholder="From name"
              onChange={(e) => onSetValue(e.target.value, "from_name")}
              className={input}
            />
            <input
              maxLength={20}
              placeholder="To name"
              onChange={(e) => onSetValue(e.target.value, "to_name")}
              className={input}
            />
            <input
              placeholder="Main image URL (Google Drive)"
              onChange={(e) => onSetValueImg(e.target.value, "main_img")}
              className={input}
            />
            <input
              placeholder="Image URL 1 (Google Drive)"
              onChange={(e) => onSetValueImg(e.target.value, "img1")}
              className={input}
            />
            <input
              placeholder="Image URL 2 (Google Drive)"
              onChange={(e) => onSetValueImg(e.target.value, "img2")}
              className={input}
            />
            <textarea
              rows={3}
              maxLength={200}
              placeholder="Your message…"
              onChange={(e) => onSetValue(e.target.value, "desc")}
              className={input + " resize-none"}
            />
          </div>

          <button
            onClick={onDone}
            className="mt-6 w-full rounded-full bg-pink-600 py-2.5 text-sm font-medium text-white shadow-md transition hover:bg-pink-700 active:scale-95"
          >
            ✨ Generate URL
          </button>

          {/* RESULT */}
          {genUrl && (
            <div className="mt-4 space-y-2">
              <input
                value={genUrl}
                readOnly
                onFocus={(e) => e.target.select()}
                className={input}
              />
              <button
                onClick={onCopy}
                className="w-full rounded-full border border-pink-300 py-2 text-sm text-pink-600 hover:bg-pink-50 transition"
              >
                {copied ? "✅ Copied!" : "📋 Copy link"}
              </button>
            </div>
          )}
        </div>
      </div>

      <footer className="py-4 text-sm text-gray-500">
        Built with 💖 by{" "}
        <a
          href="https://www.tiktok.com/@buildifyx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black underline hover:opacity-70"
        >
          BuildifyX
        </a>
      </footer>
    </main>
  );
}
