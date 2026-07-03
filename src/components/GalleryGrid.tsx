"use client";

import { useCallback, useEffect, useState } from "react";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function GalleryGrid({ images }: { images: string[] }) {
  const [visible, setVisible] = useState<string[]>(() =>
    shuffle(images).slice(0, 24)
  );
  const [gridOpacity, setGridOpacity] = useState(1);

  // Lightbox state
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Auto-cycle grid every 10s
  useEffect(() => {
    const timer = setInterval(() => {
      if (lightboxIndex !== null) return; // pause cycling while lightbox is open
      setGridOpacity(0);
      setTimeout(() => {
        setVisible(shuffle(images).slice(0, 24));
        setGridOpacity(1);
      }, 600);
    }, 10000);
    return () => clearInterval(timer);
  }, [images, lightboxIndex]);

  // Keyboard navigation for lightbox
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowRight")
        setLightboxIndex((i) => (i! + 1) % visible.length);
      if (e.key === "ArrowLeft")
        setLightboxIndex((i) => (i! - 1 + visible.length) % visible.length);
      if (e.key === "Escape") setLightboxIndex(null);
    },
    [lightboxIndex, visible.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <>
      {/* Grid */}
      <div
        className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 transition-opacity duration-[600ms]"
        style={{ opacity: gridOpacity }}
      >
        {visible.map((src, i) => (
          <div
            key={src}
            className="break-inside-avoid mb-3 sm:mb-4 rounded-xl overflow-hidden group cursor-pointer"
            onClick={() => setLightboxIndex(i)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`Vibana event photo ${i + 1}`}
              loading="lazy"
              className="w-full h-auto block transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white text-3xl leading-none z-10 p-2"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close"
          >
            ✕
          </button>

          {/* Prev */}
          <button
            className="absolute left-3 sm:left-6 text-white/70 hover:text-white text-4xl leading-none z-10 p-2 select-none"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i! - 1 + visible.length) % visible.length);
            }}
            aria-label="Previous photo"
          >
            ‹
          </button>

          {/* Image */}
          <div
            className="max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={visible[lightboxIndex]}
              alt={`Vibana event photo ${lightboxIndex + 1}`}
              className="max-w-full max-h-[88vh] object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Next */}
          <button
            className="absolute right-3 sm:right-6 text-white/70 hover:text-white text-4xl leading-none z-10 p-2 select-none"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i! + 1) % visible.length);
            }}
            aria-label="Next photo"
          >
            ›
          </button>

          {/* Counter */}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm tabular-nums">
            {lightboxIndex + 1} / {visible.length}
          </p>
        </div>
      )}
    </>
  );
}
