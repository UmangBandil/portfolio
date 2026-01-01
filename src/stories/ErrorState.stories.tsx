import type { Meta, StoryObj } from '@storybook/react';
import ErrorState from '../molecules/ErrorState';

const meta: Meta<typeof ErrorState> = {
  title: 'Molecules/ErrorState',
  component: ErrorState,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Something went wrong',
    message: 'We encountered an unexpected error. Please try again later.',
    icon: 'alert-circle',
    actionLabel: 'Retry',
  },
};