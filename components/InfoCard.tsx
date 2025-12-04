
import React from 'react';
import { InfoSection } from '../types';

interface InfoCardProps {
    section: InfoSection;
}

const itemTypeClasses = {
    good: 'bg-emerald-50 border-emerald-200',
    bad: 'bg-rose-50 border-rose-200',
    warning: 'bg-amber-50 border-amber-200',
    neutral: 'bg-slate-50 border-slate-200',
};

export const InfoCard: React.FC<InfoCardProps> = ({ section }) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-2">{section.title}</h3>
            {section.description && <p className="text-sm text-slate-500 mb-4">{section.description}</p>}
            <div className="space-y-3">
                {section.items.map((item, index) => (
                    <div key={index} className={`flex items-start space-x-4 p-3 rounded-lg border ${itemTypeClasses[item.type]}`}>
                        <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                        <div>
                            <p className="font-semibold text-slate-700">{item.text}</p>
                            {item.subtext && <p className="text-sm text-slate-500">{item.subtext}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
