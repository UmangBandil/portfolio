import type { Meta, StoryObj } from '@storybook/react';
import SectionTemplate from '../templates/SectionTemplate';

const meta: Meta<typeof SectionTemplate> = {
  title: 'Templates/SectionTemplate',
  component: SectionTemplate,
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
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about', active: true },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
      ],
      ctaButton: { label: 'Get Started', onClick: () => console.log('CTA clicked') },
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
    title: 'About Me',
    subtitle: 'Learn more about my journey and expertise',
    children: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-base-200 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
          <p className="text-base-600">
            I'm a passionate developer focused on creating beautiful and functional web applications.
          </p>
        </div>
        <div className="bg-base-200 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">What I Do</h3>
          <p className="text-base-600">
            I specialize in full-stack development with React, TypeScript, and modern web technologies.
          </p>
        </div>
      </div>
    ),
  },
};