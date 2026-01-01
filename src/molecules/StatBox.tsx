import React from 'react';
import Button from '../atoms/Button';
import Typography from '../atoms/Typography';
import Icon from '../atoms/Icon';

interface StatBoxProps {
  value: string | number;
  label: string;
  icon?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'info' | 'success';
}

const StatBox: React.FC<StatBoxProps> = ({
  value,
  label,
  icon,
  variant = 'primary',
}) => {
  return (
    <div className="text-center p-4 bg-base-100 rounded-lg border border-base-300">
      {icon && (
        <Icon name={icon} size="lg" className={`mx-auto mb-2 text-${variant}`} />
      )}
      <Typography variant="h3" className="text-2xl font-bold">
        {value}
      </Typography>
      <Typography variant="p" className="text-sm opacity-70">
        {label}
      </Typography>
    </div>
  );
};

export default StatBox;