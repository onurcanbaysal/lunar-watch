import React from 'react';
import { Calendar } from 'lucide-react';
import type { AstronomicalEvent } from '../../types/astronomical';
import { formatTimeDistance } from '../../utils/dateUtils';

interface LunarEventsProps {
  events: AstronomicalEvent[];
}

export function LunarEvents({ events }: LunarEventsProps) {
  const sortedEvents = [...events].sort((a, b) => a.date.getTime() - b.date.getTime());

  return (
    <div className="bg-slate-800 rounded-lg p-6 text-white">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Calendar className="w-6 h-6 text-blue-400" />
          <h2 className="text-xl font-bold">Upcoming Events</h2>
        </div>
      </div>

      <div className="space-y-4">
        {sortedEvents.map(event => (
          <div 
            key={`${event.type}-${event.date.toISOString()}`}
            className="flex items-start space-x-4 p-4 bg-slate-700/50 rounded-lg"
          >
            <div className="flex-1">
              <div className="font-medium mb-1">
                {event.type === 'eclipse' && '🌑 '}
                {event.description}
              </div>
              <div className="text-sm text-slate-300">
                {formatTimeDistance(event.date)}
              </div>
              {event.duration && (
                <div className="text-sm text-slate-400 mt-1">
                  Duration: {(event.duration / 60).toFixed(0)} minutes
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}