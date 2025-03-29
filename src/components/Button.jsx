import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-[#8B4513]",  // Brown background
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button
            type={type}  // ✅ Fix: Explicitly set button type
            className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} hover:bg-[#A0522D] transition duration-200 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
