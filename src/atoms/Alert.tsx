import React from 'react';

interface AlertProps {
  children: React.ReactNode;
  variant?: 'info' | 'success' | 'warning' | 'error';
  onClose?: () => void;
  className?: string;
}

const Alert: React.FC<AlertProps> = ({
  children,
  variant = 'info',
  onClose,
  className = '',
}) => {
  const baseClasses = `alert alert-${variant}`;
  const classes = `${baseClasses} ${className}`.trim();

  return (
    <div className={classes} role="alert">
      <div>{children}</div>
      {onClose && (
        <button onClick={onClose} className="btn btn-sm btn-ghost">✕</button>
      )}
    </div>
  );
};

export default Alert;