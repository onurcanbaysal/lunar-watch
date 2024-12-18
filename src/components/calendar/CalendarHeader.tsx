import React from 'react';
import { Calendar } from 'lucide-react';

interface CalendarHeaderProps {
  currentYear: number;
  selectedYear: number;
  onYearChange: (year: number) => void;
}

export function CalendarHeader({ currentYear, selectedYear, onYearChange }: CalendarHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-2">
        <Calendar className="w-6 h-6 text-blue-400" />
        <h2 className="text-xl font-bold">Moon Phases Calendar</h2>
      </div>
      <select
        value={selectedYear}
        onChange={(e) => onYearChange(Number(e.target.value))}
        className="bg-slate-700 border border-slate-600 rounded px-3 py-1"
      >
        {Array.from({ length: 5 }, (_, i) => currentYear - 2 + i).map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}