import type { Meta, StoryObj } from '@storybook/react';
import Features from '../organisms/Features';

const meta: Meta<typeof Features> = {
  title: 'Organisms/Features',
  component: Features,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    features: [
      {
        id: '1',
        icon: 'zap',
        title: 'Fast Performance',
        description: 'Optimized for speed and efficiency',
      },
      {
        id: '2',
        icon: 'shield',
        title: 'Secure',
        description: 'Enterprise-grade security features',
      },
      {
        id: '3',
        icon: 'cpu',
        title: 'Scalable',
        description: 'Grows with your business needs',
      },
      {
        id: '4',
        icon: 'activity',
        title: 'Real-time Analytics',
        description: 'Monitor everything in real-time',
      },
    ],
    columns: 2,
  },
};