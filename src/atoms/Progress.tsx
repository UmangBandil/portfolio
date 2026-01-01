import React from 'react';

interface ProgressProps {
  value: number;
  max?: number;
  variant?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
  className?: string;
}

const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  variant = 'primary',
  className = '',
}) => {
  const variantClass = variant !== 'primary' ? `progress-${variant}` : '';
  const percentage = (value / max) * 100;
  const classes = `progress ${variantClass} ${className}`.trim();

  return (
    <progress className={classes} value={value} max={max}></progress>
  );
};

export default Progress;