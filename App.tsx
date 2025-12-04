
import React, { useState, useMemo, useEffect } from 'react';
import { DaySelector } from './components/DaySelector';
import { MealCard } from './components/MealCard';
import { TabButton } from './components/TabButton';
import { InfoCard } from './components/InfoCard';
import { weeklyPlanData, foodGuideData, protocolsData, objectivesData } from './data/mealData';
import { DayOfWeek } from './types';
import { DAY_MAP } from './constants';
import { useCurrentTime } from './hooks/useCurrentTime';

type Tab = 'plan' | 'food' | 'protocol' | 'objectives';

const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('plan');
    
    const getInitialDay = (): DayOfWeek => {
        const todayIndex = new Date().getDay();
        return DAY_MAP[todayIndex] || 'LUNES';
    };

    const [selectedDay, setSelectedDay] = useState<DayOfWeek>(getInitialDay);
    const currentTime = useCurrentTime();

    const currentPlan = useMemo(() => {
        return weeklyPlanData.find(plan => plan.day === selectedDay);
    }, [selectedDay]);

    const nextMealIndex = useMemo(() => {
        if (!currentPlan) return -1;
        
        const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();
        
        for (let i = 0; i < currentPlan.meals.length; i++) {
            const mealTime = currentPlan.meals[i].time.split('-')[0]; // Use start time
            const [hours, minutes] = mealTime.split(':').map(Number);
            const mealMinutes = hours * 60 + minutes;

            if (mealMinutes > currentMinutes) {
                return i;
            }
        }
        return -1; // No more meals for today
    }, [currentPlan, currentTime]);
    
    useEffect(() => {
      setSelectedDay(getInitialDay());
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentTime.getDate()]);

    const renderContent = () => {
        switch (activeTab) {
            case 'plan':
                return (
                    <div>
                        <DaySelector selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
                        <div className="mt-6">
                            <h2 className="text-2xl font-bold text-slate-800 mb-1">{currentPlan?.day}</h2>
                            <p className="text-md text-slate-500 font-medium mb-6">{currentPlan?.title}</p>
                            <div className="space-y-6">
                                {currentPlan?.meals.map((meal, index) => (
                                    <MealCard 
                                        key={index} 
                                        meal={meal} 
                                        isNext={index === nextMealIndex && selectedDay === getInitialDay()}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 'food':
                return (
                    <div className="space-y-6">
                        {foodGuideData.map((section, index) => <InfoCard key={index} section={section} />)}
                    </div>
                );
            case 'protocol':
                return (
                    <div className="space-y-6">
                        {protocolsData.map((section, index) => <InfoCard key={index} section={section} />)}
                    </div>
                );
            case 'objectives':
                return (
                    <div className="space-y-6">
                        {objectivesData.map((section, index) => <InfoCard key={index} section={section} />)}
                    </div>
                );
            default:
                return null;
        }
    };
    
    return (
        <div className="max-w-2xl mx-auto p-4 sm:p-6 font-sans">
            <header className="text-center my-6">
                <h1 className="text-4xl font-bold text-sky-800">Gilbert's Guardian</h1>
                <p className="text-slate-500 mt-2">Tu guía nutricional personalizada para el Síndrome de Gilbert y un estilo de vida activo.</p>
            </header>

            <nav className="sticky top-4 z-10 flex space-x-2 p-2 bg-slate-200/50 backdrop-blur-sm rounded-xl shadow-inner mb-8">
                <TabButton label="Plan Diario" isActive={activeTab === 'plan'} onClick={() => setActiveTab('plan')} />
                <TabButton label="Alimentos" isActive={activeTab === 'food'} onClick={() => setActiveTab('food')} />
                <TabButton label="Protocolos" isActive={activeTab === 'protocol'} onClick={() => setActiveTab('protocol')} />
                <TabButton label="Objetivos" isActive={activeTab === 'objectives'} onClick={() => setActiveTab('objectives')} />
            </nav>

            <main>
                {renderContent()}
            </main>

            <footer className="text-center mt-12 mb-6">
                <p className="text-xs text-slate-400">Esta es una guía general. Consulta siempre con un profesional médico.</p>
            </footer>
        </div>
    );
};

export default App;
