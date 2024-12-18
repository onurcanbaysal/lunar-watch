import React from 'react';

export function MoonVisualization() {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto bg-slate-900 rounded-full overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')]
                    bg-cover bg-center"
           style={{ transform: 'scale(1.1)' }}>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/90"></div>
    </div>
  );
}