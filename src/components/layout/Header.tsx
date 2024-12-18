import React from 'react';
import { Moon, Sun, Calendar, Clock, MapPin } from 'lucide-react';
import type { View } from '../../hooks/useNavigation';

interface HeaderProps {
  currentView: View;
  onViewChange: (view: View) => void;
}

export function Header({ currentView, onViewChange }: HeaderProps) {
  const navItems: Array<{ view: View; icon: React.ReactNode; label: string }> = [
    { view: 'today', icon: <Sun className="w-4 h-4" />, label: 'Today' },
    { view: 'calendar', icon: <Calendar className="w-4 h-4" />, label: 'Calendar' },
    { view: 'times', icon: <Clock className="w-4 h-4" />, label: 'Times' },
    { view: 'location', icon: <MapPin className="w-4 h-4" />, label: 'Location' },
  ];

  return (
    <header className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Moon className="w-8 h-8 text-blue-400" />
            <h1 className="text-2xl font-bold text-white">Lunar Watch</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map(({ view, icon, label }) => (
              <button
                key={view}
                onClick={() => onViewChange(view)}
                className={`text-slate-300 hover:text-white flex items-center space-x-2 ${
                  currentView === view ? 'text-white' : ''
                }`}
              >
                {icon}
                <span>{label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}