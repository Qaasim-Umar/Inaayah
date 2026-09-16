"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type HeroImage = {
  src: string;
  alt: string;
};

type HeroImageRotatorProps = {
  images: readonly HeroImage[];
};

const rotationInterval = 6000;

export function HeroImageRotator({ images }: HeroImageRotatorProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let intervalId: number | undefined;

    const stopRotation = () => {
      if (intervalId !== undefined) {
        window.clearInterval(intervalId);
        intervalId = undefined;
      }
    };

    const startRotation = () => {
      stopRotation();

      if (motionPreference.matches || images.length < 2) {
        return;
      }

      intervalId = window.setInterval(() => {
        setActiveIndex((currentIndex) =>
          currentIndex === images.length - 1 ? 0 : currentIndex + 1,
        );
      }, rotationInterval);
    };

    startRotation();
    motionPreference.addEventListener("change", startRotation);

    return () => {
      stopRotation();
      motionPreference.removeEventListener("change", startRotation);
    };
  }, [images.length]);

  return (
    <div aria-live="off" className="absolute inset-0">
      {images.map((image, index) => {
        const isActive = index === activeIndex;

        return (
          <Image
            key={image.src}
            src={image.src}
            alt={isActive ? image.alt : ""}
            aria-hidden={!isActive}
            fill
            loading="eager"
            sizes="(min-width: 1024px) 38vw, 78vw"
            className={`hero-people object-cover object-center transition-opacity duration-400 ease-in-out motion-reduce:transition-none ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          />
        );
      })}
    </div>
  );
}
