import type { MoonPhaseData, MoonPhaseResponse } from '../types/moon';

const API_BASE_URL = 'https://aa.usno.navy.mil/api/moon';

export class MoonService {
  static async getPhasesByDate(date: string, numPhases: number): Promise<MoonPhaseData[]> {
    try {
      const response = await fetch(
        `${API_BASE_URL}/phases/date?date=${date}&nump=${numPhases}`
      );
      const data: MoonPhaseResponse = await response.json();
      return data.phasedata || [];
    } catch (error) {
      console.error('Error fetching moon phases:', error);
      return [];
    }
  }

  static async getPhasesByYear(year: number): Promise<MoonPhaseData[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/phases/year?year=${year}`);
      const data: MoonPhaseResponse = await response.json();
      return data.phasedata || [];
    } catch (error) {
      console.error('Error fetching moon phases:', error);
      return [];
    }
  }
}