import React from 'react';

interface ButtonProps {
    buttonText: string;
}

export const ButtonWhite: React.FC<ButtonProps> = ({ buttonText }) => {
    return (
        <button className="bg-white rounded-xl px-4 py-2">
            <span className="text-lg text-button-white-text font-roboto-mono">{buttonText}</span>
        </button>
    );
};

export const ButtonBlue: React.FC<ButtonProps> = ({ buttonText }) => {
    return (
        <button className="bg-blue-500 rounded-xl px-4 py-2">
            <span className="text-lg text-white font-roboto-mono">{buttonText}</span>
        </button>
    );
};
