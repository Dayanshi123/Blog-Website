import React, { useId } from 'react';

function Select(
    {
        options,
        label, 
        className,
        id,  // Allow custom ID for better accessibility
        ...props
    }, 
    ref
) {
    const generatedId = useId(); // Generates a unique fallback ID.

    return (
        <div className='w-full'>
            {label && <label htmlFor={id || generatedId} className='text-[#8B4513] font-medium'>
                {label}
            </label>}

            {/* Select dropdown with styling */}
            <select
                {...props}
                id={id || generatedId} // Use custom ID if provided
                ref={ref}
                className={`px-3 py-2 rounded-lg bg-[#FAF0E6] text-[#8B4513] outline-none
                    focus:bg-[#f4f4cb] duration-200 border border-[#8B4513]/50 w-full ${className}`}
            >
                {/* Mapping options dynamically */}
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default React.forwardRef(Select);

/**
 * Select Component
 * A reusable dropdown component with a beige background and brown font.
 * It also includes a smooth transition effect on focus.
 *
 * Props:
 * @param {Array} options - List of options for the select dropdown.
 * @param {string} label - Label text for the dropdown (optional).
 * @param {string} id - Custom ID for accessibility (optional).
 * @param {string} className - Additional CSS classes for styling (optional).
 * @param {Object} props - Other props passed to the select element.
 * @param {Object} ref - Forwarded ref for the select element (if needed).
 */
