import React from 'react';
import SkillCard from '../molecules/SkillCard';

interface SkillsGridProps {
  skills: {
    title: string;
    description: string;
    skills: string[];
    proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  }[];
  columns?: 1 | 2 | 3 | 4;
}

const SkillsGrid: React.FC<SkillsGridProps> = ({ skills, columns = 3 }) => {
  const gridClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }[columns];

  return (
    <div className={`grid ${gridClass} gap-6`}>
      {skills.map((skill, idx) => (
        <SkillCard
          key={idx}
          title={skill.title}
          description={skill.description}
          skills={skill.skills}
          proficiency={skill.proficiency}
        />
      ))}
    </div>
  );
};

export default SkillsGrid;