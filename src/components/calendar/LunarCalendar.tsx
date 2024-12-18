import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
import { getMoonIllumination, getMoonPhaseDetails } from '../../utils/astronomicalCalculations';
import type { MoonPhaseDetails } from '../../types/astronomical';

export function LunarCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth)
  });

  const nextMonth = () => setCurrentMonth(curr => addMonths(curr, 1));
  const prevMonth = () => setCurrentMonth(curr => subMonths(curr, 1));

  return (
    <div className="bg-slate-800 rounded-lg p-6 text-white">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <CalendarIcon className="w-6 h-6 text-blue-400" />
          <h2 className="text-xl font-bold">Lunar Calendar</h2>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={prevMonth} className="p-2 hover:bg-slate-700 rounded-full">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="font-medium">
            {format(currentMonth, 'MMMM yyyy')}
          </span>
          <button onClick={nextMonth} className="p-2 hover:bg-slate-700 rounded-full">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-sm font-medium text-slate-400 py-2">
            {day}
          </div>
        ))}
        
        {daysInMonth.map(date => {
          const illumination = getMoonIllumination(date);
          const phaseDetails = getMoonPhaseDetails(illumination);
          
          return (
            <DayCell 
              key={date.toISOString()} 
              date={date} 
              phaseDetails={phaseDetails}
            />
          );
        })}
      </div>
    </div>
  );
}

interface DayCellProps {
  date: Date;
  phaseDetails: MoonPhaseDetails;
}

function DayCell({ date, phaseDetails }: DayCellProps) {
  return (
    <div className="aspect-square p-1">
      <div className="h-full w-full rounded bg-slate-700/50 hover:bg-slate-700 p-2">
        <div className="text-sm mb-1">{format(date, 'd')}</div>
        <div className="text-xs text-slate-400" title={phaseDetails.name}>
          {phaseDetails.illumination.toFixed(0)}%
        </div>
      </div>
    </div>
  );
}