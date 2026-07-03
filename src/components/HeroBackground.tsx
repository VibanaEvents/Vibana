"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function HeroBackground({ images }: { images: string[] }) {
  // Pick 8 random images from the pool to cycle through in the hero
  const pool = useRef<string[]>([]);
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const currentRef = useRef(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    pool.current = shuffle(images).slice(0, 8);
    setReady(true);

    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        currentRef.current = (currentRef.current + 1) % pool.current.length;
        setCurrent(currentRef.current);
        setFading(false);
      }, 1500);
    }, 7000);

    return () => clearInterval(timer);
  }, [images]);

  if (!ready || pool.current.length === 0) return null;

  const prev = (current - 1 + pool.current.length) % pool.current.length;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Previous image — always underneath */}
      <div className={`absolute inset-0 ${prev % 2 === 0 ? "hero-kb-a" : "hero-kb-b"}`}>
        <Image
          src={pool.current[prev]}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Current image — fades out during transition, revealing the one below */}
      <div
        className={`absolute inset-0 transition-opacity duration-[1500ms] ${
          current % 2 === 0 ? "hero-kb-a" : "hero-kb-b"
        } ${fading ? "opacity-0" : "opacity-100"}`}
      >
        <Image
          src={pool.current[current]}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
    </div>
  );
}
