import React from 'react';
import { MapPin } from 'lucide-react';
import type { Coordinates } from '../../types/astronomical';

interface LocationViewProps {
  location: Coordinates;
}

export function LocationView({ location }: LocationViewProps) {
  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-slate-800 rounded-lg p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <MapPin className="w-6 h-6 text-blue-400" />
            <h2 className="text-xl font-bold">Location Settings</h2>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-slate-300">Latitude:</span>
            <span className="font-semibold">{location.latitude.toFixed(4)}°</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-300">Longitude:</span>
            <span className="font-semibold">{location.longitude.toFixed(4)}°</span>
          </div>
          <div className="text-sm text-slate-400 mt-4">
            <p>Currently showing data for New York, USA.</p>
            <p className="mt-2">Location detection coming soon.</p>
          </div>
        </div>
      </div>
    </div>
  );
}