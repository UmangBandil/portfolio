import React from 'react';
import Badge from '../atoms/Badge';
import Typography from '../atoms/Typography';

interface TagCloudProps {
  tags: { name: string; count: number }[];
  onTagClick?: (tag: string) => void;
}

const TagCloud: React.FC<TagCloudProps> = ({ tags, onTagClick }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {tags.map((tag) => (
        <Badge
          key={tag.name}
          variant="secondary"
          className="cursor-pointer hover:bg-primary hover:text-primary-content transition-colors"
          onClick={() => onTagClick?.(tag.name)}
        >
          {tag.name}
          <span className="ml-2 text-xs opacity-70">({tag.count})</span>
        </Badge>
      ))}
    </div>
  );
};

export default TagCloud;