import SunCalc from 'suncalc';
import type { 
  Coordinates, 
  MoonData, 
  MoonIllumination,
  MoonPhaseDetails 
} from '../types/astronomical';

export function calculateMoonData(date: Date, location: Coordinates): MoonData {
  const position = SunCalc.getMoonPosition(date, location.latitude, location.longitude);
  const illumination = SunCalc.getMoonIllumination(date);
  const times = SunCalc.getMoonTimes(date, location.latitude, location.longitude);
  const phaseDetails = getMoonPhaseDetails(illumination);

  return {
    position,
    illumination,
    times,
    phaseDetails,
    timestamp: date,
  };
}

export function getMoonPhaseDetails(illumination: MoonIllumination): MoonPhaseDetails {
  const { phase, fraction } = illumination;
  const phaseInfo = getMoonPhaseInfo(phase);
  
  return {
    name: phaseInfo.name,
    scientificName: phaseInfo.scientificName,
    age: phase * 29.530588853, // Synodic month in days
    illumination: fraction * 100,
    icon: phaseInfo.icon,
    description: phaseInfo.description
  };
}

interface PhaseInfo {
  name: string;
  scientificName: string;
  icon: string;
  description: string;
}

function getMoonPhaseInfo(phase: number): PhaseInfo {
  if (phase === 0) {
    return {
      name: 'New Moon',
      scientificName: 'Novulunium',
      icon: 'moon-new',
      description: 'The Moon is between the Earth and Sun, with its unilluminated side facing Earth.'
    };
  }
  if (phase < 0.25) {
    return {
      name: 'Waxing Crescent',
      scientificName: 'Luna Crescens',
      icon: 'moon-waxing-crescent',
      description: 'A sliver of the Moon becomes visible on the right side.'
    };
  }
  if (phase === 0.25) {
    return {
      name: 'First Quarter',
      scientificName: 'Prima Quarter',
      icon: 'moon-first-quarter',
      description: 'The right half of the Moon is illuminated from our perspective.'
    };
  }
  if (phase < 0.5) {
    return {
      name: 'Waxing Gibbous',
      scientificName: 'Luna Gibba Crescens',
      icon: 'moon-waxing-gibbous',
      description: 'More than half of the Moon is illuminated, approaching full.'
    };
  }
  if (phase === 0.5) {
    return {
      name: 'Full Moon',
      scientificName: 'Plenilunium',
      icon: 'moon-full',
      description: 'The entire visible side of the Moon is illuminated by the Sun.'
    };
  }
  if (phase < 0.75) {
    return {
      name: 'Waning Gibbous',
      scientificName: 'Luna Gibba Decrescens',
      icon: 'moon-waning-gibbous',
      description: 'The illuminated area starts to decrease from the right side.'
    };
  }
  if (phase === 0.75) {
    return {
      name: 'Last Quarter',
      scientificName: 'Ultima Quarter',
      icon: 'moon-last-quarter',
      description: 'The left half of the Moon is illuminated from our perspective.'
    };
  }
  return {
    name: 'Waning Crescent',
    scientificName: 'Luna Decrescens',
    icon: 'moon-waning-crescent',
    description: 'Only a small portion of the left side remains illuminated.'
  };
}