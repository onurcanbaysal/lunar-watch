import React from 'react';
import { format, startOfWeek, addDays, startOfMonth, endOfMonth, isSameMonth } from 'date-fns';
import type { MoonPhaseData } from '../../types/moon';

interface MonthCalendarProps {
  date: Date;
  phases: MoonPhaseData[];
}

export function MonthCalendar({ date, phases }: MonthCalendarProps) {
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);

  const weeks = [];
  let currentDate = startDate;

  for (let week = 0; week < 6; week++) {
    const weekDays = [];
    for (let day = 0; day < 7; day++) {
      const dayPhase = phases.find(
        phase => 
          phase.year === currentDate.getFullYear() &&
          phase.month === currentDate.getMonth() + 1 &&
          phase.day === currentDate.getDate()
      );

      weekDays.push({
        date: currentDate,
        isCurrentMonth: isSameMonth(currentDate, monthStart),
        phase: dayPhase
      });
      currentDate = addDays(currentDate, 1);
    }
    weeks.push(weekDays);
    if (currentDate > monthEnd) break;
  }

  return (
    <div className="bg-slate-800 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-white mb-4">
        {format(date, 'MMMM yyyy')}
      </h3>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-sm font-medium text-slate-400">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {weeks.map((week, weekIndex) =>
          week.map(({ date: dayDate, isCurrentMonth, phase }, dayIndex) => (
            <div
              key={`${weekIndex}-${dayIndex}`}
              className={`aspect-square p-1 ${
                isCurrentMonth ? 'text-white' : 'text-slate-600'
              }`}
            >
              <div className={`h-full w-full rounded p-1 ${
                phase ? 'bg-blue-500/20' : ''
              }`}>
                <div className="text-sm mb-1">{format(dayDate, 'd')}</div>
                {phase && (
                  <div className="text-xs text-blue-400" title={phase.phase}>
                    {phase.phase.split(' ')[0]}
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}