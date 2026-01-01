import type { Meta, StoryObj } from '@storybook/react';
import Hero from '../organisms/Hero';

const meta: Meta<typeof Hero> = {
  title: 'Organisms/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Welcome to My Portfolio',
    subtitle: 'Full Stack Developer & Designer',
    description: 'Creating beautiful, functional digital experiences',
    avatarInitials: 'UB',
    badges: ['React', 'TypeScript', 'TailwindCSS'],
    primaryBtnLabel: 'View Projects',
    secondaryBtnLabel: 'Contact Me',
  },
};