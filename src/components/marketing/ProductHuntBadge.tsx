"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProductHuntBadge() {
  const [isMounted, setIsMounted] = useState(false);
  const [imgSrc, setImgSrc] = useState("");

  const postId = "966370";
  const badgeUrl = `https://www.producthunt.com/posts/typewriting-ai?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-typewriting&#0045;ai`;

  useEffect(() => {
    setIsMounted(true);
    // Generate fresh image URL with timestamp to prevent caching
    setImgSrc(
      `https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=${postId}&theme=neutral&t=${Date.now()}`
    );
  }, []);

  if (!isMounted || !imgSrc) {
    return (
      <div
        className="w-fit sm:w-[200px] md:w-[250px] h-[42px] sm:h-[50px] md:h-[58px] rounded-lg animate-pulse"
        aria-label="Loading Product Hunt badge"
      />
    );
  }

  return (
    <a
      href={badgeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block hover:opacity-90 transform transition-transform duration-500 scale-100 hover:scale-105"
      aria-label="Check out Typewriting AI on Product Hunt">
      <Image
        src={imgSrc}
        alt="Typewriting AI - Chatbot that replaces forms | Product Hunt"
        width={250}
        height={60}
        className="w-fit h-[42px] sm:h-[50px] md:h-[60px]"
        priority
        unoptimized // Product Hunt's SVG doesn't work well with Next.js Image optimization
      />
    </a>
  );
}
