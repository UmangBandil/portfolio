import type { Meta, StoryObj } from '@storybook/react';
import ButtonGroup from '../molecules/ButtonGroup';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Molecules/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    buttons: [
      { label: 'Save', variant: 'primary' },
      { label: 'Cancel', variant: 'secondary' },
      { label: 'Delete', variant: 'accent' },
    ],
    orientation: 'horizontal',
  },
};

export const Vertical: Story = {
  args: {
    buttons: [
      { label: 'View Profile', variant: 'primary' },
      { label: 'Edit Settings', variant: 'secondary' },
      { label: 'Help', variant: 'ghost' },
    ],
    orientation: 'vertical',
  },
};