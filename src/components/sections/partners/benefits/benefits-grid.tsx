import BenefitCard from '@/components/cards/partners/benefit-card';
import React from 'react';

interface Benefit {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  stat: string;
}

interface BenefitsGridProps {
  benefits: Benefit[];
}

const BenefitsGrid: React.FC<BenefitsGridProps> = ({ benefits }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {benefits.map((benefit, index) => (
        <BenefitCard 
          key={index}
          benefit={benefit}
          index={index}
        />
      ))}
    </div>
  );
};

export default BenefitsGrid;