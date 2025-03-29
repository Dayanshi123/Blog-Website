import React, { useId } from 'react';

const Input = React.forwardRef(
    function Input({
        label, 
        type = "text",
        className = "",
        ...props
    }, ref) {
        
    const id = useId();
    return (
        <div className="w-full">
            {/* Label for input field */}
            {label && (
                <label
                    className="inline-block mb-1 pl-1 text-[#8B4513]" // Brown text for label
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            
            {/* Input field with beige theme */}
            <input 
                type={type}
                className={`px-3 py-2 rounded-lg bg-[#F5F5DC] text-[#8B4513] outline-none
                    focus:bg-[#EEDDBB] duration-200 border border-[#8B4513]/50 w-full ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    );
});

export default Input;
