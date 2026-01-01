import type { Meta, StoryObj } from '@storybook/react';
import FeatureBox from '../molecules/FeatureBox';

const meta: Meta<typeof FeatureBox> = {
  title: 'Molecules/FeatureBox',
  component: FeatureBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Performance',
    description: 'Lightning fast load times optimized for speed',
  },
};

export const WithProgress: Story = {
  args: {
    title: 'Completion',
    description: 'Your profile setup progress',
    value: 75,
    max: 100,
  },
};