import React from 'react';
import Link from '../atoms/Link';
import Icon from '../atoms/Icon';

interface NavItemProps {
  label: string;
  href: string;
  icon?: string;
  active?: boolean;
  badge?: string | number;
}

const NavItem: React.FC<NavItemProps> = ({
  label,
  href,
  icon,
  active = false,
  badge,
}) => {
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
        active
          ? 'bg-primary text-primary-content'
          : 'hover:bg-base-200'
      }`}
    >
      {icon && <Icon name={icon} size="sm" />}
      <span>{label}</span>
      {badge && (
        <span className="badge badge-sm badge-primary ml-auto">{badge}</span>
      )}
    </Link>
  );
};

export default NavItem;