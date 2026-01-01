import type { Meta, StoryObj } from '@storybook/react';
import Stats from '../organisms/Stats';

const meta: Meta<typeof Stats> = {
  title: 'Organisms/Stats',
  component: Stats,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    stats: [
      {
        id: '1',
        value: '500+',
        label: 'Projects Completed',
      },
      {
        id: '2',
        value: '100+',
        label: 'Happy Clients',
      },
      {
        id: '3',
        value: '5+',
        label: 'Years Experience',
      },
      {
        id: '4',
        value: '50+',
        label: 'Team Members',
      },
    ],
    columns: 4,
  },
};