'use client'

import React, { ReactNode } from "react";
import { motion } from "motion/react"

interface ButtonProps {
    children: ReactNode;
    className?: string;
    parallax?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    className = "w-fit h-[100px]",
    parallax = false,
}) => {
    return (
        <motion.div></motion.div>
    )
}