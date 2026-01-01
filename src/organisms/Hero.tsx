import React from 'react';
import Avatar from '../atoms/Avatar';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import Badge from '../atoms/Badge';

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  avatarUrl?: string;
  avatarInitials?: string;
  badges?: string[];
  primaryBtnLabel?: string;
  secondaryBtnLabel?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  avatarUrl,
  avatarInitials,
  badges = [],
  primaryBtnLabel = 'Get Started',
  secondaryBtnLabel = 'Learn More',
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <div className="hero bg-gradient-to-r from-primary to-accent min-h-screen flex items-center">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          {(avatarUrl || avatarInitials) && (
            <div className="flex justify-center mb-8">
              <Avatar src={avatarUrl} initials={avatarInitials} size="xl" />
            </div>
          )}
          <Typography variant="h1" className="text-5xl font-bold text-white mb-4">
            {title}
          </Typography>
          <Typography variant="p" className="text-xl text-white mb-2">
            {subtitle}
          </Typography>
          {description && (
            <Typography variant="p" className="text-white opacity-90 mb-6">
              {description}
            </Typography>
          )}
          {badges.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {badges.map((badge) => (
                <Badge key={badge} variant="secondary">
                  {badge}
                </Badge>
              ))}
            </div>
          )}
          <div className="flex gap-4 justify-center">
            <Button variant="primary" onClick={onPrimaryClick} className="btn-lg">
              {primaryBtnLabel}
            </Button>
            <Button variant="secondary" onClick={onSecondaryClick} className="btn-lg">
              {secondaryBtnLabel}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;