import React from 'react';
import { MoonTimesCard } from '../moon/MoonTimesCard';
import type { MoonTimes } from '../../types/astronomical';

interface TimesViewProps {
  times: MoonTimes;
}

export function TimesView({ times }: TimesViewProps) {
  return (
    <div className="max-w-xl mx-auto">
      <MoonTimesCard times={times} />
    </div>
  );
}