import React, { useState } from 'react';
import { addMonths, subMonths } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MonthCalendar } from '../calendar/MonthCalendar';
import { useMoonPhases } from '../../hooks/useMoonPhases';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { ErrorMessage } from '../common/ErrorMessage';

export function CalendarView() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { phases, loading, error } = useMoonPhases(currentDate.getFullYear());

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  const nextMonth = () => setCurrentDate(curr => addMonths(curr, 1));
  const prevMonth = () => setCurrentDate(curr => subMonths(curr, 1));

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <button
          onClick={prevMonth}
          className="p-2 hover:bg-slate-700 rounded-full text-white"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold text-white">Moon Phase Calendar</h2>
        <button
          onClick={nextMonth}
          className="p-2 hover:bg-slate-700 rounded-full text-white"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <div className="flex space-x-6 min-w-max pb-4">
          {[-1, 0, 1, 2].map(offset => (
            <div key={offset} className="w-[400px]">
              <MonthCalendar
                date={addMonths(currentDate, offset)}
                phases={phases}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}