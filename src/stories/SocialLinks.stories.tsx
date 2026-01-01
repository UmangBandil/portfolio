import type { Meta, StoryObj } from '@storybook/react';
import SocialLinks from '../molecules/SocialLinks';

const meta: Meta<typeof SocialLinks> = {
  title: 'Molecules/SocialLinks',
  component: SocialLinks,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: [
      { name: 'GitHub', url: 'https://github.com', icon: 'github' },
      { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
      { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
    ],
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    links: [
      { name: 'GitHub', url: 'https://github.com', icon: 'github' },
      { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
      { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
    ],
    size: 'lg',
  },
};