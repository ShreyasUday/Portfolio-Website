"use client";

import { useEffect, useState } from "react";
import { Cloud, fetchSimpleIcons, ICloud, renderSimpleIcon } from "react-icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "nodedotjs",
  "express",
  "react",
  "html5",
  "css3",
  "nextdotjs",
  "postgresql",
  "redis",
  "docker",
  "nginx",
  "amazonaws",
  "git",
  "github",
  "visualstudiocode",
  "linux",
  "gnubash",
  "pm2",
  "vercel",
  "json",
  "jest",
  "python",
  "fastapi",
];

const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.015,
  },
};

export function TechGlobe({ size = 260 }: { size?: number }) {
  const [icons, setIcons] = useState<any>(null);

  useEffect(() => {
    fetchSimpleIcons({ slugs }).then((result) => {
      setIcons(result.simpleIcons);
    });
  }, []);

  const renderedIcons = icons
    ? Object.values(icons).map((icon: any) =>
        renderSimpleIcon({
          icon,
          size: 42,
          aProps: {
            href: undefined,
            target: undefined,
            rel: undefined,
            onClick: (e: any) => e.preventDefault(),
          },
        })
      )
    : null;

  return (
    <div
      className={`relative flex items-center justify-center w-full aspect-square mx-auto ${size ? "" : "max-w-[320px] lg:max-w-[400px]"}`}
      style={size ? { width: size, height: size } : {}}
    >
      {/* Fallback glow behind the globe */}
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-emerald-400/20 to-sky-400/20 blur-[80px] rounded-full" />
      
      {renderedIcons && (
        <div className="z-10 w-full h-full flex items-center justify-center">
          <Cloud {...cloudProps}>
            {renderedIcons}
          </Cloud>
        </div>
      )}
    </div>
  );
}
