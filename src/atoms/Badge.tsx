import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'info' | 'success' | 'warning' | 'error';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  className = '',
}) => {
  const baseClasses = 'badge';
  const variantClass = variant !== 'primary' ? `badge-${variant}` : '';
  const classes = `${baseClasses} ${variantClass} ${className}`.trim();

  return <span className={classes}>{children}</span>;
};

export default Badge;