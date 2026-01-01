import type { Meta, StoryObj } from '@storybook/react';
import Divider from '../atoms/Divider';
import Typography from '../atoms/Typography';

const meta: Meta<typeof Divider> = {
  title: 'Atoms/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-64">
      <Typography variant="p">Content above</Typography>
      <Divider />
      <Typography variant="p">Content below</Typography>
    </div>
  ),
};