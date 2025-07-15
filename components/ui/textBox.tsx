"use client";

import React, { ReactNode, useEffect } from "react";
import "./epsilon.css";
import { div } from "motion/react-client";

export interface TextBoxProps {
  children?: ReactNode;
  className?: string;
  parallax?: boolean;
  tiltFactor?: number;

  placeholder?: string;
  value?: string;
  id?: string;
  name?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;

  variant?: "default" | "email" | "password" | "search";
}

const TextBox: React.FC<TextBoxProps> = ({
  children,
  className = "",
  parallax = false,
  tiltFactor = 20,

  placeholder = "Type here...",
  value = "",
  id,
  name,
  autoComplete = "off",
  autoFocus = false,
  disabled = false,
  readOnly = false,
  required = false,
  onChange,
  onFocus,

  variant = "default",
}) => {
  const textBoxRef = React.useRef<HTMLInputElement>(null);
  const isTouchDevice = () => {
    if (typeof window !== "undefined") {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    }
    return false;
  };

  if (isTouchDevice()) {
    tiltFactor = 0;
  }

  let inBuiltClass =
    "px-3 py-1.5 rounded-(--s2) text-(length:--s3) text-(--foreground) bg-(--foreground)/15 font-medium overflow-hidden outline-(--foreground)/7.5 outline-0 delay-25 transition-[outline] transition-[background] hover:bg-(--foreground)/9 focus:outline-3";

  useEffect(() => {
    const textBox = textBoxRef.current;
    let handleMouseMove = (e: MouseEvent) => {},
      handleMouseLeave = () => {};

    if (!textBox) return;

    if (parallax) {
      handleMouseMove = (e: MouseEvent) => {
        const rect = textBox.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const tiltX = (y - centerY) / (textBox.clientHeight / tiltFactor);
        const tiltY = (centerX - x) / (textBox.clientWidth / tiltFactor);

        textBox.style.setProperty("--x", `${x}%`);
        textBox.style.setProperty("--y", `${y}%`);
        textBox.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      };

      handleMouseLeave = () => {
        textBox.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg)";
      };

      textBox.addEventListener("mousemove", handleMouseMove);

      textBox.addEventListener("mouseleave", handleMouseLeave);
    }

    textBox.value = value;

    return () => {
      textBox.removeEventListener("mousemove", handleMouseMove);
      textBox.removeEventListener("mouseleave", handleMouseLeave);
    };
  });

  return (
    <input
      type="text"
      className={`${inBuiltClass} ${className}`}
      id={id}
      name={name}
      placeholder={placeholder}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      onChange={onChange}
      onFocus={onFocus}
      ref={textBoxRef}
    />
  );
};

export default TextBox;
