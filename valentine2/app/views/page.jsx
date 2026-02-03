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
        This letter couldn't be opened 💌
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
        <div className="relative rounded-xl bg-[#fffdfb] p-6 shadow-lg ring-1 ring-pink-200">
          {/* CLOSED */}
          {!opened && (
            <div className="flex items-center justify-center h-52">
              <div className="text-center">
                <p className="text-[11px] tracking-widest text-pink-400 mb-4">
                  A LETTER
                </p>

                <h1 className="text-2xl font-medium text-pink-700 mb-8">
                  {data.to_name}
                </h1>

                <button
                  onClick={() => setOpened(true)}
                  className="rounded-full border border-pink-300 px-6 py-2 text-sm text-pink-700 transition
                         hover:bg-pink-50 active:scale-95"
                >
                  Open letter
                </button>

                <p className="mt-6 text-xs text-gray-400">
                  from {data.from_name}
                </p>
              </div>
            </div>
          )}

          {/* OPENED */}
          {opened && (
            <div className="flex flex-col gap-5">
              {/* HEADER */}
              <div className="border-b border-pink-200 pb-3 text-sm text-pink-700">
                <p>
                  <span className="font-medium">From:</span> {data.from_name}
                </p>
                <p>
                  <span className="font-medium">To:</span> {data.to_name}
                </p>
              </div>

              {/* CONTENT */}
              <div className="relative w-full h-64 rounded-lg border border-pink-200 bg-white flex items-center justify-center overflow-hidden">
                {!isDescription ? (
                  <Image
                    src={images[index]}
                    alt="memory"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                ) : (
                  <p className="px-4 text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
                    {data.desc}
                  </p>
                )}
              </div>

              {/* CONTROLS */}
              <div className="flex items-center justify-between text-sm text-pink-700">
                <button
                  onClick={() => setIndex((i) => Math.max(i - 1, 0))}
                  disabled={index === 0}
                  className="rounded-md border border-pink-300 px-4 py-1.5 transition
                         hover:bg-pink-50 disabled:opacity-40"
                >
                  Previous
                </button>

                <span className="text-gray-400">
                  {Math.min(index + 1, images.length + 1)} / {images.length + 1}
                </span>

                <button
                  onClick={() => setIndex((i) => i + 1)}
                  className="rounded-md border border-pink-300 px-4 py-1.5 transition
                         hover:bg-pink-50"
                >
                  Next
                </button>
              </div>
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
          className="text-gray-700 underline hover:opacity-70"
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
