import React from 'react';

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="bg-red-500/10 text-red-400 p-4 rounded-lg">
      {message}
    </div>
  );
}