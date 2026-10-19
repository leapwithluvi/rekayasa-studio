"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AltarekaLogoProps {
  className?: string;
  size?: number;
  animate?: boolean;
  variant?: "dark" | "light";
}

export default function AltarekaLogo({
  className,
  size = 32,
  animate = true,
  variant = "dark",
}: AltarekaLogoProps) {
  const isLight = variant === "light";

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center group/logo select-none shrink-0",
        className,
      )}
      style={{ width: size, height: size }}
      aria-label="Altareka Logo"
    >
      <svg
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "w-full h-full overflow-visible",
          animate &&
            "transition-transform duration-500 ease-out group-hover/logo:scale-105",
        )}
      >
        <title>Altareka Monolith Pillars</title>

        {/* Left Foundation Pillar */}
        <path
          d="M44 220V112L116 40V220H44Z"
          fill={isLight ? "#f5f4f0" : "#0d0d0c"}
          className={cn(
            animate &&
              "transition-transform duration-500 ease-out group-hover/logo:-translate-y-1",
          )}
        />

        {/* Right Ascending Pillar (Warm Amber Gold) */}
        <path
          d="M140 220V40L212 112V220H140Z"
          fill="#c8a96e"
          className={cn(
            animate &&
              "transition-transform duration-500 ease-out group-hover/logo:translate-y-1",
          )}
        />
      </svg>
    </div>
  );
}
