import { useState, useEffect } from 'react';
import { MoonService } from '../services/moonService';
import type { MoonPhaseData } from '../types/moon';

export function useWeeklyPhases() {
  const [phases, setPhases] = useState<MoonPhaseData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWeeklyPhases() {
      try {
        setLoading(true);
        const today = new Date();
        const dateStr = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
        const data = await MoonService.getPhasesByDate(dateStr, 4); // Fetch next 4 phases
        setPhases(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch weekly phases');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchWeeklyPhases();
  }, []);

  return { phases, loading, error };
}