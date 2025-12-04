
import React from 'react';

interface TabButtonProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
}

export const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`flex-1 px-4 py-3 text-sm font-semibold rounded-lg focus:outline-none transition-colors duration-200
                ${isActive
                    ? 'bg-sky-600 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100'
                }`}
        >
            {label}
        </button>
    );
};
