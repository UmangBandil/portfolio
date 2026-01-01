import React from 'react';
import Card from '../atoms/Card';
import Typography from '../atoms/Typography';
import Badge from '../atoms/Badge';

interface SkillCardProps {
  title: string;
  description: string;
  skills: string[];
  proficiency?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  description,
  skills,
  proficiency = 'intermediate',
}) => {
  const proficiencyColor = {
    beginner: 'badge-info',
    intermediate: 'badge-warning',
    advanced: 'badge-accent',
    expert: 'badge-success',
  }[proficiency];

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <Typography variant="h3" className="text-lg font-bold">
          {title}
        </Typography>
        <Badge variant={proficiency === 'expert' ? 'success' : 'primary'}>
          {proficiency}
        </Badge>
      </div>
      <Typography variant="p" className="mb-4">
        {description}
      </Typography>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </Card>
  );
};

export default SkillCard;