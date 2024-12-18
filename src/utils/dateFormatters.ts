import type { MoonPhaseData } from '../types/moon';

export function formatPhaseDate(phase: MoonPhaseData): string {
  return `${phase.month}/${phase.day}/${phase.year}`;
}

export function formatPhaseDateTime(phase: MoonPhaseData): string {
  const date = formatPhaseDate(phase);
  return `${date} at ${phase.time} UTC`;
}

export function formatUTCTime(time: string): string {
  return `${time} UTC`;
}