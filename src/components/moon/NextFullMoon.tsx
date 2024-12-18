import React from 'react';
import { Moon, Clock } from 'lucide-react';
import { useNextFullMoon } from '../../hooks/useNextFullMoon';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { formatPhaseDateTime } from '../../utils/dateFormatters';

export function NextFullMoon() {
  const { nextFullMoon, loading, error } = useNextFullMoon();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !nextFullMoon) {
    return null;
  }

  return (
    <div className="text-white">
      <div className="flex items-center space-x-4 mb-6">
        <Moon className="w-12 h-12 text-blue-400" />
        <div>
          <h1 className="text-3xl font-bold">Lunar Watch</h1>
          <p className="text-slate-300">Track the moon's journey through its phases</p>
        </div>
      </div>
      
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 mt-8">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Next Full Moon</h2>
            <p className="text-blue-300">{nextFullMoon.phase}</p>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-2 text-slate-300 mb-2">
              <Clock className="w-4 h-4" />
              <span>Upcoming</span>
            </div>
            <div className="text-xl font-semibold">
              {formatPhaseDateTime(nextFullMoon)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}