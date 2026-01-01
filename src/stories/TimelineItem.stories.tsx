import type { Meta, StoryObj } from '@storybook/react';
import TimelineItem from '../molecules/TimelineItem';

const meta: Meta<typeof TimelineItem> = {
  title: 'Molecules/TimelineItem',
  component: TimelineItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Past: Story = {
  args: {
    date: 'Jan 2024',
    title: 'Frontend Developer',
    description: 'Built responsive web interfaces with React and TypeScript',
    isActive: false,
  },
};

export const Current: Story = {
  args: {
    date: 'Present',
    title: 'Full Stack Developer',
    description: 'Working on scalable applications with modern tech stack',
    isActive: true,
  },
};