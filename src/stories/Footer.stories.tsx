import type { Meta, StoryObj } from '@storybook/react';
import Footer from '../organisms/Footer';

const meta: Meta<typeof Footer> = {
  title: 'Organisms/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    brandName: 'Umang Bandil',
    sections: [
      {
        title: 'Product',
        links: ['Features', 'Pricing', 'Security', 'Enterprise'],
      },
      {
        title: 'Company',
        links: ['About', 'Blog', 'Jobs', 'Press'],
      },
      {
        title: 'Legal',
        links: ['Privacy', 'Terms', 'Cookie Policy'],
      },
    ],
    socialLinks: [
      { icon: 'github', url: 'https://github.com' },
      { icon: 'linkedin', url: 'https://linkedin.com' },
      { icon: 'twitter', url: 'https://twitter.com' },
    ],
    copyrightText: '© 2024 Umang Bandil. All rights reserved.',
  },
};