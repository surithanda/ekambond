import React from 'react';

interface ServiceImageProps {
  id: number;
  isHovered: boolean;
}

const ServiceImage: React.FC<ServiceImageProps> = ({ id, isHovered }) => {
  return (
    <div className="relative h-96 w-full rounded-3xl overflow-hidden mb-6 shadow-xl">
      {/* Border and shadow effect */}
      <div className={`absolute inset-0 rounded-3xl transition-opacity duration-500 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`} style={{
        boxShadow: `0 0 40px ${isHovered ? '#C84B31' : 'transparent'}`,
        border: '2px solid #C84B31'
      }}></div>

      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="absolute inset-0 flex items-center justify-center text-white/20 text-6xl font-bold">
          {id}
        </div>
      </div>

      {/* Accent overlay on hover */}
      <div className={`absolute inset-0 transition-all duration-500 mix-blend-overlay ${
        isHovered ? 'opacity-40' : 'opacity-0'
      }`} style={{ backgroundColor: '#C84B31' }}></div>

      {/* Shine effect */}
      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-700 ${
        isHovered ? 'opacity-30' : 'opacity-0'
      }`} style={{
        transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)'
      }}></div>
    </div>
  );
};

export default ServiceImage;