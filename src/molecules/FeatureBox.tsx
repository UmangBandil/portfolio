import React from 'react';
import Card from '../atoms/Card';
import Typography from '../atoms/Typography';
import Progress from '../atoms/Progress';

interface FeatureBoxProps {
  title: string;
  description: string;
  value?: number;
  max?: number;
  icon?: React.ReactNode;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({
  title,
  description,
  value,
  max = 100,
  icon,
}) => {
  return (
    <Card>
      {icon && <div className="mb-3 text-3xl">{icon}</div>}
      <Typography variant="h3" className="text-lg font-bold mb-2">
        {title}
      </Typography>
      <Typography variant="p" className="mb-4 text-sm">
        {description}
      </Typography>
      {value !== undefined && (
        <>
          <div className="flex justify-between mb-2">
            <Typography variant="span" className="text-xs font-semibold">
              Progress
            </Typography>
            <Typography variant="span" className="text-xs font-semibold">
              {value}%
            </Typography>
          </div>
          <Progress value={value} max={max} variant="primary" />
        </>
      )}
    </Card>
  );
};

export default FeatureBox;