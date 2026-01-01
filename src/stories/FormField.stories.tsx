import type { Meta, StoryObj } from '@storybook/react';
import FormField from '../molecules/FormField';

const meta: Meta<typeof FormField> = {
  title: 'Molecules/FormField',
  component: FormField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Email: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    placeholder: 'you@example.com',
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Username',
    type: 'text',
    placeholder: 'username',
    error: 'Username must be at least 3 characters',
    required: true,
  },
};