import React from 'react';
import { Calendar } from 'lucide-react';
import { useWeeklyPhases } from '../../hooks/useWeeklyPhases';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { formatPhaseDateTime } from '../../utils/dateFormatters';

export function WeeklyPhases() {
  const { phases, loading, error } = useWeeklyPhases();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !phases.length) {
    return null;
  }

  return (
    <div className="bg-slate-800 rounded-lg p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Calendar className="w-6 h-6 text-blue-400" />
        <h2 className="text-xl font-bold text-white">This Week's Phases</h2>
      </div>
      
      <div className="space-y-4">
        {phases.map((phase, index) => (
          <div
            key={`${phase.phase}-${index}`}
            className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg"
          >
            <div>
              <div className="font-medium text-white">{phase.phase}</div>
              <div className="text-sm text-slate-400">
                {formatPhaseDateTime(phase)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}