"use client";

import { useState } from "react";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { fromBase64 } from "@/lib/base64";
import { getGDriveViewUrl } from "@/lib/img";

function ViewClient() {
  const searchParams = useSearchParams();
  const encoded = searchParams.get("d");

  if (!encoded)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Something’s missing 💔
      </div>
    );

  let data;
  try {
    data = JSON.parse(fromBase64(encoded));
  } catch {
    return (
      <div className="min-h-screen flex items-center justify-center">
        This letter couldn’t be opened 💌
      </div>
    );
  }

  const images = [data.main_img, data.img1, data.img2]
    .filter(Boolean)
    .map(getGDriveViewUrl);

  const [opened, setOpened] = useState(false);
  const [index, setIndex] = useState(0);

  const isDescription = index >= images.length;

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 bg-linear-to-br from-pink-50 to-rose-100">
      <div className="w-full max-w-md">
        <div className="relative rounded-2xl bg-white p-6 shadow-xl ring-1 ring-pink-200">
          {/* CLOSED */}
          {!opened && (
            <div className="text-center space-y-3">
              <p className="text-xs uppercase tracking-widest text-pink-400">
                For you
              </p>
              <h1 className="text-2xl font-semibold text-pink-700">
                {data.to_name} 💖
              </h1>

              <button
                onClick={() => setOpened(true)}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-pink-600 px-6 py-2.5 text-sm font-medium text-white shadow-md transition hover:bg-pink-700 active:scale-95"
              >
                💌 Open my letter
              </button>
            </div>
          )}

          {/* OPENED */}
          {opened && (
            <div className="flex flex-col gap-4">
              {/* HEADER */}
              <div className="rounded-lg bg-pink-50 p-3 text-sm text-pink-700">
                <p>
                  <b>With love,</b> {data.from_name}
                </p>
                <p>
                  <b>For:</b> {data.to_name}
                </p>
              </div>

              {/* CONTENT */}
              <div className="relative w-full h-64 rounded-xl border border-pink-200 bg-white flex items-center justify-center overflow-hidden shadow-sm">
                {!isDescription ? (
                  <Image
                    src={images[index]}
                    alt="memory"
                    fill
                    className="object-contain transition-opacity"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                ) : (
                  <p className="px-4 text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
                    {data.desc}
                  </p>
                )}
              </div>

              {/* CONTROLS */}
              <div className="flex items-center justify-between text-sm">
                <button
                  onClick={() => setIndex((i) => Math.max(i - 1, 0))}
                  disabled={index === 0}
                  className="rounded-full border border-pink-300 px-4 py-1.5 text-pink-600 transition hover:bg-pink-50 disabled:opacity-40 disabled:hover:bg-transparent"
                >
                  ◀ Back
                </button>

                <span className="text-gray-400">
                  {Math.min(index + 1, images.length + 1)} / {images.length + 1}
                </span>

                <button
                  onClick={() => setIndex((i) => i + 1)}
                  className="rounded-full border border-pink-300 px-4 py-1.5 text-pink-600 transition hover:bg-pink-50"
                >
                  Next ▶
                </button>
              </div>
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
    </div>
  );
}

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading your letter… 💌
        </div>
      }
    >
      <ViewClient />
    </Suspense>
  );
}
