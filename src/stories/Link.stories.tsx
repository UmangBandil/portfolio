import type { Meta, StoryObj } from '@storybook/react';
import Link from '../atoms/Link';

const meta: Meta<typeof Link> = {
  title: 'Atoms/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'accent'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#',
    children: 'Default Link',
    variant: 'default',
  },
};

export const Primary: Story = {
  args: {
    href: '#',
    children: 'Primary Link',
    variant: 'primary',
  },
};