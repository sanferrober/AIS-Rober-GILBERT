import React from 'react';
import { WeeklyPlan, InfoSection } from '../types';
import { ICONS } from '../constants';

export const weeklyPlanData: WeeklyPlan = [
    {
        day: 'LUNES',
        title: 'Descanso Activo',
        meals: [
            { time: '07:30-08:00', title: 'Desayuno', icon: '☀️', items: ['Avena cocida (80g) con canela', '1 plátano maduro en rodajas', '20g nueces picadas', '1 vaso leche de avena o almendras', '1 kiwi'], hydration: 'Agua con limón' },
            { time: '10:30-11:00', title: 'Media Mañana', icon: ' snacking', items: ['Tostada de pan integral con aguacate', '2 huevos revueltos', 'Tomate cherry'], hydration: 'Té verde suave' },
            { time: '14:00-14:30', title: 'Comida', icon: '🍲', items: ['Ensalada variada (lechuga, zanahoria, remolacha, pepino)', 'Pechuga de pollo a la plancha (150g) con ajo y limón', 'Quinoa cocida (100g)', 'Brócoli al vapor con aceite de oliva', '1 manzana'], hydration: 'Agua (500ml)' },
            { time: '17:30-18:00', title: 'Merienda', icon: '🍎', items: ['Yogur natural (sin azúcar) con:', '1 cucharada semillas de chía', 'Arándanos frescos', '10 almendras'] },
            { time: '21:00-21:30', title: 'Cena', icon: '🌙', items: ['Crema de calabaza y zanahoria', 'Merluza al horno (180g) con ajo, perejil y limón', 'Espárragos verdes', 'Ensalada de tomate con aceite de oliva'], hydration: 'Infusión digestiva' }
        ]
    },
    {
        day: 'MARTES',
        title: 'Ejercicio Suave - Tarde',
        meals: [
            { time: '07:30-08:00', title: 'Desayuno', icon: '☀️', items: ['Tostadas integrales (2) con tomate triturado', 'Tortilla francesa (2 huevos) con espinacas', '1 naranja exprimida', 'Puñado de fresas'], hydration: 'Agua' },
            { time: '10:30-11:00', title: 'Media Mañana', icon: '🥤', items: ['Batido: plátano, espinacas, leche de avena, mantequilla de almendras', '1 puñado de nueces'] },
            { time: '14:00-14:30', title: 'Comida', icon: '🍲', items: ['Lentejas estofadas con verduras (zanahoria, pimiento, cebolla)', 'Ensalada verde con aceite de oliva', 'Arroz integral (pequeña porción)', '1 pera'], hydration: 'Agua (500ml)' },
            { time: '17:00', title: 'PRE-EJERCICIO', icon: '⚡️', items: ['1 plátano maduro', '4-5 dátiles'], hydration: '400ml agua' },
            { time: '18:00-19:00', title: 'DURANTE EJERCICIO', icon: '💧', items: ['Agua cada 15-20 minutos (total 500ml)'] },
            { time: '19:15', title: 'POST-EJERCICIO', icon: '🔋', items: ['Batido recuperación:', 'Proteína de suero o vegetal (25g)', '1 plátano', 'Leche de avena (300ml)', '1 cucharada miel'] },
            { time: '21:00-21:30', title: 'Cena', icon: '🌙', items: ['Salmón a la plancha (150g) con hierbas', 'Patata cocida (mediana)', 'Ensalada de col lombarda con zanahoria', 'Brócoli al vapor'], hydration: 'Infusión relajante' }
        ]
    },
    {
        day: 'MIÉRCOLES',
        title: 'Deporte Intenso - Tarde',
        meals: [
            { time: '07:30-08:00', title: 'Desayuno', icon: '☀️', items: ['Bowl de yogur griego natural (200g)', 'Granola casera sin azúcar (60g)', 'Frutos rojos variados', '1 cucharada semillas de lino molidas', '1 kiwi'], hydration: 'Agua' },
            { time: '10:30-11:00', title: 'Media Mañana', icon: '🥪', items: ['Bocadillo pequeño integral con pavo natural', '1 tomate', 'Puñado de almendras'] },
            { time: '13:30-14:00', title: 'Comida Carga', icon: '💪', note:'¡IMPORTANTE!', items: ['Ensalada variada abundante', 'Pechuga de pavo a la plancha (150g)', 'Arroz basmati (150g cocido)', 'Boniato asado (150g)', 'Brócoli salteado con ajo', '1 plátano'], hydration: 'Agua (600ml)' },
            { time: '16:30', title: 'PRE-ENTRENO', icon: '⚡️⚡️', items: ['Tostadas integrales (2) con mermelada sin azúcar', '1 plátano grande', 'Puñado de pasas'], hydration: '500ml agua' },
            { time: '18:00-20:00', title: 'DURANTE ENTRENO INTENSO', icon: '💧💧', items: ['Bebida isotónica casera (agua + limón + pizca sal + miel)', 'Beber cada 15 minutos (total 750ml-1L)', 'Gel energético o 3-4 dátiles (a mitad de sesión si >90min)'] },
            { time: '20:15', title: 'POST-ENTRENO INMEDIATO', icon: '🔋🔋', items: ['Batido recuperación potente:', 'Proteína (30g)', '2 plátanos', 'Avena (30g)', 'Mantequilla de cacahuete (1 cucharada)', 'Leche de avena (400ml)'], hydration: '500ml agua' },
            { time: '21:30-22:00', title: 'Cena', icon: '🌙', items: ['Crema de calabacín con cúrcuma', 'Filete de ternera magra (120g)', 'Pasta integral (80g) con tomate natural y albahaca', 'Ensalada verde', 'Yogur natural'], hydration: 'Infusión + agua' }
        ]
    },
    {
        day: 'JUEVES',
        title: 'Ejercicio Suave - Tarde',
        meals: [
            { time: '07:30-08:00', title: 'Desayuno', icon: '☀️', items: ['Porridge de avena (80g) con:', 'Manzana asada con canela', 'Nueces (20g)', 'Semillas de calabaza', '1 naranja'], hydration: 'Agua con limón' },
            { time: '10:30-11:00', title: 'Media Mañana', icon: ' snacking', items: ['Hummus casero con crudités (zanahoria, pepino, apio)', 'Pan de centeno (2 rebanadas)'] },
            { time: '14:00-14:30', title: 'Comida', icon: '🍲', items: ['Crema de lentejas rojas con verduras', 'Dorada al horno (180g) con limón', 'Quinoa (100g)', 'Ensalada de remolacha y zanahoria', '1 pera'], hydration: 'Agua (500ml)' },
            { time: '17:00', title: 'PRE-EJERCICIO', icon: '⚡️', items: ['2 tortitas de arroz con aguacate', '1 plátano'] },
            { time: '18:00-19:00', title: 'DURANTE EJERCICIO', icon: '💧', items: ['Agua cada 15-20 minutos (total 500ml)'] },
            { time: '19:15', title: 'POST-EJERCICIO', icon: '🔋', items: ['Batido: proteína vegetal (25g), frutas del bosque, espinacas, leche de almendras'] },
            { time: '21:00-21:30', title: 'Cena', icon: '🌙', items: ['Revuelto de champiñones y espárragos trigueros (2 huevos)', 'Boniato asado', 'Ensalada mixta', 'Compota de manzana sin azúcar'], hydration: 'Infusión digestiva' }
        ]
    },
    {
        day: 'VIERNES',
        title: 'Descanso',
        meals: [
            { time: '07:30-08:00', title: 'Desayuno', icon: '☀️', items: ['Tostadas integrales (2) con:', 'Tomate natural rallado', 'Aceite de oliva virgen extra', 'Tortilla de 2 huevos con cebolla', 'Zumo de naranja natural', 'Fresas'], hydration: 'Agua' },
            { time: '10:30-11:00', title: 'Media Mañana', icon: ' snacking', items: ['Yogur natural con granola casera', '1 kiwi', 'Puñado de avellanas'] },
            { time: '14:00-14:30', title: 'Comida', icon: '🍲', items: ['Garbanzos guisados con espinacas y bacalao', 'Ensalada verde', 'Pan integral (pequeña porción)', '1 manzana'], hydration: 'Agua (500ml)' },
            { time: '17:30-18:00', title: 'Merienda', icon: '🥤', items: ['Smoothie verde (espinacas, piña, pepino, jengibre)', 'Galletas de avena caseras (2-3)'] },
            { time: '21:00-21:30', title: 'Cena', icon: '🌙', items: ['Wok de verduras variadas (brócoli, pimiento, zanahoria, coles)', 'Pollo al curry suave', 'Arroz basmati (porción moderada)', 'Ensalada de tomate'], hydration: 'Infusión relajante' }
        ]
    },
    {
        day: 'SÁBADO',
        title: 'Deporte Intenso - Mañana',
        meals: [
            { time: '07:00', title: 'PRE-ENTRENO TEMPRANO', icon: '⚡️⚡️', note: 'ESPERAR 45-60 minutos antes de entrenar', items: ['2 tostadas integrales con miel', '1 plátano grande', 'Puñado de dátiles'], hydration: '500ml agua' },
            { time: '08:00-10:00', title: 'DURANTE ENTRENO', icon: '💧💧', items: ['Bebida isotónica (agua + limón + sal marina + miel)', 'Beber cada 15 minutos (total 750ml-1L)', 'Barrita energética o frutos secos (si >90min)'] },
            { time: '10:15', title: 'POST-ENTRENO INMEDIATO', icon: '🔋🔋', items: ['Batido recuperación:', 'Proteína (30g)', '2 plátanos', 'Avena (40g)', 'Mantequilla de almendra', 'Leche de avena (400ml)', 'Espinacas frescas'], hydration: '600ml agua' },
            { time: '11:00-11:30', title: 'Desayuno/Brunch completo', icon: '🍳', items: ['Tostadas integrales (2) con aguacate', 'Huevos pochados (2)', 'Salmón ahumado (50g)', 'Tomates cherry', 'Zumo de naranja', 'Yogur con frutos rojos'] },
            { time: '14:30-15:00', title: 'Comida', icon: '🍲', items: ['Ensalada completa (lechuga, tomate, zanahoria, remolacha, nueces)', 'Arroz integral con pollo al curry (150g pollo + 120g arroz)', 'Verduras salteadas', '1 manzana'], hydration: 'Agua (600ml)' },
            { time: '18:00', title: 'Merienda', icon: '🍎', items: ['Batido de frutas variadas', 'Pan integral con crema de cacahuete natural', 'Puñado de almendras'] },
            { time: '21:00-21:30', title: 'Cena', icon: '🌙', items: ['Crema de verduras variadas', 'Lubina al horno (180g) con hierbas', 'Patata y zanahoria asadas', 'Ensalada verde', 'Yogur natural'], hydration: 'Infusión' }
        ]
    },
    {
        day: 'DOMINGO',
        title: 'Descanso/Recuperación',
        meals: [
            { time: '08:30-09:00', title: 'Desayuno', icon: '🥞', items: ['Pancakes de avena y plátano (3 unidades)', 'Frutas frescas variadas', 'Yogur griego', 'Nueces y semillas'], hydration: 'Agua con limón' },
            { time: '11:30', title: 'Media Mañana', icon: '🥣', items: ['Smoothie bowl (açaí, plátano, frutos rojos)', 'Granola casera', 'Coco rallado'] },
            { time: '14:30-15:00', title: 'Comida', icon: '🥘', items: ['Paella de verduras y marisco', 'Ensalada verde con tomate', '1 naranja'], hydration: 'Agua (500ml)' },
            { time: '18:00', title: 'Merienda', icon: '🥪', items: ['Bocadillo integral pequeño con atún natural', 'Zanahoria y pepino en bastones', 'Puñado de frutos secos'] },
            { time: '21:00-21:30', title: 'Cena', icon: '🌙', items: ['Crema de calabaza', 'Tortilla de espinacas y champiñones (2 huevos)', 'Ensalada variada', 'Boniato asado', 'Compota de manzana'], hydration: 'Infusión digestiva' }
        ]
    }
];

// FIX: Replace JSX syntax with React.createElement to avoid errors in .ts files.
export const foodGuideData: InfoSection[] = [
    {
        title: 'Alimentos Recomendados',
        description: 'Consumo diario/frecuente para potenciar la enzima UGT y apoyar la función hepática.',
        items: [
            { text: 'Vegetales Crucíferos', subtext: 'Brócoli, coliflor, coles de Bruselas, repollo, kale. (1-2 raciones diarias)', type: 'good', icon: React.createElement(ICONS.Check, { className: "h-6 w-6 text-emerald-500" }) },
            { text: 'Proteínas Magras', subtext: 'Pollo, pavo, pescado azul (3/semana), pescado blanco, huevos, legumbres. (Objetivo: 140-160g/día)', type: 'good', icon: React.createElement(ICONS.Check, { className: "h-6 w-6 text-emerald-500" }) },
            { text: 'Carbohidratos Complejos', subtext: 'Arroz integral, quinoa, avena, pasta integral, boniato, patata.', type: 'good', icon: React.createElement(ICONS.Check, { className: "h-6 w-6 text-emerald-500" }) },
            { text: 'Frutas Antioxidantes', subtext: 'Tomate, sandía, papaya, frutos rojos, cítricos, manzanas, peras.', type: 'good', icon: React.createElement(ICONS.Check, { className: "h-6 w-6 text-emerald-500" }) },
            { text: 'Grasas Saludables', subtext: 'Aceite de oliva virgen extra, aguacate, frutos secos, semillas.', type: 'good', icon: React.createElement(ICONS.Check, { className: "h-6 w-6 text-emerald-500" }) },
            { text: 'Alimentos Hepatoprotectores', subtext: 'Ajo, cúrcuma, jengibre, remolacha, té verde (con moderación), agua de limón.', type: 'good', icon: React.createElement(ICONS.Check, { className: "h-6 w-6 text-emerald-500" }) },
        ]
    },
    {
        title: 'Alimentos a EVITAR o LIMITAR',
        description: 'Estos alimentos pueden interferir con el metabolismo hepático o actuar como desencadenantes.',
        items: [
            { text: 'EVITAR Completamente: Alcohol', subtext: 'Interfiere con el metabolismo hepático.', type: 'bad', icon: React.createElement(ICONS.XCircle, { className: "h-6 w-6 text-rose-500" }) },
            { text: 'EVITAR Completamente: Azúcares refinados', subtext: 'Dulces, bollería industrial.', type: 'bad', icon: React.createElement(ICONS.XCircle, { className: "h-6 w-6 text-rose-500" }) },
            { text: 'EVITAR Completamente: Grasas trans', subtext: 'Comida rápida, frituras industriales.', type: 'bad', icon: React.createElement(ICONS.XCircle, { className: "h-6 w-6 text-rose-500" }) },
            { text: 'EVITAR Completamente: Bebidas azucaradas y refrescos', type: 'bad', icon: React.createElement(ICONS.XCircle, { className: "h-6 w-6 text-rose-500" }) },
            { text: 'EVITAR Completamente: Edulcorantes artificiales "-ol"', subtext: 'Sorbitol, manitol.', type: 'bad', icon: React.createElement(ICONS.XCircle, { className: "h-6 w-6 text-rose-500" }) },
            { text: 'LIMITAR: Carnes rojas', subtext: 'Máximo 1 vez/semana.', type: 'warning', icon: React.createElement(ICONS.Exclamation, { className: "h-6 w-6 text-amber-500" }) },
            { text: 'LIMITAR: Embutidos y procesados', type: 'warning', icon: React.createElement(ICONS.Exclamation, { className: "h-6 w-6 text-amber-500" }) },
            { text: 'LIMITAR: Café', subtext: 'Máximo 2 al día, bien hidratado.', type: 'warning', icon: React.createElement(ICONS.Exclamation, { className: "h-6 w-6 text-amber-500" }) },
            { text: 'LIMITAR: Alimentos muy grasos o fritos', type: 'warning', icon: React.createElement(ICONS.Exclamation, { className: "h-6 w-6 text-amber-500" }) },
            { text: 'LIMITAR: Sal en exceso', type: 'warning', icon: React.createElement(ICONS.Exclamation, { className: "h-6 w-6 text-amber-500" }) },
        ]
    }
];

export const protocolsData: InfoSection[] = [
    {
        title: 'Protocolo de Hidratación',
        items: [
            { text: 'Base Diaria', subtext: '500ml al despertar, 250ml cada 2h, 300-400ml con comidas, 200ml antes de dormir.', type: 'neutral', icon: React.createElement(ICONS.Info, { className: "h-6 w-6 text-sky-500" }) },
            { text: 'Días Ejercicio Suave', subtext: 'Pre: 400-500ml. Durante: 500ml. Post: 600ml. Total día: 2.5-3L.', type: 'neutral', icon: React.createElement(ICONS.Info, { className: "h-6 w-6 text-sky-500" }) },
            { text: 'Días Entrenamiento Intenso', subtext: 'Pre: 500-600ml. Durante: 750ml-1L. Post: 750ml-1L. Total día: 3-3.5L.', type: 'neutral', icon: React.createElement(ICONS.Info, { className: "h-6 w-6 text-sky-500" }) },
        ]
    },
    {
        title: 'Timing de Comidas (Reglas de Oro)',
        items: [
            { text: 'NUNCA más de 12 horas sin comer', type: 'bad', icon: React.createElement(ICONS.XCircle, { className: "h-6 w-6 text-rose-500" }) },
            { text: 'Comer cada 2.5-3.5 horas', type: 'good', icon: React.createElement(ICONS.Check, { className: "h-6 w-6 text-emerald-500" }) },
            { text: '5-6 comidas diarias', type: 'good', icon: React.createElement(ICONS.Check, { className: "h-6 w-6 text-emerald-500" }) },
            { text: 'No saltarse ninguna comida', type: 'good', icon: React.createElement(ICONS.Check, { className: "h-6 w-6 text-emerald-500" }) },
        ]
    }
];

export const objectivesData: InfoSection[] = [
    {
        title: 'Prioridades para el Síndrome de Gilbert',
        items: [
            { text: 'Evitar ayunos prolongados', subtext: 'Máximo 12 horas entre comidas', type: 'neutral', icon: React.createElement(ICONS.Target, { className: "h-6 w-6 text-slate-500" }) },
            { text: 'Mantener hidratación óptima', subtext: '2-2.5L diarios, más en días de ejercicio', type: 'neutral', icon: React.createElement(ICONS.Target, { className: "h-6 w-6 text-slate-500" }) },
            { text: 'Evitar desencadenantes', subtext: 'Alcohol, azúcares refinados, ayunos, deshidratación', type: 'neutral', icon: React.createElement(ICONS.Target, { className: "h-6 w-6 text-slate-500" }) },
            { text: 'Apoyar función hepática', subtext: 'Con alimentos que estimulen la enzima UGT1A1', type: 'neutral', icon: React.createElement(ICONS.Target, { className: "h-6 w-6 text-slate-500" }) },
            { text: 'Prevenir picos de bilirrubina', subtext: 'Con alimentación regular', type: 'neutral', icon: React.createElement(ICONS.Target, { className: "h-6 w-6 text-slate-500" }) },
        ]
    },
    {
        title: 'Objetivos a 3 Meses',
        items: [
            { text: 'Mantener peso estable (±1kg)', type: 'good', icon: React.createElement(ICONS.Check, { className: "h-6 w-6 text-emerald-500" }) },
            { text: 'Mejorar rendimiento deportivo 10-15%', type: 'good', icon: React.createElement(ICONS.Check, { className: "h-6 w-6 text-emerald-500" }) },
            { text: 'Cero episodios de ictericia relacionados con dieta/ejercicio', type: 'good', icon: React.createElement(ICONS.Check, { className: "h-6 w-6 text-emerald-500" }) },
            { text: 'Niveles de energía constantes (7-8/10)', type: 'good', icon: React.createElement(ICONS.Check, { className: "h-6 w-6 text-emerald-500" }) },
            { text: 'Buena recuperación entre entrenamientos', type: 'good', icon: React.createElement(ICONS.Check, { className: "h-6 w-6 text-emerald-500" }) },
            { text: 'Masa muscular preservada/aumentada', type: 'good', icon: React.createElement(ICONS.Check, { className: "h-6 w-6 text-emerald-500" }) },
            { text: 'Marcadores hepáticos en rango óptimo', type: 'good', icon: React.createElement(ICONS.Check, { className: "h-6 w-6 text-emerald-500" }) },
        ]
    }
];