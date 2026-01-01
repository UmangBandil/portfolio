import React from 'react';
import SocialLinks from '../molecules/SocialLinks';
import Typography from '../atoms/Typography';
import Link from '../atoms/Link';
import Divider from '../atoms/Divider';

interface FooterProps {
  brand: string;
  description?: string;
  sections?: {
    title: string;
    links: { label: string; url: string }[];
  }[];
  socialLinks?: { name: string; url: string; icon: string }[];
  copyrightText?: string;
}

const Footer: React.FC<FooterProps> = ({
  brand,
  description,
  sections = [],
  socialLinks = [],
  copyrightText,
}) => {
  return (
    <footer className="bg-base-200 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <Typography variant="h3" className="text-lg font-bold mb-3">
              {brand}
            </Typography>
            {description && (
              <Typography variant="p" className="text-sm opacity-70">
                {description}
              </Typography>
            )}
          </div>

          {/* Link Sections */}
          {sections.map((section, idx) => (
            <div key={idx}>
              <Typography variant="h4" className="font-semibold mb-3">
                {section.title}
              </Typography>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.url} className="text-sm opacity-70 hover:opacity-100">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social & Copyright */}
        {socialLinks.length > 0 && (
          <>
            <Divider />
            <div className="flex justify-between items-center mt-8">
              <Typography variant="p" className="text-sm opacity-70">
                {copyrightText || `© 2024 ${brand}. All rights reserved.`}
              </Typography>
              <SocialLinks links={socialLinks} size="md" />
            </div>
          </>
        )}
      </div>
    </footer>
  );
};

export default Footer;