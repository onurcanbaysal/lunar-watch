import { useState } from 'react';

export type View = 'today' | 'calendar' | 'times' | 'location';

export function useNavigation() {
  const [currentView, setCurrentView] = useState<View>('today');

  return {
    currentView,
    setCurrentView,
  };
}