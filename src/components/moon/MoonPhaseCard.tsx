import React from 'react';
import { Moon } from 'lucide-react';
import type { MoonPhaseDetails } from '../../types/astronomical';

interface MoonPhaseCardProps {
  phaseDetails: MoonPhaseDetails;
}

export function MoonPhaseCard({ phaseDetails }: MoonPhaseCardProps) {
  return (
    <div className="bg-slate-800 rounded-lg p-6 text-white">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold">{phaseDetails.name}</h2>
          <p className="text-slate-400 text-sm">{phaseDetails.scientificName}</p>
        </div>
        <Moon className="w-8 h-8 text-blue-400" />
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-slate-300">Illumination:</span>
          <span className="font-semibold">{phaseDetails.illumination.toFixed(2)}%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-300">Moon Age:</span>
          <span className="font-semibold">{phaseDetails.age.toFixed(1)} days</span>
        </div>
        <div className="mt-4">
          <h3 className="text-sm font-medium text-slate-300 mb-2">About this phase:</h3>
          <p className="text-sm text-slate-400">{phaseDetails.description}</p>
        </div>
      </div>
    </div>
  );
}