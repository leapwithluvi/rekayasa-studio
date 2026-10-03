"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface NovarekaLogoProps {
  className?: string;
  size?: number;
  animate?: boolean;
  variant?: "dark" | "light";
}

export default function NovarekaLogo({
  className,
  size = 34,
  animate = true,
  variant = "dark",
}: NovarekaLogoProps) {
  const isLight = variant === "light";
  const gradDarkId = `nv-pillar-dark-${variant}`;
  const gradLightId = `nv-pillar-light-${variant}`;
  const gradAmberId = `nv-amber-glow-${variant}`;

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center group/logo select-none shrink-0",
        className,
      )}
      style={{ width: size, height: size }}
      aria-label="Novareka Logo"
    >
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible transition-transform duration-500 ease-out group-hover/logo:scale-105"
      >
        <defs>
          <linearGradient
            id={gradDarkId}
            x1="0"
            y1="0"
            x2="48"
            y2="48"
            gradientUnits="userSpaceOnUse"
          >
            {isLight ? (
              <>
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#E6E4DF" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="#252422" />
                <stop offset="100%" stopColor="#141312" />
              </>
            )}
          </linearGradient>

          <linearGradient
            id={gradLightId}
            x1="0"
            y1="0"
            x2="48"
            y2="48"
            gradientUnits="userSpaceOnUse"
          >
            {isLight ? (
              <>
                <stop offset="0%" stopColor="#F5F4F0" />
                <stop offset="100%" stopColor="#D5D2CB" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="#3E3B38" />
                <stop offset="100%" stopColor="#22201E" />
              </>
            )}
          </linearGradient>

          <linearGradient
            id={gradAmberId}
            x1="20"
            y1="6"
            x2="44"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>

        {/* Left Pillar — Anchor & Foundation */}
        <path
          d="M8 38V14L18 8V32L8 38Z"
          fill={`url(#${gradDarkId})`}
          className={cn(
            "transition-transform duration-500 ease-out",
            animate && "group-hover/logo:-translate-x-0.5",
          )}
        />

        {/* Dynamic Diagonal Bridge — The Kinetic N */}
        <path
          d="M18 8L30 34V18L18 8Z"
          fill={`url(#${gradLightId})`}
          className={cn(
            "transition-opacity duration-300",
            animate && "opacity-90 group-hover/logo:opacity-100",
          )}
        />

        {/* Right Pillar — Scalability */}
        <path
          d="M30 18V42L40 36V10L30 18Z"
          fill={`url(#${gradDarkId})`}
          className={cn(
            "transition-transform duration-500 ease-out",
            animate && "group-hover/logo:translate-x-0.5",
          )}
        />

        {/* The Nova Crown Vertex — Innovation Apex */}
        <path
          d="M30 18L40 10L36 6L26 14L30 18Z"
          fill={`url(#${gradAmberId})`}
          className={cn(
            "transition-all duration-500 ease-out",
            animate &&
              "group-hover/logo:drop-shadow-[0_0_10px_rgba(245,158,11,0.7)] group-hover/logo:-translate-y-0.5",
          )}
        />
      </svg>
    </div>
  );
}
