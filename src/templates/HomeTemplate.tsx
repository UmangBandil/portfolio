import React from 'react';
import Navbar, { type NavbarProps } from '../organisms/Navbar';
import Hero, { type HeroProps } from '../organisms/Hero';
import Footer, { type FooterProps } from '../organisms/Footer';

interface HomeTemplateProps {
  navbar: NavbarProps;
  hero: HeroProps;
  footer: FooterProps;
  children?: React.ReactNode;
}

const HomeTemplate: React.FC<HomeTemplateProps> = ({
  navbar,
  hero,
  footer,
  children,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      <Navbar {...navbar} />
      <main className="flex-1">
        <Hero {...hero} />
        {children}
      </main>
      <Footer {...footer} />
    </div>
  );
};

export default HomeTemplate;