"use client";

import React, { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface layoutProps {
  children?: ReactNode;
  className?: string;
  reveal?: boolean;

  duration?: number;
  delay?: number;
  once?: boolean;
  opacity?: number;
  scale?: number;
  angle?: number;
  threshold?: number;
  distance?: number;
  reverse?: boolean;
  ease?: string;
  direction?: "hor" | "ver";
  stagger?: number;
  staggerFrom?: "start" | "end" | "center";
}

interface sidebarProps {
  children?: ReactNode;
  className?: string;
  side?: "left" | "right";
}

const ELayout: React.FC<layoutProps> = ({
  children,
  className = "",
  reveal = false,

  duration = 0.8,
  delay = 0,
  opacity = 0,
  scale = 1,
  angle = 0,
  threshold = 0.1,
  distance = 100,
  reverse = false,
  ease = "power3.out",
  direction = "ver",
  stagger = 0,
  staggerFrom = "start",
}) => {
  const ref = useRef(null);
  const axis = direction === "hor" ? "x" : "y";
  const offset = reverse ? -distance : distance;
  const rotation = reverse ? -angle : angle;
  const percent = (1 - threshold) * 100;

  useEffect(() => {
    if (reveal) {
      const el =
        document.querySelectorAll(".epsilon-layout .epsilon-sublayout");
      if (!el) return;
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: `top ${percent}%`,
          end: `bottom +=50px`,
        },
      });

      tl.set(el, {
        [axis]: offset,
        scale,
        opacity: opacity,
        rotate: rotation,
      });

      tl.to(el, {
        [axis]: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        duration,
        ease,
        delay,
        stagger: {
          amount: stagger,
          from: staggerFrom,
        },
      });
    }
  });
  return (
    <div className={`w-full h-full overflow-hidden epsilon-layout flex flex-row ${className}`}>
      {children}
    </div>
  );
};

const ESidebar: React.FC<sidebarProps> = ({
  children,
  className = "",
  side = "left",
}) => {
  return (
    <div
      className={`${
        side === "left" ? "border-e" : "border-s ml-auto"
      } w-100 border-(--foreground)/30 bg-(--foreground)/4 opacity-0 p-4 epsilon-sublayout ${className}`}
    >
      {children}
    </div>
  );
};

const EContentbar: React.FC<layoutProps> = ({children, className}) => {
  return (
    <div className="w-full flex opacity-0 p-4 epsilon-sublayout">
      {children}
    </div>
  );
}

export { ELayout, ESidebar, EContentbar };
