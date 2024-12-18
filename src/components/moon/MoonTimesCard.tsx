import React from 'react';
import { Clock } from 'lucide-react';
import type { MoonTimes } from '../../types/astronomical';
import { getLocalTime, formatTimeDistance } from '../../utils/dateUtils';

interface MoonTimesCardProps {
  times: MoonTimes;
}

export function MoonTimesCard({ times }: MoonTimesCardProps) {
  return (
    <div className="bg-slate-800 rounded-lg p-6 text-white">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Moon Times</h2>
        <Clock className="w-8 h-8 text-blue-400" />
      </div>

      <div className="space-y-4">
        {times.rise && (
          <div className="flex justify-between items-center">
            <span className="text-slate-300">Moonrise:</span>
            <div className="text-right">
              <div className="font-semibold">{getLocalTime(times.rise)}</div>
              <div className="text-sm text-slate-400">{formatTimeDistance(times.rise)}</div>
            </div>
          </div>
        )}
        
        {times.set && (
          <div className="flex justify-between items-center">
            <span className="text-slate-300">Moonset:</span>
            <div className="text-right">
              <div className="font-semibold">{getLocalTime(times.set)}</div>
              <div className="text-sm text-slate-400">{formatTimeDistance(times.set)}</div>
            </div>
          </div>
        )}
        
        {times.transit && (
          <div className="flex justify-between items-center">
            <span className="text-slate-300">Transit:</span>
            <div className="text-right">
              <div className="font-semibold">{getLocalTime(times.transit)}</div>
              <div className="text-sm text-slate-400">{formatTimeDistance(times.transit)}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}