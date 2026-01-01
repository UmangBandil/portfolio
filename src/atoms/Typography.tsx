import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'p',
  className = '',
}) => {
  const Tag = variant as keyof JSX.IntrinsicElements;
  const baseClasses = 'text-base';
  const classes = `${baseClasses} ${className}`.trim();

  return <Tag className={classes}>{children}</Tag>;
};

export default Typography;