import type { Meta, StoryObj } from '@storybook/react';
import Timeline from '../organisms/Timeline';

const meta: Meta<typeof Timeline> = {
  title: 'Organisms/Timeline',
  component: Timeline,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        date: 'Jan 2023',
        title: 'Started Learning React',
        description: 'Began my journey with React and modern web development',
      },
      {
        date: 'Jun 2023',
        title: 'First Full Stack Project',
        description: 'Built a complete e-commerce application',
      },
      {
        date: 'Present',
        title: 'Senior Developer',
        description: 'Working on scalable enterprise applications',
      },
    ],
    currentIndex: 2,
  },
};