import type { Meta, StoryObj } from '@storybook/react';
import Alert from '../atoms/Alert';

const meta: Meta<typeof Alert> = {
  title: 'Atoms/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    children: 'This is an informational alert',
    variant: 'info',
  },
};

export const Success: Story = {
  args: {
    children: 'Operation completed successfully!',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning: Please review this action',
    variant: 'warning',
  },
};

export const Error: Story = {
  args: {
    children: 'An error occurred',
    variant: 'error',
  },
};