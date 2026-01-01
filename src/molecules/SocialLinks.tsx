import React from 'react';
import Link from '../atoms/Link';
import Icon from '../atoms/Icon';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

interface SocialLinksProps {
  links: SocialLink[];
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  links,
  size = 'md',
  className = '',
}) => {
  const sizeClass = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
  }[size];

  return (
    <div className={`flex ${sizeClass} items-center ${className}`.trim()}>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity"
        >
          <Icon name={link.icon} size={size} />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;