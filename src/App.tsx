import React, { useMemo } from 'react';
import { Header } from './components/layout/Header';
import { LoadingScreen } from './components/layout/LoadingScreen';
import { TodayView } from './components/views/TodayView';
import { CalendarView } from './components/views/CalendarView';
import { TimesView } from './components/views/TimesView';
import { LocationView } from './components/views/LocationView';
import { useMoonData } from './hooks/useMoonData';
import { useNavigation } from './hooks/useNavigation';
import type { View } from './types/moon';

export default function App() {
  const defaultLocation = useMemo(() => ({
    latitude: 40.7128,
    longitude: -74.0060,
  }), []);

  const moonData = useMoonData(defaultLocation);
  const { currentView, setCurrentView } = useNavigation();

  if (!moonData) {
    return <LoadingScreen />;
  }

  const renderView = (view: View) => {
    switch (view) {
      case 'today':
        return <TodayView moonData={moonData} events={[]} />;
      case 'calendar':
        return <CalendarView />;
      case 'times':
        return <TimesView times={moonData.times} />;
      case 'location':
        return <LocationView location={defaultLocation} />;
      default:
        return <TodayView moonData={moonData} events={[]} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Header currentView={currentView} onViewChange={setCurrentView} />
      <main className="container mx-auto px-4 py-8">
        {renderView(currentView)}
      </main>
    </div>
  );
}