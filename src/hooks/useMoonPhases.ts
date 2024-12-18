import { useState, useEffect } from 'react';
import { MoonService } from '../services/moonService';
import type { MoonPhaseData } from '../types/moon';

export function useMoonPhases(year?: number) {
  const [phases, setPhases] = useState<MoonPhaseData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPhases() {
      try {
        setLoading(true);
        let data: MoonPhaseData[];
        
        if (year) {
          data = await MoonService.getPhasesByYear(year);
        } else {
          const today = new Date();
          const dateStr = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
          data = await MoonService.getPhasesByDate(dateStr, 8); // Next 2 lunar cycles
        }
        
        setPhases(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch moon phases');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPhases();
  }, [year]);

  return { phases, loading, error };
}