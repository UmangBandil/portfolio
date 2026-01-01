import React from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  initials,
  size = 'md',
  className = '',
}) => {
  const sizeClass = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  }[size];

  const baseClasses = `avatar placeholder ${sizeClass}`;
  const classes = `${baseClasses} ${className}`.trim();

  if (src) {
    return (
      <div className={classes}>
        <img src={src} alt={alt} />
      </div>
    );
  }

  return (
    <div className={classes}>
      <div className="bg-neutral text-neutral-content flex items-center justify-center">
        <span className="text-sm font-bold">{initials}</span>
      </div>
    </div>
  );
};

export default Avatar;