import React from 'react';
import Card from '../atoms/Card';
import Typography from '../atoms/Typography';
import Icon from '../atoms/Icon';

interface ErrorStateProps {
  title: string;
  message: string;
  icon?: string;
  actionLabel?: string;
  onAction?: () => void;
}

const ErrorState: React.FC<ErrorStateProps> = ({
  title,
  message,
  icon,
  actionLabel,
  onAction,
}) => {
  return (
    <Card className="text-center">
      {icon && (
        <Icon name={icon} size="xl" className="mx-auto mb-4 text-error" />
      )}
      <Typography variant="h3" className="text-2xl font-bold mb-2 text-error">
        {title}
      </Typography>
      <Typography variant="p" className="mb-6 opacity-70">
        {message}
      </Typography>
      {actionLabel && (
        <button
          onClick={onAction}
          className="btn btn-primary btn-sm"
        >
          {actionLabel}
        </button>
      )}
    </Card>
  );
};

export default ErrorState;