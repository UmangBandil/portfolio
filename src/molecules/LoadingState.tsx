import React from 'react';
import Card from '../atoms/Card';
import Typography from '../atoms/Typography';
import Spinner from '../atoms/Spinner';

interface LoadingStateProps {
  message?: string;
  fullHeight?: boolean;
}

const LoadingState: React.FC<LoadingStateProps> = ({
  message = 'Loading...',
  fullHeight = false,
}) => {
  return (
    <Card className={fullHeight ? 'h-screen flex items-center justify-center' : ''}>
      <div className="flex flex-col items-center justify-center gap-4">
        <Spinner size="lg" />
        <Typography variant="p" className="text-center">
          {message}
        </Typography>
      </div>
    </Card>
  );
};

export default LoadingState;