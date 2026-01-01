import type { Meta, StoryObj } from '@storybook/react';
import ProjectTag from '../molecules/ProjectTag';

const meta: Meta<typeof ProjectTag> = {
  title: 'Molecules/ProjectTag',
  component: ProjectTag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'React',
    variant: 'secondary',
  },
};

export const WithIcon: Story = {
  args: {
    name: 'TypeScript',
    icon: 'code',
    variant: 'accent',
  },
};