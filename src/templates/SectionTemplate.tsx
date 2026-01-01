import React from 'react';
import Navbar, { type NavbarProps } from '../organisms/Navbar';
import Footer, { type FooterProps } from '../organisms/Footer';

interface SectionTemplateProps {
  navbar: NavbarProps;
  footer: FooterProps;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const SectionTemplate: React.FC<SectionTemplateProps> = ({
  navbar,
  footer,
  title,
  subtitle,
  children,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      <Navbar {...navbar} />
      <main className="flex-1 py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-base-900 mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-base-600">{subtitle}</p>
            )}
          </div>
          {children}
        </div>
      </main>
      <Footer {...footer} />
    </div>
  );
};

export default SectionTemplate;