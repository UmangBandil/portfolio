import React from 'react';
import Badge from '../atoms/Badge';
import Icon from '../atoms/Icon';

interface ProjectTagProps {
  name: string;
  icon?: string;
  variant?: 'primary' | 'secondary' | 'accent';
}

const ProjectTag: React.FC<ProjectTagProps> = ({
  name,
  icon,
  variant = 'secondary',
}) => {
  return (
    <Badge variant={variant} className="flex items-center gap-2">
      {icon && <Icon name={icon} size="sm" />}
      {name}
    </Badge>
  );
};

export default ProjectTag;