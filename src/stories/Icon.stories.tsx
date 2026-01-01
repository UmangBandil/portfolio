import type { Meta, StoryObj } from '@storybook/react';
import Icon from '../atoms/Icon';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'circle',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    name: 'star',
    size: 'lg',
  },
};