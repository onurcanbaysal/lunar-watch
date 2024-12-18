import React from 'react';
import type { MoonPhaseData } from '../../types/moon';
import { formatPhaseDate } from '../../utils/dateFormatters';

interface PhaseListProps {
  phases: MoonPhaseData[];
}

export function PhaseList({ phases }: PhaseListProps) {
  return (
    <div className="space-y-4">
      {phases.map((phase, index) => (
        <div
          key={`${phase.phase}-${index}`}
          className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg"
        >
          <div>
            <div className="font-medium">{phase.phase}</div>
            <div className="text-sm text-slate-400">
              {formatPhaseDate(phase)}
            </div>
          </div>
          <div className="text-sm text-slate-300">{phase.time} UTC</div>
        </div>
      ))}
    </div>
  );
}