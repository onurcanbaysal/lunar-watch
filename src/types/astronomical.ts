export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface MoonPosition {
  altitude: number;
  azimuth: number;
  distance: number;
  parallacticAngle: number;
}

export interface MoonIllumination {
  fraction: number;
  phase: number;
  angle: number;
}

export interface MoonTimes {
  rise: Date | null;
  set: Date | null;
  transit: Date | null;
  nadir: Date | null;
}

export interface MoonPhaseDetails {
  name: string;
  scientificName: string;
  age: number;
  illumination: number;
  icon: string;
  description: string;
}

export interface MoonData {
  position: MoonPosition;
  illumination: MoonIllumination;
  times: MoonTimes;
  phaseDetails: MoonPhaseDetails;
  timestamp: Date;
}

export interface AstronomicalEvent {
  type: 'eclipse' | 'perigee' | 'apogee' | 'newMoon' | 'fullMoon';
  date: Date;
  description: string;
  duration?: number;
}