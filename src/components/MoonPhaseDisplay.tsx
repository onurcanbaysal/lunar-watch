import React from 'react';
import { Moon } from 'lucide-react';
import { getMoonData, getMoonPhase } from '../utils/moonCalculations';

interface MoonPhaseDisplayProps {
  latitude: number;
  longitude: number;
}

export function MoonPhaseDisplay({ latitude, longitude }: MoonPhaseDisplayProps) {
  const [moonData, setMoonData] = React.useState<any>(null);

  React.useEffect(() => {
    const updateMoonData = () => {
      const data = getMoonData(new Date(), latitude, longitude);
      setMoonData(data);
    };

    updateMoonData();
    const interval = setInterval(updateMoonData, 1000);
    return () => clearInterval(interval);
  }, [latitude, longitude]);

  if (!moonData) return null;

  const phaseName = getMoonPhase(moonData.illumination.phase);
  const illuminationPercent = (moonData.illumination.fraction * 100).toFixed(2);

  return (
    <div className="bg-slate-800 rounded-lg p-6 text-white">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Current Moon Phase</h2>
        <Moon className="w-8 h-8" />
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-slate-300">Phase:</span>
          <span className="font-semibold">{phaseName}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-300">Illumination:</span>
          <span className="font-semibold">{illuminationPercent}%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-300">Altitude:</span>
          <span className="font-semibold">
            {moonData.position.altitude.toFixed(2)}°
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-300">Azimuth:</span>
          <span className="font-semibold">
            {moonData.position.azimuth.toFixed(2)}°
          </span>
        </div>
      </div>
    </div>
  );
}