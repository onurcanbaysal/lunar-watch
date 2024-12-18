import { formatDistance, differenceInMilliseconds } from 'date-fns';

export function getLocalTime(date: Date): string {
  return date.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
}

export function getMoonAge(referenceNewMoon: Date): number {
  const now = new Date();
  const synodicMonth = 29.530588853; // days
  const millisPerDay = 24 * 60 * 60 * 1000;
  
  const daysSinceNewMoon = differenceInMilliseconds(now, referenceNewMoon) / millisPerDay;
  return daysSinceNewMoon % synodicMonth;
}

export function formatTimeDistance(date: Date): string {
  return formatDistance(date, new Date(), { addSuffix: true });
}