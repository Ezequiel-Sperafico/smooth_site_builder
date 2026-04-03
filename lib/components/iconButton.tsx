'use client'

import { JSX } from "react";

interface IIconButtonProps {
    icon: JSX.ElementType;
    onclick: () => void;
    forceHover?: boolean;
    size?: "small" | "medium" | "large";
}

export default function IconButton({icon: Icon, size = "medium", onclick, forceHover = false}: IIconButtonProps) {
    const sizeClass = size === "small" ? "w-2 h-2" : size === "medium" ? "w-4 h-4" : "w-6 h-6"
    return (
        <button className={`hover-bg-secondary rounded-4xl p-1.5 ${forceHover ? 'bg-secondary-aux' : ''}`} onClick={onclick}>
            <Icon className={sizeClass} />
        </button>
    );
}