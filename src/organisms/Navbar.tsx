import React from 'react';
import NavItem from '../molecules/NavItem';
import Button from '../atoms/Button';
import Typography from '../atoms/Typography';

interface NavbarProps {
  brand: string;
  navItems: { label: string; href: string; active?: boolean }[];
  ctaLabel?: string;
  onCtaClick?: () => void;
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  brand,
  navItems,
  ctaLabel = 'Contact',
  onCtaClick,
  className = '',
}) => {
  return (
    <div className={`navbar bg-base-100 shadow-md sticky top-0 z-50 ${className}`.trim()}>
      <div className="flex-1">
        <Typography variant="h2" className="text-xl font-bold ml-4">
          {brand}
        </Typography>
      </div>
      <div className="flex-none gap-4">
        <div className="flex gap-2">
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              label={item.label}
              href={item.href}
              active={item.active}
            />
          ))}
        </div>
        <Button variant="primary" onClick={onCtaClick}>
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
};

export default Navbar;