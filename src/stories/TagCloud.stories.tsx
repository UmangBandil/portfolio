import type { Meta, StoryObj } from '@storybook/react';
import TagCloud from '../molecules/TagCloud';

const meta: Meta<typeof TagCloud> = {
  title: 'Molecules/TagCloud',
  component: TagCloud,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tags: [
      { name: 'React', count: 25 },
      { name: 'TypeScript', count: 18 },
      { name: 'TailwindCSS', count: 15 },
      { name: 'Node.js', count: 20 },
      { name: 'MongoDB', count: 12 },
      { name: 'Docker', count: 8 },
    ],
  },
};