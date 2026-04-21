"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type LazyVideoProps = {
  src: string;
  mimeType: string;
  posterSrc?: string;
  className?: string;
  priority?: boolean;
  title: string;
};

export function LazyVideo({ src, mimeType, posterSrc, className, priority = false, title }: LazyVideoProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(priority);

  useEffect(() => {
    if (priority || shouldLoad || !containerRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px 0px" }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [priority, shouldLoad]);

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden">
      {posterSrc && !shouldLoad ? (
        <Image src={posterSrc} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
      ) : null}

      {shouldLoad ? (
        <video
          className={className}
          autoPlay
          muted
          loop
          playsInline
          preload={priority ? "metadata" : "none"}
          poster={posterSrc}
          aria-label={title}
          title={title}
        >
          <source src={src} type={mimeType} />
          {title}
        </video>
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,18,18,0.08),rgba(18,18,18,0.16))]" />
      )}
    </div>
  );
}
