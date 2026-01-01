import React from 'react';
import Card from '../atoms/Card';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import Badge from '../atoms/Badge';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  featured = false,
}) => {
  return (
    <Card className={featured ? 'md:col-span-2 md:row-span-2' : ''}>
      {image && (
        <div className="mb-4 h-48 bg-base-200 rounded-lg overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <Typography variant="h3" className="text-2xl font-bold mb-2">
        {title}
      </Typography>
      <Typography variant="p" className="mb-4">
        {description}
      </Typography>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
      <div className="flex gap-2">
        {liveUrl && (
          <Button variant="primary" className="flex-1">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </Button>
        )}
        {githubUrl && (
          <Button variant="secondary" className="flex-1">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              Source
            </a>
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;