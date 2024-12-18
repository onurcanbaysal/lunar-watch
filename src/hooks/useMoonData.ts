import { useState, useEffect, useCallback } from 'react';
import type { Coordinates, MoonData } from '../types/astronomical';
import { calculateMoonData } from '../utils/moonCalculations';

export function useMoonData(location: Coordinates) {
  const [moonData, setMoonData] = useState<MoonData | null>(null);

  const updateMoonData = useCallback(() => {
    const data = calculateMoonData(new Date(), location);
    setMoonData(data);
  }, [location]);

  useEffect(() => {
    updateMoonData();
    const interval = setInterval(updateMoonData, 1000);
    return () => clearInterval(interval);
  }, [updateMoonData]);

  return moonData;
}