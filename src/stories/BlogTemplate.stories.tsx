import type { Meta, StoryObj } from '@storybook/react';
import BlogTemplate from '../templates/BlogTemplate';

const meta: Meta<typeof BlogTemplate> = {
  title: 'Templates/BlogTemplate',
  component: BlogTemplate,
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
        { label: 'About', href: '#about' },
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
    title: 'Getting Started with React and TypeScript',
    author: 'Umang Bandil',
    date: 'January 15, 2024',
    readTime: '5 min read',
    heroImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600',
    children: (
      <div>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Getting Started</h2>
        <p className="mb-4">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Key Takeaways</h2>
        <ul className="list-disc list-inside">
          <li>Point 1: Duis aute irure dolor in reprehenderit</li>
          <li>Point 2: In voluptate velit esse cillum dolore</li>
          <li>Point 3: Fugiat nulla pariatur excepteur sint occaecat</li>
        </ul>
      </div>
    ),
  },
};