import type { Meta, StoryObj } from '@storybook/react';
import HomeTemplate from '../templates/HomeTemplate';

const meta: Meta<typeof HomeTemplate> = {
  title: 'Templates/HomeTemplate',
  component: HomeTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    navbar: {
      brand: 'Umang',
      navItems: [
        { label: 'Home', href: '#home', active: true },
        { label: 'About', href: '#about' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
      ],
      ctaButton: { label: 'Get Started', onClick: () => console.log('CTA clicked') },
    },
    hero: {
      avatarInitials: 'UB',
      badges: ['React', 'TypeScript', 'TailwindCSS'],
      title: 'Hi, I\'m Umang Bandil',
      subtitle: 'Full-stack developer building amazing web experiences',
      primaryButton: { label: 'View My Work', onClick: () => console.log('Primary') },
      secondaryButton: { label: 'Contact Me', onClick: () => console.log('Secondary') },
    },
    footer: {
      brandName: 'Umang Bandil',
      sections: [
        { title: 'Product', links: ['Features', 'Pricing', 'Security'] },
        { title: 'Company', links: ['About', 'Blog', 'Jobs'] },
      ],
      socialLinks: [
        { icon: 'github', url: 'https://github.com' },
        { icon: 'linkedin', url: 'https://linkedin.com' },
      ],
      copyrightText: '© 2024 Umang Bandil',
    },
    children: (
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <p className="text-base-600">Your featured projects will appear here...</p>
        </div>
      </section>
    ),
  },
};