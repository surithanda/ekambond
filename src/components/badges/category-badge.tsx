import React from 'react';

interface CategoryBadgeProps {
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category, icon: Icon, color }) => (
  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-xl font-bold text-xs uppercase tracking-wider shadow-lg ${color}`}>
    <Icon className="w-3 h-3" />
    <span className='font-neue-haas-medium'>{category}</span>
  </div>
);

export default CategoryBadge;