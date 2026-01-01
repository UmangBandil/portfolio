import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'accent';
  className?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
}

const Link: React.FC<LinkProps> = ({
  href,
  children,
  variant = 'default',
  className = '',
  target,
  rel,
}) => {
  const variantClass = variant !== 'default' ? `link-${variant}` : '';
  const baseClasses = 'link';
  const classes = `${baseClasses} ${variantClass} ${className}`.trim();

  return (
    <a href={href} className={classes} target={target} rel={rel}>
      {children}
    </a>
  );
};

export default Link;