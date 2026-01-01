import React from 'react';
import StatBox from '../molecules/StatBox';

interface StatsProps {
  stats: {
    value: string | number;
    label: string;
    icon?: string;
    variant?: 'primary' | 'secondary' | 'accent' | 'info' | 'success';
  }[];
  columns?: 2 | 3 | 4;
}

const Stats: React.FC<StatsProps> = ({ stats, columns = 4 }) => {
  const gridClass = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }[columns];

  return (
    <div className={`grid ${gridClass} gap-6`}>
      {stats.map((stat, idx) => (
        <StatBox
          key={idx}
          value={stat.value}
          label={stat.label}
          icon={stat.icon}
          variant={stat.variant}
        />
      ))}
    </div>
  );
};

export default Stats;