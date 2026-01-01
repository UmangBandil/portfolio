import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  const baseClasses = 'card bg-base-100 shadow-xl';
  const classes = `${baseClasses} ${className}`.trim();

  return (
    <div className={classes}>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

export default Card;