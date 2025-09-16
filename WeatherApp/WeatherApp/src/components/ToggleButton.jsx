import React, { useState } from "react";

function ToggleButton({ onToggle }) {
    const [isCelsius, setIsCelsius] = useState(true);

    const handleToggle = () => {
        const newValue = !isCelsius;
        setIsCelsius(newValue);
        if (onToggle) onToggle(newValue ? 'C' : 'F'); 
    };

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={handleToggle}
                className={`px-4 py-1 rounded-full cursor-pointer font-semibold text-sm shadow transition-colors duration-200 ${isCelsius ? "bg-sky-500 text-white" : "bg-sky-100 text-sky-800"
                    }`}
            >
                °C
            </button>
            <button
                onClick={handleToggle}
                className={`px-4 py-1 rounded-full cursor-pointer font-semibold text-sm shadow transition-colors duration-200 ${!isCelsius ? "bg-sky-500 text-white" : "bg-sky-100 text-sky-800"
                    }`}
            >
                °F
            </button>
        </div>
    );
}

export default ToggleButton;