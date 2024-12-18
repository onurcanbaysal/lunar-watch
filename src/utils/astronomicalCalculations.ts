import SunCalc from 'suncalc';
import type { 
  Coordinates, 
  MoonPosition, 
  MoonIllumination, 
  MoonTimes,
  MoonPhaseDetails 
} from '../types/astronomical';

export function getMoonPosition(date: Date, location: Coordinates): MoonPosition {
  return SunCalc.getMoonPosition(date, location.latitude, location.longitude);
}

export function getMoonIllumination(date: Date): MoonIllumination {
  return SunCalc.getMoonIllumination(date);
}

export function getMoonTimes(date: Date, location: Coordinates): MoonTimes {
  return SunCalc.getMoonTimes(date, location.latitude, location.longitude);
}

export function getMoonPhaseDetails(illumination: MoonIllumination): MoonPhaseDetails {
  const { phase, fraction } = illumination;
  
  const phases: Record<string, { name: string; scientificName: string }> = {
    NEW: { name: 'New Moon', scientificName: 'Novulunium' },
    WAXING_CRESCENT: { name: 'Waxing Crescent', scientificName: 'Luna Crescens' },
    FIRST_QUARTER: { name: 'First Quarter', scientificName: 'Prima Quarter' },
    WAXING_GIBBOUS: { name: 'Waxing Gibbous', scientificName: 'Luna Gibba Crescens' },
    FULL: { name: 'Full Moon', scientificName: 'Plenilunium' },
    WANING_GIBBOUS: { name: 'Waning Gibbous', scientificName: 'Luna Gibba Decrescens' },
    LAST_QUARTER: { name: 'Last Quarter', scientificName: 'Ultima Quarter' },
    WANING_CRESCENT: { name: 'Waning Crescent', scientificName: 'Luna Decrescens' }
  };

  let phaseKey: string;
  if (phase === 0) phaseKey = 'NEW';
  else if (phase < 0.25) phaseKey = 'WAXING_CRESCENT';
  else if (phase === 0.25) phaseKey = 'FIRST_QUARTER';
  else if (phase < 0.5) phaseKey = 'WAXING_GIBBOUS';
  else if (phase === 0.5) phaseKey = 'FULL';
  else if (phase < 0.75) phaseKey = 'WANING_GIBBOUS';
  else if (phase === 0.75) phaseKey = 'LAST_QUARTER';
  else phaseKey = 'WANING_CRESCENT';

  const phaseInfo = phases[phaseKey];

  return {
    name: phaseInfo.name,
    scientificName: phaseInfo.scientificName,
    age: phase * 29.530588853, // Synodic month in days
    illumination: fraction * 100,
    icon: `moon-${phaseKey.toLowerCase()}`,
    description: getPhaseDescription(phaseKey)
  };
}

function getPhaseDescription(phaseKey: string): string {
  const descriptions: Record<string, string> = {
    NEW: 'The Moon is between the Earth and Sun, with its unilluminated side facing Earth.',
    WAXING_CRESCENT: 'A sliver of the Moon becomes visible on the right side.',
    FIRST_QUARTER: 'The right half of the Moon is illuminated from our perspective.',
    WAXING_GIBBOUS: 'More than half of the Moon is illuminated, approaching full.',
    FULL: 'The entire visible side of the Moon is illuminated by the Sun.',
    WANING_GIBBOUS: 'The illuminated area starts to decrease from the right side.',
    LAST_QUARTER: 'The left half of the Moon is illuminated from our perspective.',
    WANING_CRESCENT: 'Only a small portion of the left side remains illuminated.'
  };
  
  return descriptions[phaseKey];
}