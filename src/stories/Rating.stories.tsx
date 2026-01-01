import type { Meta, StoryObj } from '@storybook/react';
import Rating from '../atoms/Rating';

const meta: Meta<typeof Rating> = {
  title: 'Atoms/Rating',
  component: Rating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 0,
    max: 5,
  },
};

export const Rated: Story = {
  args: {
    value: 4,
    max: 5,
  },
};

export const Readonly: Story = {
  args: {
    value: 5,
    max: 5,
    readonly: true,
  },
};