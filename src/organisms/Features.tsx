import React from 'react';
import FeatureBox from '../molecules/FeatureBox';

interface FeaturesProps {
  features: {
    title: string;
    description: string;
    value?: number;
    max?: number;
    icon?: React.ReactNode;
  }[];
  columns?: 2 | 3 | 4;
}

const Features: React.FC<FeaturesProps> = ({ features, columns = 3 }) => {
  const gridClass = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }[columns];

  return (
    <div className={`grid ${gridClass} gap-6`}>
      {features.map((feature, idx) => (
        <FeatureBox
          key={idx}
          title={feature.title}
          description={feature.description}
          value={feature.value}
          max={feature.max}
          icon={feature.icon}
        />
      ))}
    </div>
  );
};

export default Features;