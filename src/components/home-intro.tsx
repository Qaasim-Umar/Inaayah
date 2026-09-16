"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";

let hasPlayedInDocument = false;

export function HomeIntro({ locale = "en" }: { locale?: Locale }) {
  const [shouldPlay] = useState(() => !hasPlayedInDocument);
  const [isVisible, setIsVisible] = useState(shouldPlay);

  useEffect(() => {
    if (!shouldPlay) return;

    hasPlayedInDocument = true;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const removeIntro = () => setIsVisible(false);
    const timeout = window.setTimeout(removeIntro, reducedMotion.matches ? 0 : 1600);

    const handleMotionPreference = (event: MediaQueryListEvent) => {
      if (event.matches) removeIntro();
    };

    reducedMotion.addEventListener("change", handleMotionPreference);

    return () => {
      window.clearTimeout(timeout);
      reducedMotion.removeEventListener("change", handleMotionPreference);
    };
  }, [shouldPlay]);

  if (!isVisible) return null;

  return (
    <>
      <noscript>
        <style>{`.home-intro { display: none !important; }`}</style>
      </noscript>
      <div aria-hidden="true" className="home-intro">
        <div className="home-intro__mark">
          <div className="home-intro__book">
            <div className="home-intro__page home-intro__page--left">
              <span className="home-intro__line home-intro__line--short" />
              <span className="home-intro__line" />
              <span className="home-intro__line" />
            </div>
            <div className="home-intro__page home-intro__page--right">
              <span className="home-intro__line home-intro__line--short" />
              <span className="home-intro__line" />
              <span className="home-intro__line" />
            </div>
            <div className="home-intro__turning-page">
              <div className="home-intro__turning-face home-intro__turning-face--front">
                <span className="home-intro__line home-intro__line--short" />
                <span className="home-intro__line" />
                <span className="home-intro__line" />
              </div>
              <div className="home-intro__turning-face home-intro__turning-face--back">
                <span className="home-intro__line home-intro__line--short" />
                <span className="home-intro__line" />
                <span className="home-intro__line" />
              </div>
            </div>
            <span className="home-intro__spine" />
            <span className="home-intro__crest">
              <Image
                src="/brand/inaayatullah-crest.png"
                alt=""
                width={72}
                height={72}
                priority
                className="size-full rounded-full"
              />
            </span>
          </div>
          <p className="home-intro__name">{locale === "ar" ? "أكاديمية عناية الله الدولية" : "Inaayatullah International Academy"}</p>
        </div>
      </div>
    </>
  );
}
