import React from 'react';
import TimelineItem from '../molecules/TimelineItem';

interface TimelineProps {
  items: {
    date: string;
    title: string;
    description: string;
    icon?: string;
  }[];
  currentIndex?: number;
}

const Timeline: React.FC<TimelineProps> = ({ items, currentIndex = 0 }) => {
  return (
    <div className="max-w-2xl mx-auto py-8">
      {items.map((item, idx) => (
        <TimelineItem
          key={idx}
          date={item.date}
          title={item.title}
          description={item.description}
          icon={item.icon}
          isActive={idx === currentIndex}
        />
      ))}
    </div>
  );
};

export default Timeline;