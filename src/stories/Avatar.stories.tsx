import type { Meta, StoryObj } from '@storybook/react';
import Avatar from '../atoms/Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
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

export const WithImage: Story = {
  args: {
    src: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69da7d.jpg',
    alt: 'User Avatar',
    size: 'md',
  },
};

export const WithInitials: Story = {
  args: {
    initials: 'UB',
    size: 'md',
  },
};