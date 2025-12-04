// FIX: Add missing import for React.
import React from 'react';

export interface Meal {
  time: string;
  title: string;
  items: string[];
  hydration?: string;
  icon?: string;
  note?: string;
}

export type DayOfWeek = 'LUNES' | 'MARTES' | 'MIÉRCOLES' | 'JUEVES' | 'VIERNES' | 'SÁBADO' | 'DOMINGO';

export interface DailyPlan {
    day: DayOfWeek;
    title: string;
    meals: Meal[];
}

export type WeeklyPlan = DailyPlan[];

export interface InfoItem {
    text: string;
    subtext?: string;
    icon?: React.ReactNode;
    type: 'good' | 'bad' | 'neutral' | 'warning';
}

export interface InfoSection {
    title: string;
    items: InfoItem[];
    description?: string;
}