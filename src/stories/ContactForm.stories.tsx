import type { Meta, StoryObj } from '@storybook/react';
import ContactForm from '../organisms/ContactForm';

const meta: Meta<typeof ContactForm> = {
  title: 'Organisms/ContactForm',
  component: ContactForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: (data) => console.log('Form submitted:', data),
  },
};

export const WithPlaceholders: Story = {
  args: {
    onSubmit: (data) => console.log('Form submitted:', data),
  },
};