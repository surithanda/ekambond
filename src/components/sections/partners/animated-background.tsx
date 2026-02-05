// components/AnimatedBackground.tsx
import React from 'react';

const AnimatedBackground: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
    <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange rounded-full blur-3xl animate-pulse delay-1000"></div>
  </div>
);

export default AnimatedBackground;