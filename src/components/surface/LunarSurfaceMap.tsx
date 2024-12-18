import React, { useState } from 'react';
import { Map } from 'lucide-react';

interface SurfaceFeature {
  id: string;
  name: string;
  type: 'mare' | 'crater' | 'mountain';
  coordinates: { x: number; y: number };
  description: string;
}

const SURFACE_FEATURES: SurfaceFeature[] = [
  {
    id: 'mare-tranquillitatis',
    name: 'Mare Tranquillitatis',
    type: 'mare',
    coordinates: { x: 60, y: 45 },
    description: 'Sea of Tranquility - Apollo 11 landing site'
  },
  {
    id: 'tycho',
    name: 'Tycho',
    type: 'crater',
    coordinates: { x: 50, y: 80 },
    description: 'Prominent impact crater with extensive ray system'
  },
  {
    id: 'montes-apenninus',
    name: 'Montes Apenninus',
    type: 'mountain',
    coordinates: { x: 45, y: 35 },
    description: 'Mountain range forming part of Mare Imbrium basin'
  }
];

export function LunarSurfaceMap() {
  const [selectedFeature, setSelectedFeature] = useState<SurfaceFeature | null>(null);

  return (
    <div className="bg-slate-800 rounded-lg p-6 text-white">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Map className="w-6 h-6 text-blue-400" />
          <h2 className="text-xl font-bold">Lunar Surface</h2>
        </div>
      </div>

      <div className="relative aspect-square rounded-full overflow-hidden bg-slate-900">
        <img 
          src="https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          alt="Lunar surface"
          className="w-full h-full object-cover"
        />
        
        {SURFACE_FEATURES.map(feature => (
          <button
            key={feature.id}
            className="absolute w-3 h-3 rounded-full bg-blue-400 hover:bg-blue-300 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${feature.coordinates.x}%`,
              top: `${feature.coordinates.y}%`
            }}
            onClick={() => setSelectedFeature(feature)}
          />
        ))}
      </div>

      {selectedFeature && (
        <div className="mt-4 p-4 bg-slate-700/50 rounded-lg">
          <h3 className="font-medium text-lg mb-1">{selectedFeature.name}</h3>
          <p className="text-sm text-slate-300">{selectedFeature.description}</p>
        </div>
      )}
    </div>
  );
}