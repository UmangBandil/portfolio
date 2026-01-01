import type { Meta, StoryObj } from '@storybook/react';
import LoadingState from '../molecules/LoadingState';

const meta: Meta<typeof LoadingState> = {
  title: 'Molecules/LoadingState',
  component: LoadingState,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: 'Loading your data...',
    fullHeight: false,
  },
};