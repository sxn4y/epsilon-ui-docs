"use client";

import React, { ReactNode, use, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface ButtonProps {
  children?: ReactNode;
  className?: string;
  parallax?: boolean;
  tiltFactor?: number;

  scrollReveal?: boolean;
  delay?: number;
  duration?: number;
  opacity?: number;
  scale?: number;
  angle?: number;
  threshold?: number;
  distance?: number;
  reverse?: boolean;
  ease?: string;
  direction?: "hor" | "ver";

  autoFocus?: boolean;
  command?: string;
  commandFor?: string;
  disabled?: boolean;
  form?: string;
  formAction?: string;
  formEncType?: string;
  formMethod?: string;
  formNoValidate?: boolean;
  formTarget?: string;
  name?: string;
  type?: "button" | "submit" | "reset";
  value?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLButtonElement>) => void;

  variant?: "primary" | "secondary" | "outline" | "danger" | "link" | "fancy";
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "w-fit h-[100px]",
  parallax = false,
  tiltFactor = 30,

  scrollReveal = false,
  delay = 0,
  duration = 0.8,
  opacity = "0",
  scale = 1,
  angle = 0,
  threshold = 0.1,
  distance = 100,
  reverse = false,
  ease = "power3.out",
  direction = "ver",

  autoFocus = false,
  disabled = false,
  form,
  formAction,
  formEncType,
  formMethod,
  formNoValidate = false,
  formTarget,
  name,
  type = "button",
  value,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onFocus,

  variant = "primary"
}) => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const axis = direction === "hor" ? "x" : "y";
  const offset = reverse ? -distance : distance;
  const rotation = reverse ? -angle : angle;
  const percent = (1 - threshold) * 100;
  let inBuiltClass =
    "w-fit h-fit px-3 py-1.5 rounded-xl text-sm text-(--background) bg-(--foreground) font-medium overflow-hidden glow-effect outline-(--foreground)/50 outline-0 delay-25 transition-[outline] transition-[background] hover:bg-(--foreground)/90 focus:outline-3";

  switch (variant) {
    case "secondary":
      inBuiltClass =
        "w-fit h-fit px-3 py-1.5 rounded-xl text-sm text-(--foreground) bg-(--foreground)/10 font-medium overflow-hidden glow-effect outline-(--foreground)/5 outline-0 delay-25 transition-[outline] transition-[background] hover:bg-(--foreground)/9 focus:outline-3";
      break;
    case "outline":
      inBuiltClass =
        "w-fit h-fit px-3 py-1.5 rounded-xl text-sm text-(--foreground) border border-(--foreground)/20 bg-(--foreground)/10 font-medium overflow-hidden glow-effect outline-(--foreground)/7 outline-0 delay-25 transition-[outline] transition-[background] hover:bg-(--foreground)/9 focus:outline-3";
      break;
    case "danger":
      inBuiltClass =
        "w-fit h-fit px-3 py-1.5 rounded-xl text-sm text-(--foreground) bg-red-800 font-medium overflow-hidden glow-effect outline-red-800/50 outline-0 delay-25 transition-[outline] transition-[background] hover:bg-red-800/90 focus:outline-3";
      break;
    case "link":
      inBuiltClass =
        "w-fit h-fit px-3 py-1.5 rounded-xl text-sm text-(--foreground) font-medium overflow-hidden glow-effect outline-red-800/50 outline-0 delay-25 transition-[outline] transition-[background] transition-[text-decoration] underline-offset-4 hover:underline";
      break;
    case "fancy":
      inBuiltClass =
        "w-fit h-fit px-3 py-1.5 rounded-xl text-sm text-(--foreground) border border-(--foreground)/20 bg-linear-to-b from-(--foreground)/13 to-(--foreground)/6 font-medium overflow-hidden glow-effect outline-(--foreground)/7 outline-0 delay-25 transition-[outline] transition-[background] hover:bg-(--foreground)/9 focus:outline-3";
      break;
  }

  useEffect(() => {
    const button = buttonRef.current;
    let handleMouseMove = (e: MouseEvent)=>{}, handleMouseLeave = ()=>{};

    if (!button) return;

    if (parallax) {
      handleMouseMove = (e: MouseEvent) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const tiltX = (y - centerY) / (button.clientHeight / tiltFactor);
        const tiltY = (centerX - x) / (button.clientWidth / tiltFactor);

        button.style.setProperty("--x", `${x}%`);
        button.style.setProperty("--y", `${y}%`);
        button.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      };

      handleMouseLeave = () => {
        button.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg)";
      };

      button.addEventListener("mousemove", handleMouseMove);

      button.addEventListener("mouseleave", handleMouseLeave);
    }

    const el = buttonRef.current;
    if (!el) return;
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: `top ${percent}%`,
        end: "bottom +=50px",
        once: false,
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
    });

    if (parallax)
      return () => {
        button.removeEventListener("mousemove", handleMouseMove);
        button.removeEventListener("mouseleave", handleMouseLeave);
      };
  });

  return (
    <button
      autoFocus={autoFocus}
      disabled={disabled}
      form={form}
      formAction={formAction}
      formEncType={formEncType}
      formMethod={formMethod}
      formNoValidate={formNoValidate}
      formTarget={formTarget}
      name={name}
      type={type}
      value={value}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      className={`${className} ${inBuiltClass}`}
      ref={buttonRef}
    >
      {children}
      <div className="glow-container" />
    </button>
  );
};

export default Button;
