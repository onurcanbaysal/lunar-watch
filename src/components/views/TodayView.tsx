import React from 'react';
import { NextFullMoon } from '../moon/NextFullMoon';
import { MoonPhaseCard } from '../moon/MoonPhaseCard';
import { MoonPositionCard } from '../moon/MoonPositionCard';
import { MoonTimesCard } from '../moon/MoonTimesCard';
import { LunarSurfaceMap } from '../surface/LunarSurfaceMap';
import { LunarEvents } from '../events/LunarEvents';
import type { MoonData } from '../../types/astronomical';
import type { AstronomicalEvent } from '../../types/astronomical';

interface TodayViewProps {
  moonData: MoonData;
  events: AstronomicalEvent[];
}

export function TodayView({ moonData, events }: TodayViewProps) {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900 to-slate-900 p-8 md:p-12">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532693322450-2cb5c511067d?ixlib=rb-4.0.3')] opacity-20 bg-cover bg-center" />
        <div className="relative z-10">
          <NextFullMoon />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <MoonPhaseCard phaseDetails={moonData.phaseDetails} />
        <MoonPositionCard position={moonData.position} />
        <MoonTimesCard times={moonData.times} />
      </div>

      {/* Interactive Section */}
      <div className="grid md:grid-cols-2 gap-8">
        <LunarSurfaceMap />
        <LunarEvents events={events} />
      </div>
    </div>
  );
}