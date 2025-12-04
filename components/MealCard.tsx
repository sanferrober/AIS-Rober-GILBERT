
import React from 'react';
import { Meal } from '../types';

interface MealCardProps {
    meal: Meal;
    isNext: boolean;
}

export const MealCard: React.FC<MealCardProps> = ({ meal, isNext }) => {
    const cardClasses = `
        bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300
        ${isNext ? 'ring-4 ring-sky-400 ring-offset-2 scale-105 shadow-lg' : 'border border-slate-200'}
    `;

    return (
        <div className={cardClasses}>
            <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                        <span className="text-2xl">{meal.icon}</span>
                        <div>
                            <p className="text-sm font-bold text-sky-700">{meal.title}</p>
                            <p className="text-lg font-bold text-slate-800">{meal.time}</p>
                        </div>
                    </div>
                    {isNext && (
                        <span className="px-3 py-1 text-xs font-bold text-white bg-sky-500 rounded-full">
                            PRÓXIMA
                        </span>
                    )}
                </div>
                {meal.note && <div className="mb-3 p-2 bg-amber-100 text-amber-800 text-sm font-semibold rounded-lg text-center">{meal.note}</div>}
                <ul className="space-y-2 list-disc list-inside text-slate-600">
                    {meal.items.map((item, index) => (
                        <li key={index} className="leading-snug">{item}</li>
                    ))}
                </ul>
            </div>
            {meal.hydration && (
                <div className="bg-sky-50 border-t border-sky-100 px-5 py-3">
                    <p className="text-sm text-sky-800"><span className="font-bold">💧 Hidratación:</span> {meal.hydration}</p>
                </div>
            )}
        </div>
    );
};
