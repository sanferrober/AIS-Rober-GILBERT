
import React from 'react';
import { DayOfWeek } from '../types';
import { DAYS_OF_WEEK } from '../constants';

interface DaySelectorProps {
    selectedDay: DayOfWeek;
    setSelectedDay: (day: DayOfWeek) => void;
}

export const DaySelector: React.FC<DaySelectorProps> = ({ selectedDay, setSelectedDay }) => {
    return (
        <div className="w-full overflow-x-auto pb-2">
            <div className="flex justify-start sm:justify-center space-x-2 p-1 bg-slate-100 rounded-xl">
                {DAYS_OF_WEEK.map((day) => (
                    <button
                        key={day}
                        onClick={() => setSelectedDay(day)}
                        className={`px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 whitespace-nowrap
                            ${selectedDay === day
                                ? 'bg-white text-sky-700 shadow'
                                : 'text-slate-500 hover:bg-slate-200/70'
                            }`}
                    >
                        {day.charAt(0).toUpperCase() + day.slice(1).toLowerCase()}
                    </button>
                ))}
            </div>
        </div>
    );
};
