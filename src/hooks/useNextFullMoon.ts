import { useState, useEffect } from 'react';
import { MoonService } from '../services/moonService';
import type { MoonPhaseData } from '../types/moon';

export function useNextFullMoon() {
  const [nextFullMoon, setNextFullMoon] = useState<MoonPhaseData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNextFullMoon() {
      try {
        setLoading(true);
        const today = new Date();
        const dateStr = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
        const phases = await MoonService.getPhasesByDate(dateStr, 8);
        
        const fullMoon = phases.find(phase => phase.phase === 'Full Moon');
        setNextFullMoon(fullMoon || null);
        setError(null);
      } catch (err) {
        setError('Failed to fetch next full moon');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchNextFullMoon();
  }, []);

  return { nextFullMoon, loading, error };
}