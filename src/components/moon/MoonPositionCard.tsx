import React from 'react';
import { Compass } from 'lucide-react';
import type { MoonPosition } from '../../types/astronomical';

interface MoonPositionCardProps {
  position: MoonPosition;
}

export function MoonPositionCard({ position }: MoonPositionCardProps) {
  const formatDegrees = (value: number) => `${value.toFixed(2)}°`;
  const formatDistance = (km: number) => `${(km / 1000).toFixed(0)},${(km % 1000).toString().padStart(3, '0')} km`;

  return (
    <div className="bg-slate-800 rounded-lg p-6 text-white">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Moon Position</h2>
        <Compass className="w-8 h-8 text-blue-400" />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-slate-300">Altitude:</span>
          <span className="font-semibold">{formatDegrees(position.altitude)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-300">Azimuth:</span>
          <span className="font-semibold">{formatDegrees(position.azimuth)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-300">Distance:</span>
          <span className="font-semibold">{formatDistance(position.distance)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-300">Parallactic Angle:</span>
          <span className="font-semibold">{formatDegrees(position.parallacticAngle)}</span>
        </div>
      </div>
    </div>
  );
}