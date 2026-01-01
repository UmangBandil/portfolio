import type { Meta, StoryObj } from '@storybook/react';
import StatBox from '../molecules/StatBox';

const meta: Meta<typeof StatBox> = {
  title: 'Molecules/StatBox',
  component: StatBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    value: '500+',
    label: 'Happy Clients',
    variant: 'success',
  },
};

export const Primary: Story = {
  args: {
    value: '50',
    label: 'Projects Completed',
    variant: 'primary',
  },
};