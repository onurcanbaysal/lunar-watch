export interface MoonPhaseData {
  phase: string;
  year: number;
  month: number;
  day: number;
  time: string;
}

export interface MoonPhaseResponse {
  error?: string;
  apiversion: string;
  year: number;
  month?: number;
  day?: number;
  numphases?: number;
  phasedata: MoonPhaseData[];
}

export type View = 'today' | 'calendar' | 'times' | 'location';