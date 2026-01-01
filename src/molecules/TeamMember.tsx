import React from 'react';
import Card from '../atoms/Card';
import Typography from '../atoms/Typography';
import Avatar from '../atoms/Avatar';
import Link from '../atoms/Link';

interface TeamMemberProps {
  name: string;
  role: string;
  avatar?: string;
  initials?: string;
  bio?: string;
  socialLinks?: { icon: string; url: string }[];
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  avatar,
  initials,
  bio,
  socialLinks = [],
}) => {
  return (
    <Card className="text-center">
      <div className="flex justify-center mb-4">
        <Avatar src={avatar} initials={initials} size="lg" alt={name} />
      </div>
      <Typography variant="h3" className="text-xl font-bold mb-1">
        {name}
      </Typography>
      <Typography variant="p" className="text-sm text-primary mb-3">
        {role}
      </Typography>
      {bio && (
        <Typography variant="p" className="text-sm mb-4">
          {bio}
        </Typography>
      )}
      {socialLinks.length > 0 && (
        <div className="flex justify-center gap-3 pt-3 border-t border-base-300">
          {socialLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.url}
              target="_blank"
              className="hover:opacity-70"
            >
              {link.icon}
            </Link>
          ))}
        </div>
      )}
    </Card>
  );
};

export default TeamMember;