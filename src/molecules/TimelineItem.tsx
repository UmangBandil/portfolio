import React from 'react';
import Typography from '../atoms/Typography';
import Icon from '../atoms/Icon';

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  icon?: string;
  isActive?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  description,
  icon,
  isActive = false,
}) => {
  return (
    <div className="flex gap-4 mb-8">
      <div className={`flex flex-col items-center ${isActive ? 'text-primary' : ''}`}>
        <div
          className={`w-4 h-4 rounded-full border-2 ${
            isActive ? 'border-primary bg-primary' : 'border-base-300 bg-base-100'
          }`}
        />
        <div className="w-0.5 h-24 bg-base-300 mt-2" />
      </div>
      <div className="pb-8">
        <Typography variant="span" className="text-sm font-semibold text-primary">
          {date}
        </Typography>
        <Typography variant="h4" className="text-lg font-bold mt-1">
          {title}
        </Typography>
        <Typography variant="p" className="text-sm mt-2 opacity-70">
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default TimelineItem;