import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Card from '../atoms/Card';
import Typography from '../atoms/Typography';

const meta: Meta<typeof Card> = {
  title: 'Atoms/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Typography variant="h2">Card Title</Typography>
        <Typography variant="p">This is the card content.</Typography>
      </>
    ),
  },
};