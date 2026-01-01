import type { Meta, StoryObj } from '@storybook/react';
import PricingCard from '../molecules/PricingCard';

const meta: Meta<typeof PricingCard> = {
  title: 'Molecules/PricingCard',
  component: PricingCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    name: 'Standard',
    price: '$29/mo',
    description: 'Perfect for individuals',
    features: ['10 Projects', '1 GB Storage', 'Email Support', 'Basic Analytics'],
    popular: false,
  },
};

export const Professional: Story = {
  args: {
    name: 'Professional',
    price: '$79/mo',
    description: 'For growing teams',
    features: ['Unlimited Projects', '100 GB Storage', 'Priority Support', 'Advanced Analytics', 'Team Collaboration'],
    popular: true,
  },
};